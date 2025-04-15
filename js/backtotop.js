document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑ Back to Top';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.padding = '10px 15px';
  backToTopBtn.style.fontSize = '1em';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.borderRadius = '8px';
  backToTopBtn.style.backgroundColor = '#0066cc';
  backToTopBtn.style.color = 'white';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.display = 'none';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
