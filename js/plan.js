document.addEventListener('DOMContentLoaded', function() {
  // Animación al hacer hover en las tarjetas de comparación
  document.querySelectorAll('.comparison-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Tracking de clicks en CTA
  document.querySelectorAll('.pricing-card .btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const plan = this.closest('.pricing-card').querySelector('h3').textContent;
      // Integrar con Google Analytics u otro sistema
      console.log(`Clic en plan: ${plan}`);
    });
  });
  
  // Scroll suave a la tabla comparativa
  document.querySelectorAll('[data-scroll="comparison"]').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.table-compare').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});