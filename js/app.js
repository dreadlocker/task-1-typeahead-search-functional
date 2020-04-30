function start() {
  const url = 'https://restcountries.eu/rest/v2/all?fields=name';
  let countriesArrayWithObjects = [];

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      countriesArrayWithObjects = data;
      return showCountries(data);
    })
    .catch(error => console.log(error));

  function showCountries(data) {
    let createDivElements = "";
    data.forEach(obj => {
      createDivElements += `<div class="country-name">${obj.name}</div>`
    });
    const countryHolderElement = document.getElementById("country-holder");
    return countryHolderElement.innerHTML = createDivElements;
  }

  const inputField = document.getElementById("input");
  inputField.addEventListener("input", searchAndShowFoundCountries);

  function searchAndShowFoundCountries() {
    const userInput = this.value;
    const regExp = new RegExp(userInput, "gi");
    const serchResultsArray = countriesArrayWithObjects.filter(obj => obj.name.match(regExp));
    return showCountries(serchResultsArray);
  }
}