function handleSearchSubmit(event) {
  event.preventDefault();
  let seachInput = documet.querySelector("#search-input");
  console.log(seachInput.value);
}

let searchFormElement = document.querySelector("#city-search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
