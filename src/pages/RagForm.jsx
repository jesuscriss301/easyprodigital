import { useMemo, useState } from 'react'
import Seo from '../components/Seo.jsx'
import { profile, site } from '../data/profile.js'

const initialForm = {
  bizName: '',
  bizCity: '',
  ctName: '',
  ctPhone: '',
  bizDesc: '',
  ctEmail: '',
  ctBestTime: '',
  dxFueraHorario: '',
  dxSinResponder: '',
  dxTicket: '',
  dxTiempo: '',
  dxPerdidas: '',
  dxIntentos: '',
  waNumber: '',
  volume: '',
  hours: '',
  bdDetail: '',
  updateFreq: '',
  topQ: '',
  objections: '',
  almProductos: '',
  almEnvios: '',
  resMenu: '',
  resZonas: '',
  inmPortafolio: '',
  inmFiltros: '',
  srvLista: '',
  srvAgenda: '',
  otroDesc: '',
  frases: '',
  prohibido: '',
  escalaA: '',
  extra: '',
}

const initialPills = {
  medioContacto: [],
  canales: [],
  horarioAgente: [],
  tieneBd: [],
  fuentes: [],
  acciones: [],
  tono: [],
  escalamiento: [],
  sensibilidad: [],
  despliegue: [],
  almacenStockTiempoReal: [],
  restauranteGestiones: [],
  inmobiliariaOperacion: [],
  inmobiliariaVisitas: [],
  serviciosCotizacion: [],
}

const businessMessages = {
  almacen: 'El cliente que escribe fuera de horario rara vez espera: un agente que responde al instante evita que el lead se vaya a otro sitio.',
  restaurante: 'En hora pico cada chat sin responder puede ser un pedido perdido. Un agente ayuda a captar pedidos incluso cuando el equipo está ocupado.',
  inmobiliaria: 'Los leads inmobiliarios se enfrían en horas. Responder rápido puede marcar la diferencia entre una visita o una oportunidad perdida.',
  servicios: 'Las cotizaciones que llegan tarde se convierten con facilidad en clientes perdidos para otro proveedor.',
  otro: 'La automatización puede recuperar ventas y tiempo de atención cuando el equipo no está disponible.',
}

const conditionalFields = {
  almacen: ['almProductos', 'almEnvios', 'almacenStockTiempoReal'],
  restaurante: ['resMenu', 'restauranteGestiones', 'resZonas'],
  inmobiliaria: ['inmPortafolio', 'inmobiliariaOperacion', 'inmFiltros', 'inmobiliariaVisitas'],
  servicios: ['srvLista', 'serviciosCotizacion', 'srvAgenda'],
  otro: ['otroDesc'],
}

