import { technologies } from './info.js';

const d = document;

export function filterCards() {
  const cardContainer = d.querySelector('.card-container');
  const filterSelect = d.getElementById('status-filter');

  const status = filterSelect.value;
  cardContainer.innerHTML = '';

  const filtered = technologies
    .filter((t) => {
      if (status === 'ALL') {
        return true;
      }
      console.log(t.status, status);
      return t.status === status;
    })
    .sort((a, b) => a.progress - b.progress);
  console.log(filtered);

  // render filtered cards
  const $fragment = d.createDocumentFragment();

  // const technologiesList = technologies.;

  filtered.forEach((tech) => {
    let status = '';
    let statusColor = '';
    if (tech.status === 'COMPLETED') {
      status = 'Completed 🎉';
      statusColor = '#2ECC71';
    } else if (tech.status === 'WIP') {
      status = 'Learning 👨🏻‍💻';
      statusColor = '#5DADE2';
    } else {
      status = 'Pending 🤔';
      statusColor = '#AAB7B8';
    }

    const $article = d.createElement('article');
    $article.classList.add('card-body');

    $article.innerHTML = `
    <div class="card-svg-logo">
      <img src="${tech.img}" alt="${tech.name.toLocaleLowerCase()}">
    </div>

    <figure class="card-name">
     
      <h2>${tech.name.toUpperCase()}</h2>

      <figcaption class="progress">
        <div class="progress-done ${tech.class}"
        style="width: ${tech.progress}%; opacity: 1">
          ${tech.progress} %	
        </div>
      </figcaption>

    </figure>

    <div class="card-type">
      <p>Type of technology: <span>${tech.type}</span></p>
      <p>Status: <span style="color: ${statusColor}">${status}</span></p>
    </div>
    `;

    $fragment.appendChild($article);
  });

  cardContainer.appendChild($fragment);
}
