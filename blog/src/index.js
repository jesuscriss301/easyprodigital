#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { generateArticle } from './pipeline.js';
import { renderArticle } from './templates/render.js';
import { config } from '../config/default.js';
import { slugify } from './utils/helpers.js';

const [, , cmd, ...args] = process.argv;

function parseFlags(args) {
  const flags = {}; const positional = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[++i] : true;
      flags[key] = val;
    } else positional.push(args[i]);
  }
  return { flags, positional };
}

async function main() {
  const { flags, positional } = parseFlags(args);

  switch (cmd) {
    case 'generate': {
      const topic = positional.join(' ');
      if (!topic) return usage('Falta el tema. Ej: node src/index.js generate "beneficios del café"');
      await generateArticle(topic, {
        template: flags.template !== undefined ? parseInt(flags.template, 10) : undefined,
        scientific: flags.scientific ? true : undefined,
        news: flags.news ? true : undefined,
      });
      break;
    }

    case 'batch': {
      const file = positional[0];
      if (!file) return usage('Falta el archivo de temas. Ej: node src/index.js batch temas.txt');
      const topics = (await fs.readFile(file, 'utf8')).split('\n').map(t => t.trim()).filter(Boolean);
      console.log(`Generando ${topics.length} artículos en lote…\n`);
      for (const t of topics) {
        try { await generateArticle(t); }
        catch (err) { console.error(`✗ Falló "${t}": ${err.message}`); }
      }
      break;
    }

    case 'demo': {
      // Previsualiza las 5 plantillas con datos de ejemplo — sin API keys ni red.
      await demo();
      break;
    }

    default:
      usage();
  }
}

function usage(err) {
  if (err) console.error(`\n✗ ${err}\n`);
  console.log(`SEO Article Forge — generador de artículos SEO con IA

Uso:
  node src/index.js generate "tema del artículo" [--template 0-4] [--scientific] [--news]
  node src/index.js batch temas.txt          # un tema por línea
  node src/index.js demo                     # previsualizar las 5 plantillas sin API keys

Configura las API keys en .env (copia .env.example).`);
}

