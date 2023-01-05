const searchInput = document.querySelector("[data-search-input]");
const searchOptions = document.querySelectorAll("[data-search-option]");
const searchClear = document.querySelector("[data-search-clear]");
const searchDropdownToggle = document.querySelector(
  "[data-search-dropdown-toggle]"
);
const searchDropdown = document.querySelector("[data-search-dropdown]");

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

searchDropdownToggle.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  searchDropdown.classList.toggle("invisible");
}
