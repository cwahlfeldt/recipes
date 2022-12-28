const searchInput = document.querySelector("[data-search-input]");
const searchOptions = document.querySelectorAll("[data-search-option]");
const searchClear = document.querySelectorAll("[data-search-clear]");
const searchDropdown = document.querySelectorAll("[data-search-dropdown]");

if (searchInput) {
  document.addEventListener("keyup", (e) => {
    console.log(e.target.value);
  });
}
