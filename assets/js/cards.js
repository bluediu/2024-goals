import { technologies } from './info.js';

const d = document;

export class Card {
  constructor() {
    this.cards = d.querySelectorAll('.progress-done');
    this.cardContainer = d.querySelector('.card-container');
  }

  showCard() {
    const $fragment = d.createDocumentFragment();

    technologies.forEach((tech) => {
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
        <p>Tipo de tecnología: <span>${tech.type}</span></p>
        <p><span>Primer día:</span> ${tech.start}</p>
      </div>
      `;

      $fragment.appendChild($article);
    });

    this.cardContainer.appendChild($fragment);
  }
}
