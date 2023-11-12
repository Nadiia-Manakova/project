import {getTopBooks} from "./request-base"


const burgerMenuBtnEL = document.querySelector('.hamburger');
const menuContainerEl = document.querySelector('.hamburger-overlay');
const bodyEl = document.querySelector('body');
const mobileMenuGalleryListEl = document.querySelector('.mob-menu-gallery-list');

burgerMenuBtnEL.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
  burgerMenuBtnEL.classList.toggle('close');
  menuContainerEl.classList.toggle('active');

  bodyEl.classList.add('menu-open');
  document.body.classList.toggle('menu-open', menuContainerEl.classList.contains('active'));
}

getTopBooks()
.then(allCategories => {
    const allBooks = allCategories.reduce((acc, category) => {
      return acc.concat(category.books);
    }, []);

    const mobMenuMarkup = allBooks.map((book) => `
      <li class="mob-menu-gallery-item">
        <img class="mob-menu-image" src="${book.book_image}" alt="${book.title}" >
      </li>`).join("");

    mobileMenuGalleryListEl.insertAdjacentHTML('afterbegin', mobMenuMarkup);
    runGallery();
  })
.catch(error => {
    console.log(error);
  });

function animateGallery(currentPosition, direction) {
  currentPosition += 0.2 * direction;

  const maxPosition = -1000;
  const minPosition = 0;

  if (currentPosition <= maxPosition || currentPosition >= minPosition) {
    direction *= -1;
  }

  mobileMenuGalleryListEl.style.transform = `translateX(${currentPosition}px)`;

  requestAnimationFrame(() => { animateGallery(currentPosition, direction) });
}

function runGallery() {
  animateGallery(0, -1);
}