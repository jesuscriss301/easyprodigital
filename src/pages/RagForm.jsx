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
  almacen: 'When a customer messages outside business hours and gets no answer, they often move on to a competitor. Fast automation helps capture the lead before that happens.',
  restaurante: 'During peak hours, every unanswered chat can mean a lost order. Automation keeps sales moving even when the team is busy.',
  inmobiliaria: 'Real estate leads cool off quickly. A fast reply can mean the difference between a visit and a missed opportunity.',
  servicios: 'Quotes that arrive too late are easily lost to another provider. Automation protects revenue when the team is unavailable.',
  otro: 'Message automation helps recover sales, reduce missed inquiries, and prevent customers from leaving frustrated.',
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
  const [status, setStatus] = useState({ type: 'idle', text: 'Complete the fields marked with *' })
  const [summary, setSummary] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const selectedBusinessText = useMemo(() => {
    if (!businessType) return 'Select your business type to see the context of the pain point.'
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
      if (!form[field]?.trim()) nextErrors[field] = 'This field is required.'
    })

    if (!businessType) nextErrors.businessType = 'Please select a business type.'
    if (!pills.canales?.length) nextErrors.canales = 'Select at least one channel.'
    if (!pills.tieneBd?.length) nextErrors.tieneBd = 'Select an option.'
    if (!pills.medioContacto?.length) nextErrors.medioContacto = 'Select a preferred contact method.'

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
      setStatus({ type: 'error', text: 'Some required fields are missing. Please review the form above.' })
      return
    }
    const payload = buildPayload()
    setSummary(JSON.stringify(payload, null, 2))
    setStatus({ type: 'success', text: 'Summary ready. You can send it to save it in the database.' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) {
      setStatus({ type: 'error', text: 'Some required fields are missing. Please review the form above.' })
      return
    }

    const payload = buildPayload()
    setSubmitting(true)
    setStatus({ type: 'loading', text: 'Saving the form…' })

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

      setStatus({ type: 'success', text: 'Form saved successfully.' })
      setSummary(JSON.stringify(payload, null, 2))
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'The form could not be saved.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Seo
        title="AI Sales Discovery Form | Easy Pro Digital"
        description="A discovery form for businesses that want to stop losing customers to missed messages and automate their sales conversations."
        path="/rag-form/"
      />
      <div className="rag-form-page">
        <header className="rag-form-header">
          <div className="container">
            <p className="eyebrow">Easy Pro Digital · AI sales automation</p>
            <h1>Discovery form — AI sales agent</h1>
            <p>
              This information helps us design an AI agent that responds with the real context of your business: catalog, pricing, policies, and tone. It also helps us understand where missed messages are costing you leads, sales, and customer trust.
            </p>
          </div>
        </header>

        <div className="container rag-form-body">
          <form onSubmit={handleSubmit} className="rag-form-form">
            <section className="rag-form-card">
              <h2>1 · Your business</h2>
              <p className="rag-form-hint">The basics so we understand who you are, what you sell, and where the communication gap is hurting you.</p>

              <div className="rag-form-grid">
                <label>
                  <span>Business name *</span>
                  <input name="bizName" value={form.bizName} onChange={handleChange} placeholder="e.g. Northside Auto Parts" />
                  {errors.bizName && <span className="rag-form-error">{errors.bizName}</span>}
                </label>
                <label>
                  <span>City / operating area *</span>
                  <input name="bizCity" value={form.bizCity} onChange={handleChange} placeholder="e.g. Medellín metro area" />
                  {errors.bizCity && <span className="rag-form-error">{errors.bizCity}</span>}
                </label>
              </div>

              <div className="rag-form-grid">
                <label>
                  <span>Contact person *</span>
                  <input name="ctName" value={form.ctName} onChange={handleChange} placeholder="Name and role" />
                  {errors.ctName && <span className="rag-form-error">{errors.ctName}</span>}
                </label>
                <label>
                  <span>WhatsApp / phone *</span>
                  <input name="ctPhone" value={form.ctPhone} onChange={handleChange} placeholder="+57 ..." />
                  {errors.ctPhone && <span className="rag-form-error">{errors.ctPhone}</span>}
                </label>
              </div>

              <label>
                <span>Business type *</span>
                <div className="rag-form-business-grid">
                  {[
                    { value: 'almacen', label: 'Retail / Store', icon: '🏬' },
                    { value: 'restaurante', label: 'Restaurant', icon: '🍽️' },
                    { value: 'inmobiliaria', label: 'Real Estate', icon: '🏘️' },
                    { value: 'servicios', label: 'Services', icon: '🛠️' },
                    { value: 'otro', label: 'Other', icon: '✳️' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      className={`rag-form-biz ${businessType === option.value ? 'active' : ''}`}
                      onClick={() => handleBusinessSelect(option.value)}
                    >
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
                {errors.businessType && <span className="rag-form-error">{errors.businessType}</span>}
              </label>

              <label>
                <span>Describe in 2–3 lines what you sell and who you sell to *</span>
                <textarea name="bizDesc" value={form.bizDesc} onChange={handleChange} placeholder="e.g. We sell replacement parts and serve local vehicle owners..." />
                {errors.bizDesc && <span className="rag-form-error">{errors.bizDesc}</span>}
              </label>

              <label>
                <span>What is your preferred contact method? *</span>
                <div className="rag-form-pill-list">
                  {['whatsapp', 'call', 'email', 'video call'].map((value) => (
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
                  <span>Email</span>
                  <input name="ctEmail" value={form.ctEmail} onChange={handleChange} placeholder="you@yourbusiness.com" />
                </label>
                <label>
                  <span>Best time to reach you</span>
                  <input name="ctBestTime" value={form.ctBestTime} onChange={handleChange} placeholder="e.g. weekdays after 2pm" />
                </label>
              </div>
            </section>

            <section className="rag-form-card">
              <h2>2 · The pain point</h2>
              <p className="rag-form-hint">What is happening today with missed inquiries, delayed replies, and lost revenue.</p>

              <label>
                <span>What happens when customers message you outside business hours? *</span>
                <textarea name="dxFueraHorario" value={form.dxFueraHorario} onChange={handleChange} placeholder="e.g. They wait until the next day and often buy from someone else..." />
                {errors.dxFueraHorario && <span className="rag-form-error">{errors.dxFueraHorario}</span>}
              </label>

              <div className="rag-form-grid">
                <label>
                  <span>How many messages go unanswered each week?</span>
                  <select name="dxSinResponder" value={form.dxSinResponder} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Almost none</option>
                    <option>Between 5 and 20</option>
                    <option>Between 20 and 50</option>
                    <option>More than 50</option>
                    <option>I do not know</option>
                  </select>
                </label>
                <label>
                  <span>What is the average value of one sale?</span>
                  <input name="dxTicket" value={form.dxTicket} onChange={handleChange} placeholder="e.g. $150,000 COP" />
                </label>
              </div>

              <div className="rag-form-grid">
                <label>
                  <span>How long does it take your business to respond today?</span>
                  <select name="dxTiempo" value={form.dxTiempo} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Minutes</option>
                    <option>1 to 3 hours</option>
                    <option>Half a day</option>
                    <option>One day or more</option>
                  </select>
                </label>
                <label>
                  <span>How many additional sales do you believe you could close per month? *</span>
                  <textarea name="dxPerdidas" value={form.dxPerdidas} onChange={handleChange} placeholder="e.g. 10 more sales per month..." />
                  {errors.dxPerdidas && <span className="rag-form-error">{errors.dxPerdidas}</span>}
                </label>
              </div>

              <label>
                <span>Have you tried solving this before?</span>
                <textarea name="dxIntentos" value={form.dxIntentos} onChange={handleChange} placeholder="e.g. I tried a bot but it felt too robotic..." />
              </label>

              <div className="rag-form-note">{selectedBusinessText}</div>
            </section>

            <section className="rag-form-card">
              <h2>3 · Sales channels</h2>
              <p className="rag-form-hint">Where the agent should be available to prevent lost conversations.</p>

              <label>
                <span>Which channels should the agent handle? *</span>
                <div className="rag-form-pill-list">
                  {['whatsapp', 'calls', 'web', 'instagram', 'facebook'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.canales.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('canales', value)}>
                      {value}
                    </button>
                  ))}
                </div>
                {errors.canales && <span className="rag-form-error">{errors.canales}</span>}
              </label>

              <div className="rag-form-grid">
                <label>
                  <span>Business WhatsApp number</span>
                  <input name="waNumber" value={form.waNumber} onChange={handleChange} placeholder="+57 ..." />
                </label>
                <label>
                  <span>Approximate volume of inquiries per day</span>
                  <select name="volume" value={form.volume} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Less than 20</option>
                    <option>20 to 50</option>
                    <option>50 to 200</option>
                    <option>More than 200</option>
                    <option>I do not know</option>
                  </select>
                </label>
              </div>

              <label>
                <span>When should the agent respond?</span>
                <div className="rag-form-pill-list">
                  {['24/7', 'outside_hours', 'business_hours'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.horarioAgente.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('horarioAgente', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Current human support hours</span>
                <input name="hours" value={form.hours} onChange={handleChange} placeholder="e.g. Mon-Sat 8am-6pm" />
              </label>
            </section>

            <section className="rag-form-card">
              <h2>4 · Knowledge sources</h2>
              <p className="rag-form-hint">What the agent needs to answer customers accurately and avoid frustrating dead ends.</p>

              <label>
                <span>Do you have a database or system? *</span>
                <div className="rag-form-pill-list">
                  {['Yes, a system', 'Yes, files', 'No'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.tieneBd.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('tieneBd', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
                {errors.tieneBd && <span className="rag-form-error">{errors.tieneBd}</span>}
              </label>

              <label>
                <span>If you have a system, which one?</span>
                <input name="bdDetail" value={form.bdDetail} onChange={handleChange} placeholder="e.g. Shopify, ERP, shared Excel..." />
              </label>

              <label>
                <span>What information exists today in any format?</span>
                <div className="rag-form-pill-list">
                  {['catalog', 'prices', 'inventory', 'faq', 'policies', 'website', 'nothing'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.fuentes.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('fuentes', value)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>How often do prices or availability change?</span>
                <select name="updateFreq" value={form.updateFreq} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option>Several times a day</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly or less</option>
                </select>
              </label>
            </section>

            <section className="rag-form-card">
              <h2>5 · Sales process</h2>
              <p className="rag-form-hint">What the agent needs to know and do to turn conversations into revenue instead of missed opportunities.</p>

              <label>
                <span>The 5 questions your customers ask most often *</span>
                <textarea name="topQ" value={form.topQ} onChange={handleChange} placeholder="e.g. Do you offer delivery? How much does X cost?" />
                {errors.topQ && <span className="rag-form-error">{errors.topQ}</span>}
              </label>

              <label>
                <span>Common objections and how your best salesperson handles them</span>
                <textarea name="objections" value={form.objections} onChange={handleChange} placeholder="e.g. 'It is too expensive' → explain warranty and financing..." />
              </label>

              <label>
                <span>What should the agent be able to do?</span>
                <div className="rag-form-pill-list">
                  {['answer', 'quote', 'schedule', 'order', 'payment', 'follow-up', 'qualify'].map((value) => (
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
              <h2>6 · Voice and boundaries</h2>
              <p className="rag-form-hint">How the agent should speak, what it should never promise, and when it should hand off to a human.</p>

              <label>
                <span>Agent tone</span>
                <div className="rag-form-pill-list">
                  {['friendly', 'professional', 'formal'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.tono.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('tono', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Brand phrases or expressions</span>
                <textarea name="frases" value={form.frases} onChange={handleChange} placeholder='e.g. "Happy to help!"' />
              </label>

              <label>
                <span>What the agent must never do or promise *</span>
                <textarea name="prohibido" value={form.prohibido} onChange={handleChange} placeholder="e.g. do not promise exact delivery dates..." />
                {errors.prohibido && <span className="rag-form-error">{errors.prohibido}</span>}
              </label>

              <label>
                <span>When should it transfer to a human?</span>
                <div className="rag-form-pill-list">
                  {['request', 'complaint', 'high-value', 'does_not_know', 'negotiation'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.escalamiento.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('escalamiento', value)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Who should it escalate to and through what channel?</span>
                <input name="escalaA" value={form.escalaA} onChange={handleChange} placeholder="e.g. To Carolina via WhatsApp" />
              </label>
            </section>

            <section className="rag-form-card">
              <h2>7 · Privacy and infrastructure</h2>
              <p className="rag-form-hint">Whether you need a cloud deployment or a private local setup.</p>

              <label>
                <span>Data sensitivity</span>
                <div className="rag-form-pill-list">
                  {['low', 'medium', 'high'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.sensibilidad.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('sensibilidad', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Deployment preference</span>
                <div className="rag-form-pill-list">
                  {['cloud', 'local', 'consulting'].map((value) => (
                    <button key={value} type="button" className={`rag-form-pill ${pills.despliegue.includes(value) ? 'active' : ''}`} onClick={() => handlePillToggle('despliegue', value, false)}>
                      {value}
                    </button>
                  ))}
                </div>
              </label>

              <label>
                <span>Estimated monthly budget</span>
                <select name="presupuesto" value={form.presupuesto || ''} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option>Less than $300,000 COP</option>
                  <option>$300,000 – $800,000 COP</option>
                  <option>$800,000 – $2,000,000 COP</option>
                  <option>More than $2,000,000 COP</option>
                  <option>Not defined yet</option>
                </select>
              </label>

              <label>
                <span>Anything else we should know?</span>
                <textarea name="extra" value={form.extra} onChange={handleChange} placeholder="Integrations, timeline, what did not work with other providers..." />
              </label>
            </section>

            <div className="rag-form-actions">
              <span className={`rag-form-status ${status.type}`}>{status.text}</span>
              <button type="button" className="btn btn-ghost" onClick={handleGenerateSummary}>Generate summary</button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Saving…' : 'Send and save'}
              </button>
            </div>

            {summary && (
              <section className="rag-form-card rag-form-preview">
                <h2>Generated summary</h2>
                <pre>{summary}</pre>
              </section>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
