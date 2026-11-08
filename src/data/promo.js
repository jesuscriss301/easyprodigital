// ============================================================
//  Promo de fin de año: 50% de descuento en todos los precios.
//  Para cambiarla o quitarla, edita solo este archivo:
//   - percent: porcentaje de descuento
//   - endsAt:  último momento válido (hora de Colombia)
//  Pasada la fecha, los precios vuelven a mostrarse completos y
//  los avisos de la promo desaparecen solos (en el navegador).
// ============================================================

export const PROMO = {
  percent: 50,
  endsAt: '2026-12-31T23:59:59-05:00',
}

export const PROMO_COPY = {
  en: {
    text: '50% off everything until December 31, 2026',
    short: '-50% until Dec 31',
    fine: 'Prices shown already include the discount. Valid until December 31, 2026.',
    was: 'Regular price',
    now: 'Promo price',
  },
  es: {
    text: '50% de descuento en todo hasta el 31 de diciembre de 2026',
    short: '-50% hasta 31 dic',
    fine: 'Los precios que ves ya incluyen el descuento. Válido hasta el 31 de diciembre de 2026.',
    was: 'Precio normal',
    now: 'Precio con promo',
  },
}

export function isPromoActive(now = new Date()) {
  return now.getTime() <= new Date(PROMO.endsAt).getTime()
}

export function discounted(amount) {
  if (amount == null) return amount
  return Math.round((amount * (100 - PROMO.percent)) / 100)
}
