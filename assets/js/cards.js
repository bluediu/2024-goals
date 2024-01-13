import { data } from './info.js';

const d = document;

/**
 * Filters and displays the cards based on the selected status.
 */
export function filterCards() {
  const $cardContainer = d.querySelector('.card-container');
  const $filterSelect = d.getElementById('status-filter');

  // Clean the card container when filtering.
  $cardContainer.innerHTML = '';

  const status = $filterSelect.value;
  const technologies = data
    .filter((t) => status === 'ALL' || t.status === status)
    .sort((a, b) => a.progress - b.progress);

  const $fragment = d.createDocumentFragment();

  technologies.forEach((tech) => {
    const statusMap = {
      COMPLETED: ['Completed 🎉', '#2ECC71'],
      WIP: ['Learning 👨🏻‍💻', '#5DADE2'],
      PENDING: ['Pending ⏳', '#AAB7B8'],
    };
    const [statusText, statusColor] = statusMap[tech.status];

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
      <p>Status: <span style="color: ${statusColor}">${statusText}</span></p>
    </div>
    `;

    $fragment.appendChild($article);
  });

  $cardContainer.appendChild($fragment);
}
