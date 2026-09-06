// Registro de intenciones de contacto (clicks a WhatsApp, redes, etc).
// Usa sendBeacon para que el evento sobreviva a la navegacion (target=_blank).
export function trackContact(channel, source = '') {
  try {
    const body = JSON.stringify({
      channel,
      source,
      path: typeof window !== 'undefined' ? window.location.pathname + window.location.hash : '',
    })
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/track', new Blob([body], { type: 'application/json' }))
    } else if (typeof fetch !== 'undefined') {
      fetch('/track', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } })
    }
  } catch {
    // el tracking nunca debe romper la navegacion del usuario
  }
}