async function demo() {
  const markdown = `# Cómo funciona el compostaje doméstico: guía completa

El 40 % de la basura que genera un hogar promedio es materia orgánica que podría convertirse en abono. Sin embargo, la mayoría termina en rellenos sanitarios produciendo metano, un gas 25 veces más potente que el CO2 como agente del efecto invernadero [1].

## Qué es el compostaje y por qué importa

El compostaje es un proceso biológico controlado en el que microorganismos descomponen la materia orgánica en presencia de oxígeno. El resultado es **humus**: un abono oscuro, estable y rico en nutrientes que mejora la estructura del suelo.

A diferencia de la descomposición anaeróbica de los vertederos, el compostaje aeróbico no genera malos olores cuando se maneja correctamente y reduce las emisiones hasta en un 50 % [2].

[IMAGE: Compostera doméstica con restos vegetales frescos]

## Los cuatro factores que determinan el éxito

Para que los microorganismos trabajen a su máxima velocidad necesitas equilibrar cuatro variables:

- **Carbono y nitrógeno**: la proporción ideal es 25-30 partes de carbono (hojas secas, cartón) por 1 de nitrógeno (restos de cocina, césped).
- **Humedad**: el material debe sentirse como una esponja escurrida, entre 40 % y 60 %.
- **Oxígeno**: voltear la pila cada 7-10 días evita zonas anaeróbicas.
- **Temperatura**: entre 55 °C y 65 °C se eliminan patógenos y semillas de maleza [1].

Si quieres profundizar en el balance de nutrientes, revisa nuestra guía sobre {{related: fertilizantes orgánicos para huertos urbanos}}.

## Qué puedes compostar (y qué no)

La regla general: si fue planta, casi siempre puede ir a la compostera. Cáscaras de frutas y verduras, borra de café, cáscaras de huevo trituradas, hojas secas y cartón sin tintas plásticas.

Evita carnes, lácteos y grasas: no porque no se descompongan, sino porque atraen plagas y generan olores en sistemas domésticos pequeños.

[IMAGE: Separación de residuos orgánicos en la cocina]

> Un metro cúbico de compost maduro puede reemplazar hasta 100 kg de fertilizante químico en un huerto familiar.

## Preguntas frecuentes

### ¿Cuánto tarda en estar listo el compost?

Entre 3 y 6 meses en sistemas de pila tradicional; 6 a 8 semanas con volteo frecuente y trituración previa del material.

### ¿Sirve para apartamentos?

Sí. El vermicompostaje con lombrices rojas californianas funciona en espacios de 60 × 40 cm y no produce olores si se mantiene el equilibrio de humedad. Aprende más en {{related: vermicompostaje en espacios pequeños}}.

## Conclusión: empieza con lo que tienes

No necesitas equipo especializado: un recipiente ventilado, restos de cocina y hojas secas bastan para producir tu primer compost en tres meses. Empieza pequeño, ajusta la humedad cada semana y en un ciclo tendrás abono gratuito para tus plantas.`;

  const mockImage = (seed, alt) => ({
    url: `https://picsum.photos/seed/${seed}/1600/900`,
    width: 1600, height: 900, alt,
    credit: 'Foto de ejemplo (demo)', creditUrl: 'https://picsum.photos', license: 'demo', kind: 'stock',
  });

  const data = {
    markdown,
    meta: {
      title: 'Cómo funciona el compostaje doméstico: guía completa',
      metaDescription: 'Aprende cómo funciona el compostaje doméstico paso a paso: qué compostar, los 4 factores clave y cuánto tarda. Guía práctica con base científica.',
      slug: 'como-funciona-compostaje-domestico',
      keywords: ['compostaje doméstico', 'cómo hacer compost', 'abono orgánico casero'],
    },
    images: {
      featured: mockImage('compost1', 'Compostera doméstica en un jardín'),
      inline: [mockImage('compost2', 'Compostera con restos vegetales'), mockImage('compost3', 'Separación de residuos orgánicos')],
    },
    sourceImages: [],
    citations: [
      { title: 'Composting At Home — US EPA', url: 'https://www.epa.gov/recycle/composting-home' },
      { title: 'FAO: Manual de compostaje del agricultor', url: 'https://www.fao.org/documents' },
    ],
    related: [
      { slug: 'fertilizantes-organicos-huertos-urbanos', title: 'Fertilizantes orgánicos para huertos urbanos', description: 'Tipos, dosis y cuándo aplicarlos.', featuredImage: 'https://picsum.photos/seed/rel1/800/450' },
      { slug: 'vermicompostaje-espacios-pequenos', title: 'Vermicompostaje en espacios pequeños', description: 'Compost con lombrices en tu apartamento.', featuredImage: 'https://picsum.photos/seed/rel2/800/450' },
      { slug: 'huerto-en-balcon-guia', title: 'Cómo montar un huerto en el balcón', description: 'De la maceta a la cosecha en 90 días.', featuredImage: 'https://picsum.photos/seed/rel3/800/450' },
    ],
    scientific: true,
    langCode: 'es',
  };

  await fs.mkdir(config.output.dir, { recursive: true });
  console.log('Generando demo de las 5 plantillas…\n');
  const demoEntries = [];
  for (let i = 0; i < 5; i++) {
    const { html, templateName } = renderArticle(data, i);
    const slug = `demo-${i + 1}-${slugify(templateName)}`;
    const file = path.join(config.output.dir, `${slug}.html`);
    await fs.writeFile(file, html, 'utf8');
    demoEntries.push({
      slug,
      title: `${data.meta.title} — plantilla ${templateName}`,
      description: data.meta.metaDescription,
      keywords: data.meta.keywords,
      featuredImage: data.images.featured.url,
      template: templateName,
    });
    console.log(`  ✔ Plantilla ${i + 1} (${templateName}) → ${file}`);
  }

  // Manifiesto para la página /blog del sitio — solo si no existe uno real
  const manifestPath = path.join(config.output.dir, 'posts.json');
  try {
    await fs.access(manifestPath);
    console.log('\nposts.json ya existe: no se sobreescribe el manifiesto.');
  } catch {
    await fs.writeFile(manifestPath, JSON.stringify({ articles: demoEntries, lastTemplate: 4 }, null, 2), 'utf8');
    console.log(`\n  ✔ Manifiesto demo → ${manifestPath}`);
  }
  console.log('Abre los archivos en tu navegador para comparar los diseños.');
}

main().catch(err => { console.error(`\n✗ Error: ${err.message}`); process.exit(1); });
