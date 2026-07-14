import { config } from '../../config/default.js';
import { claudeComplete } from './claude.js';
import { openaiComplete } from './openai.js';
import { geminiComplete } from './gemini.js';
import { deepseekComplete } from './deepseek.js';

const PROVIDERS = {
  claude: claudeComplete,
  openai: openaiComplete,
  gemini: geminiComplete,
  deepseek: deepseekComplete,
};

/**
 * Interfaz unificada — sin importar el modelo, los prompts se construyen
 * igual y se envían con { system, user, maxTokens, temperature }.
 * Devuelve siempre texto plano.
 */
export async function aiComplete({ system, user, maxTokens = 4096, temperature = 0.7 }) {
  const order = [config.ai.provider, ...Object.keys(PROVIDERS)];
  const tried = new Set();
  let lastError;

  for (const name of order) {
    if (tried.has(name)) continue;
    tried.add(name);
    if (!config.ai.keys[name]) continue;
    try {
      return await PROVIDERS[name]({
        apiKey: config.ai.keys[name],
        model: config.ai.models[name],
        system, user, maxTokens, temperature,
      });
    } catch (err) {
      lastError = err;
      console.warn(`  ⚠ Proveedor "${name}" falló (${err.message}). Probando siguiente…`);
    }
  }
  throw new Error(`Ningún proveedor de IA disponible. Configura una API key en .env. Último error: ${lastError?.message || 'sin keys'}`);
}
