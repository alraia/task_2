const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchContainer = document.querySelector('.search-container');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  }
});