export default function RagForm() {
  const [form, setForm] = useState(initialForm)
  const [pills, setPills] = useState(initialPills)
  const [businessType, setBusinessType] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: 'Completa los campos marcados con *' })
  const [summary, setSummary] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const selectedBusinessText = useMemo(() => {
    if (!businessType) return 'Selecciona el tipo de negocio para ver el contexto del diagnóstico.'
    return businessMessages[businessType] || businessMessages.otro
  }, [businessType])

  const apiBase = import.meta.env.VITE_API_URL || '/api'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handlePillToggle = (group, value, multi = true) => {
    setPills((current) => {
      const currentValues = current[group] || []
      if (multi) {
        const nextValues = currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value]
        return { ...current, [group]: nextValues }
      }
      return { ...current, [group]: [value] }
    })
    setErrors((current) => ({ ...current, [group]: '' }))
  }

  const handleBusinessSelect = (value) => {
    setBusinessType(value)
  }

  const validate = () => {
    const nextErrors = {}
    const requiredFields = ['bizName', 'bizCity', 'ctName', 'ctPhone', 'bizDesc', 'dxFueraHorario', 'dxPerdidas', 'topQ', 'prohibido']
    requiredFields.forEach((field) => {
      if (!form[field]?.trim()) nextErrors[field] = 'Este campo es obligatorio.'
    })

    if (!businessType) nextErrors.businessType = 'Selecciona un tipo de negocio.'
    if (!pills.canales?.length) nextErrors.canales = 'Selecciona al menos un canal.'
    if (!pills.tieneBd?.length) nextErrors.tieneBd = 'Selecciona una opción.'
    if (!pills.medioContacto?.length) nextErrors.medioContacto = 'Selecciona un medio de contacto.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const buildPayload = () => ({
    _meta: {
      formulario: 'RAG ventas v1',
      fecha: new Date().toISOString(),
      agencia: 'easyprodigital.com',
      autor: profile.name,
    },
    ...form,
    tipo_negocio: businessType,
    ...pills,
  })

  const handleGenerateSummary = (event) => {
    event.preventDefault()
    if (!validate()) {
      setStatus({ type: 'error', text: 'Faltan campos obligatorios. Revisa arriba.' })
      return
    }
    const payload = buildPayload()
    setSummary(JSON.stringify(payload, null, 2))
    setStatus({ type: 'success', text: 'Resumen listo. Puedes enviarlo para guardarlo en la base de datos.' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) {
      setStatus({ type: 'error', text: 'Faltan campos obligatorios. Revisa arriba.' })
      return
    }

    const payload = buildPayload()
    setSubmitting(true)
    setStatus({ type: 'loading', text: 'Guardando el formulario…' })

    try {
      const response = await fetch(`${apiBase}/rag-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result?.message || 'No se pudo guardar el formulario.')
      }

      setStatus({ type: 'success', text: 'Formulario guardado correctamente.' })
      setSummary(JSON.stringify(payload, null, 2))
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'No se pudo guardar el formulario.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Seo
        title="Formulario RAG de ventas | Easy Pro Digital"
        description="Formulario de descubrimiento de ventas con IA para capturar información y guardarla en una base de datos MySQL."
        path="/rag-form/"
      />
      <div className="rag-form-page">
        <header className="rag-form-header">
          <div className="container">
            <p className="eyebrow">Easy Pro Digital · Automatización de ventas con IA</p>
            <h1>Formulario de descubrimiento — Agente de ventas con RAG</h1>
            <p>
              Esta información nos permite construir un agente de IA que responda con los datos reales de tu negocio: catálogo, precios, políticas y tono. Puedes dejar en blanco lo que no aplique.
            </p>
          </div>
        </header>

        <div className="container rag-form-body">
          <form onSubmit={handleSubmit} className="rag-form-form">
            <section className="rag-form-card">
              <h2>1 · Tu negocio</h2>
              <p className="rag-form-hint">Lo básico para saber quién eres y qué vendes.</p>

              <div className="rag-form-grid">
                <label>
                  <span>Nombre del negocio *</span>
                  <input name="bizName" value={form.bizName} onChange={handleChange} placeholder="Ej: Almacenes La Rebaja" />
                  {errors.bizName && <span className="rag-form-error">{errors.bizName}</span>}
                </label>
                <label>
                  <span>Ciudad / zona de operación *</span>
                  <input name="bizCity" value={form.bizCity} onChange={handleChange} placeholder="Ej: Medellín y área metropolitana" />
                  {errors.bizCity && <span className="rag-form-error">{errors.bizCity}</span>}
                </label>
              </div>

              <div className="rag-form-grid">
                <label>
                  <span>Persona de contacto *</span>
                  <input name="ctName" value={form.ctName} onChange={handleChange} placeholder="Nombre y cargo" />
                  {errors.ctName && <span className="rag-form-error">{errors.ctName}</span>}
                </label>
                <label>
                  <span>WhatsApp / teléfono *</span>
                  <input name="ctPhone" value={form.ctPhone} onChange={handleChange} placeholder="+57 ..." />
                  {errors.ctPhone && <span className="rag-form-error">{errors.ctPhone}</span>}
                </label>
              </div>

              <label>
                <span>Tipo de negocio *</span>
                <div className="rag-form-business-grid">
                  {['almacen', 'restaurante', 'inmobiliaria', 'servicios', 'otro'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`rag-form-biz ${businessType === option ? 'active' : ''}`}
                      onClick={() => handleBusinessSelect(option)}
                    >
                      {option === 'almacen' && '🏬'}
                      {option === 'restaurante' && '🍽️'}
                      {option === 'inmobiliaria' && '🏘️'}
                      {option === 'servicios' && '🛠️'}
                      {option === 'otro' && '✳️'}
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
                {errors.businessType && <span className="rag-form-error">{errors.businessType}</span>}
              </label>

              <label>
                <span>Describe en 2-3 líneas qué vendes y a quién *</span>
                <textarea name="bizDesc" value={form.bizDesc} onChange={handleChange} placeholder="Ej: Vendemos repuestos de motos..." />
                {errors.bizDesc && <span className="rag-form-error">{errors.bizDesc}</span>}
              </label>

              <label>
                <span>¿Por qué medio prefieres que te contactemos? *</span>
                <div className="rag-form-pill-list">
                  {['whatsapp', 'llamada', 'correo', 'videollamada'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`rag-form-pill ${pills.medioContacto.includes(value) ? 'active' : ''}`}
                      onClick={() => handlePillToggle('medioContacto', value, false)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                {errors.medioContacto && <span className="rag-form-error">{errors.medioContacto}</span>}
              </label>

              <div className="rag-form-grid">
                <label>
                  <span>Correo electrónico</span>
                  <input name="ctEmail" value={form.ctEmail} onChange={handleChange} placeholder="tucorreo@negocio.com" />
                </label>
                <label>
                  <span>Mejor horario para contactarte</span>
                  <input name="ctBestTime" value={form.ctBestTime} onChange={handleChange} placeholder="Ej: entre semana después de las 2pm" />
                </label>
              </div>
            </section>

            <section className="rag-form-card">
              <h2>2 · Diagnóstico rápido</h2>
              <p className="rag-form-hint">Qué está pasando hoy con las oportunidades perdidas.</p>

              <label>
                <span>¿Qué pasa con los mensajes fuera de horario? *</span>
                <textarea name="dxFueraHorario" value={form.dxFueraHorario} onChange={handleChange} placeholder="Ej: quedan en visto hasta el día siguiente..." />
                {errors.dxFueraHorario && <span className="rag-form-error">{errors.dxFueraHorario}</span>}
              </label>

              <div className="rag-form-grid">
                <label>
                  <span>¿Cuántos mensajes se quedan sin responder por semana?</span>
                  <select name="dxSinResponder" value={form.dxSinResponder} onChange={handleChange}>
                    <option value="">Selecciona...</option>
                    <option>Casi ninguno</option>
                    <option>Entre 5 y 20</option>
                    <option>Entre 20 y 50</option>
                    <option>Más de 50</option>
                    <option>No tengo idea</option>
                  </select>
                </label>
                <label>
                  <span>¿Cuánto vale una venta promedio?</span>
                  <input name="dxTicket" value={form.dxTicket} onChange={handleChange} placeholder="Ej: $150.000 COP" />
                </label>
              </div>

              <div className="rag-form-grid">
                <label>
                  <span>¿Cuánto tarda hoy tu negocio en responder?</span>
                  <select name="dxTiempo" value={form.dxTiempo} onChange={handleChange}>
                    <option value="">Selecciona...</option>
                    <option>Minutos</option>
                    <option>1 a 3 horas</option>
                    <option>Medio día</option>
                    <option>Un día o más</option>
                  </select>
                </label>
                <label>
                  <span>¿Cuántas ventas más crees que cerrarías al mes? *</span>
                  <textarea name="dxPerdidas" value={form.dxPerdidas} onChange={handleChange} placeholder="Ej: 10 ventas más al mes..." />
                  {errors.dxPerdidas && <span className="rag-form-error">{errors.dxPerdidas}</span>}
                </label>
              </div>

              <label>
                <span>¿Has intentado resolver esto antes?</span>
                <textarea name="dxIntentos" value={form.dxIntentos} onChange={handleChange} placeholder="Ej: probé un bot pero era muy robótico..." />
              </label>

              <div className="rag-form-note">{selectedBusinessText}</div>
            </section>

            <section className="rag-form-card">
              <h2>3 · Canales de venta</h2>
              <p className="rag-form-hint">Dónde debe atender el agente.</p>

              <label>
                <span>¿Por dónde quieres que atienda? *</span>
                <div className="rag-form-pill-list">
                  {['whatsapp', 'llamadas', 'web', 'instagram', 'facebook'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.canales.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('canales', value)}>
                      {value}
                    </button>
                  ))}
                </div>
                {errors.canales && <span className="rag-form-error">{errors.canales}</span>}
              </label>

              <div className="rag-form-grid">
                <label>
                  <span>Número de WhatsApp del negocio</span>
                  <input name="waNumber" value={form.waNumber} onChange={handleChange} placeholder="+57 ..." />
                </label>
                <label>
                  <span>Volumen aproximado de consultas al día</span>
                  <select name="volume" value={form.volume} onChange={handleChange}>
                    <option value="">Selecciona...</option>
                    <option>Menos de 20</option>
                    <option>20 a 50</option>
                    <option>50 a 200</option>
                    <option>Más de 200</option>
                    <option>No lo sé</option>
                  </select>
                </label>
              </div>

              <label>
                <span>¿Cuándo debe atender el agente?</span>
                <div className="rag-form-pill-list">
                  {['24/7', 'fuera_horario', 'horario_negocio'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.horarioAgente.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('horarioAgente', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Horario de atención humana actual</span>
                <input name="hours" value={form.hours} onChange={handleChange} placeholder="Ej: Lun-Sáb 8am-6pm" />
              </label>
            </section>

            <section className="rag-form-card">
              <h2>4 · Fuentes de información</h2>
              <p className="rag-form-hint">Qué necesita el agente para responder con datos reales.</p>

              <label>
                <span>¿Tu negocio tiene base de datos o sistema? *</span>
                <div className="rag-form-pill-list">
                  {['si_sistema', 'si_archivos', 'no'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.tieneBd.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('tieneBd', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
                {errors.tieneBd && <span className="rag-form-error">{errors.tieneBd}</span>}
              </label>

              <label>
                <span>Si tienes sistema, ¿cuál?</span>
                <input name="bdDetail" value={form.bdDetail} onChange={handleChange} placeholder="Ej: Siigo, WooCommerce, Excel compartido..." />
              </label>

              <label>
                <span>¿Qué información existe hoy en algún formato?</span>
                <div className="rag-form-pill-list">
                  {['catalogo', 'precios', 'inventario', 'faq', 'politicas', 'web', 'nada'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.fuentes.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('fuentes', value)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>¿Cada cuánto cambian precios o disponibilidad?</span>
                <select name="updateFreq" value={form.updateFreq} onChange={handleChange}>
                  <option value="">Selecciona...</option>
                  <option>Varias veces al día</option>
                  <option>Diario</option>
                  <option>Semanal</option>
                  <option>Mensual o menos</option>
                </select>
              </label>
            </section>

            <section className="rag-form-card">
              <h2>5 · Proceso de ventas</h2>
              <p className="rag-form-hint">Qué debe saber y hacer el agente para vender de verdad.</p>

              <label>
                <span>Las 5 preguntas que más te hacen los clientes *</span>
                <textarea name="topQ" value={form.topQ} onChange={handleChange} placeholder="Ej: ¿Tienen domicilio? ¿Cuánto vale X?..." />
                {errors.topQ && <span className="rag-form-error">{errors.topQ}</span>}
              </label>

              <label>
                <span>Objeciones típicas y cómo las responde tu mejor vendedor</span>
                <textarea name="objections" value={form.objections} onChange={handleChange} placeholder="Ej: 'Está caro' → explicamos garantía..." />
              </label>

              <label>
                <span>¿Qué debe poder hacer el agente?</span>
                <div className="rag-form-pill-list">
                  {['responder', 'cotizar', 'agendar', 'pedido', 'pago', 'seguimiento', 'calificar'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.acciones.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('acciones', value)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              {businessType === 'almacen' && (
                <div className="rag-form-conditional">
                  <h3>Específico · Almacén / Tienda</h3>
                  <label><span>¿Cuántos productos manejas aprox.?</span><input name="almProductos" value={form.almProductos} onChange={handleChange} /></label>
                  <label><span>Zonas y costos de envío</span><textarea name="almEnvios" value={form.almEnvios} onChange={handleChange} /></label>
                  <label><span>¿El agente debe verificar stock en tiempo real?</span><div className="rag-form-pill-list">{['si','aprox','no'].map((value) => <button key={value} type="button" className={`rag-form-pill ${pills.almacenStockTiempoReal.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('almacenStockTiempoReal', value, false)}>{value}</button>)}</div></label>
                </div>
              )}

              {businessType === 'restaurante' && (
                <div className="rag-form-conditional">
                  <h3>Específico · Restaurante</h3>
                  <label><span>¿Dónde está el menú hoy?</span><input name="resMenu" value={form.resMenu} onChange={handleChange} /></label>
                  <label><span>¿Qué gestiona el agente?</span><div className="rag-form-pill-list">{['domicilios','reservas','recogida','eventos'].map((value) => <button key={value} type="button" className={`rag-form-pill ${pills.restauranteGestiones.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('restauranteGestiones', value)}>{value}</button>)}</div></label>
                  <label><span>Zonas de domicilio y tiempos de entrega</span><textarea name="resZonas" value={form.resZonas} onChange={handleChange} /></label>
                </div>
              )}

              {businessType === 'inmobiliaria' && (
                <div className="rag-form-conditional">
                  <h3>Específico · Inmobiliaria</h3>
                  <label><span>¿Cuántas propiedades activas y dónde se publican?</span><input name="inmPortafolio" value={form.inmPortafolio} onChange={handleChange} /></label>
                  <label><span>Operación principal</span><div className="rag-form-pill-list">{['venta','arriendo','proyectos'].map((value) => <button key={value} type="button" className={`rag-form-pill ${pills.inmobiliariaOperacion.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('inmobiliariaOperacion', value)}>{value}</button>)}</div></label>
                  <label><span>Datos que el agente debe pedir para filtrar</span><textarea name="inmFiltros" value={form.inmFiltros} onChange={handleChange} /></label>
                  <label><span>¿El agente agenda visitas?</span><div className="rag-form-pill-list">{['si','pasa'].map((value) => <button key={value} type="button" className={`rag-form-pill ${pills.inmobiliariaVisitas.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('inmobiliariaVisitas', value, false)}>{value}</button>)}</div></label>
                </div>
              )}

              {businessType === 'servicios' && (
                <div className="rag-form-conditional">
                  <h3>Específico · Servicios</h3>
                  <label><span>Lista de servicios y rangos de precio</span><textarea name="srvLista" value={form.srvLista} onChange={handleChange} /></label>
                  <label><span>¿Cómo se cotiza?</span><div className="rag-form-pill-list">{['fijo','variables','visita'].map((value) => <button key={value} type="button" className={`rag-form-pill ${pills.serviciosCotizacion.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('serviciosCotizacion', value, false)}>{value}</button>)}</div></label>
                  <label><span>¿Usas alguna agenda o calendario?</span><input name="srvAgenda" value={form.srvAgenda} onChange={handleChange} /></label>
                </div>
              )}

              {businessType === 'otro' && (
                <div className="rag-form-conditional">
                  <h3>Específico · Otro tipo de negocio</h3>
                  <label><span>Cuéntanos las particularidades de tu proceso de venta</span><textarea name="otroDesc" value={form.otroDesc} onChange={handleChange} /></label>
                </div>
              )}
            </section>

            <section className="rag-form-card">
              <h2>6 · Voz y límites del agente</h2>
              <p className="rag-form-hint">Cómo habla, qué puede prometer y cuándo pasa a un humano.</p>

              <label>
                <span>Tono del agente</span>
                <div className="rag-form-pill-list">
                  {['cercano', 'profesional', 'formal'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.tono.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('tono', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Frases o expresiones propias del negocio</span>
                <textarea name="frases" value={form.frases} onChange={handleChange} placeholder='Ej: "¡Con gusto te ayudo!"' />
              </label>

              <label>
                <span>Lo que el agente NUNCA debe hacer o prometer *</span>
                <textarea name="prohibido" value={form.prohibido} onChange={handleChange} placeholder="Ej: no prometer fechas exactas..." />
                {errors.prohibido && <span className="rag-form-error">{errors.prohibido}</span>}
              </label>

              <label>
                <span>¿Cuándo debe transferir a un humano?</span>
                <div className="rag-form-pill-list">
                  {['pide', 'queja', 'monto', 'nosabe', 'negociacion'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.escalamiento.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('escalamiento', value)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>¿A quién y por qué medio escala?</span>
                <input name="escalaA" value={form.escalaA} onChange={handleChange} placeholder="Ej: A Carolina por WhatsApp" />
              </label>
            </section>

            <section className="rag-form-card">
              <h2>7 · Privacidad e infraestructura</h2>
              <p className="rag-form-hint">Define si usas IA en la nube o un despliegue privado local.</p>

              <label>
                <span>Sensibilidad de los datos</span>
                <div className="rag-form-pill-list">
                  {['baja', 'media', 'alta'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.sensibilidad.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('sensibilidad', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Preferencia de despliegue</span>
                <div className="rag-form-pill-list">
                  {['nube', 'local', 'asesoria'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.despliegue.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('despliegue', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Presupuesto mensual estimado</span>
                <select name="presupuesto" value={form.presupuesto || ''} onChange={handleChange}>
                  <option value="">Selecciona...</option>
                  <option>Menos de $300.000 COP</option>
                  <option>$300.000 – $800.000 COP</option>
                  <option>$800.000 – $2.000.000 COP</option>
                  <option>Más de $2.000.000 COP</option>
                  <option>Aún no definido</option>
                </select>
              </label>

              <label>
                <span>¿Algo más que debamos saber?</span>
                <textarea name="extra" value={form.extra} onChange={handleChange} placeholder="Integraciones, plazos, lo que no funcionó con otros proveedores..." />
              </label>
            </section>

            <div className="rag-form-actions">
              <span className={`rag-form-status ${status.type}`}>{status.text}</span>
              <button type="button" className="btn btn-ghost" onClick={handleGenerateSummary}>Generar resumen</button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Guardando…' : 'Enviar y guardar'}
              </button>
            </div>

            {summary && (
              <section className="rag-form-card rag-form-preview">
                <h2>Resumen generado</h2>
                <pre>{summary}</pre>
              </section>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
