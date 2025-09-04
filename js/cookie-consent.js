// cookie-consent.js

document.addEventListener("DOMContentLoaded", function () {
  // ✅ Revisar si ya hay decisión guardada
  if (localStorage.getItem("cookieConsent")) {
    return; // Si existe, no mostrar banner
  }

  // ✅ Crear el banner dinámicamente
  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.className = "cookie-banner"; // 👉 estilos se controlan desde style.css
  banner.innerHTML = `
    <div class="cookie-text">
      🍪 We use cookies to improve your browsing experience, analyze traffic, and serve personalized content.  
      <a href="./html/cookies.html" class="cookie-link">Learn more</a>.
    </div>
    <div class="cookie-actions">
      <button id="accept-cookies" class="btn-accept">Accept</button>
      <button id="decline-cookies" class="btn-decline">Decline</button>
    </div>
  `;

  document.body.appendChild(banner);

  // ✅ Eventos de botones
  document.getElementById("accept-cookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.remove();
  });

  document.getElementById("decline-cookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    banner.remove();
  });
});
