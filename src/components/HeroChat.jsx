import { Fragment } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Typing() {
  return (
    <div className="chat-typing" aria-hidden="true">
      <span className="chat-typing-bubble">
        <i />
        <i />
        <i />
      </span>
    </div>
  )
}

/**
 * Celular dibujado con HTML/CSS, decorativo (el marco va aria-hidden).
 * Todas las burbujas están en el DOM desde el primer render; la secuencia de
 * entrada la resuelve CSS con animation-delay, nunca JavaScript ni Date.
 */
export default function HeroChat() {
  const { t } = useLanguage()
  const chat = t.home.heroChat

  return (
    <div className="hero-chat">
      <div className="hero-chat-frame" aria-hidden="true">
        <div className="chat-app">
          <div className="chat-head">
            <span className="chat-avatar">{chat.name.charAt(0)}</span>
            <span className="chat-peer">
              <strong>{chat.name}</strong>
              <span>{chat.status}</span>
            </span>
          </div>
          <div className="chat-body">
            {chat.messages.map((message, index) => (
              <Fragment key={index}>
                {message.from === 'assistant' && <Typing />}
                <div className={`chat-row chat-row--${message.from === 'assistant' ? 'out' : 'in'}`}>
                  <p className="chat-bubble">
                    {message.text}
                    <span className="chat-time">{message.time}</span>
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <p className="hero-chat-caption">{chat.caption}</p>
    </div>
  )
}
