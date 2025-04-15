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
  body.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
  }

  body.dark-mode section {
    background-color: #1e1e1e !important;
    color: white !important;
    border-color: #444 !important;
  }

  body.index-page.dark-mode .introduction-section {
    background-color: #2a2a2a !important;
    color: white !important;
    border-color: #555 !important;
  }

  body.resume-page.dark-mode section.experience-entry {
    background-color: #2a2a2a !important;
    color: white !important;
    border-color: #555 !important;
  }

  body.resume-page.dark-mode .experience-entry p,
  body.resume-page.dark-mode .experience-entry h3,
  body.resume-page.dark-mode .experience-entry li {
    color: white !important;
  }

  body.dark-mode a {
    color: #80d0ff !important;
  }

  body.dark-mode h1,
  body.dark-mode h2,
  body.dark-mode h3,
  body.dark-mode p,
  body.dark-mode li {
    color: white !important;
  }
`;
  document.head.appendChild(style);
});
