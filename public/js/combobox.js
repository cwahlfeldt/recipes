const searchInput = document.querySelector("[data-search-input]");
const searchOptions = document.querySelectorAll("[data-search-option]");
const searchClear = document.querySelectorAll("[data-search-clear]");
const searchDropdownToggle = document.querySelectorAll(
  "[data-search-dropdown-toggle]"
);
const searchDropdown = document.querySelectorAll("[data-search-dropdown]");

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

function toggleDropdown() {}
