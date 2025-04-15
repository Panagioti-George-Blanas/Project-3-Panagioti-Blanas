document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.createElement('button');
  darkToggle.textContent = '🌓 Toggle Dark Mode';
  darkToggle.style.position = 'fixed';
  darkToggle.style.top = '20px';
  darkToggle.style.right = '20px';
  darkToggle.style.padding = '10px 15px';
  darkToggle.style.fontSize = '1em';
  darkToggle.style.border = 'none';
  darkToggle.style.borderRadius = '8px';
  darkToggle.style.backgroundColor = '#333';
  darkToggle.style.color = 'white';
  darkToggle.style.cursor = 'pointer';
  document.body.appendChild(darkToggle);

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const style = document.createElement('style');
  style.textContent = `
    .dark-mode {
      background-color: #121212;
      color: #e0e0e0;
    }
    .dark-mode section {
      background-color: #1e1e1e;
      border-color: #444;
    }
    .dark-mode a {
      color: #80d0ff;
    }
  `;
  document.head.appendChild(style);
});
