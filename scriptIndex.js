fetch("https://radial-reinvented-shoe.glitch.me")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      addHouseCard(
        element.image,
        element.price,
        element.description,
        element.city
      );
    })
  )
  .catch((e) => console.log(e.message));

function addHouseCard(img, price, descr, city) {
  document.querySelector(".listedHouses").innerHTML += `<div class="houseCard">
          
            <img class="housePicture" src=${img} alt="House photo">
          
          <section class="cardContent">
            <h2 class="price">${price} Eur</h2>
            <p class="city">${city}</p>
            <p class="description">${descr}</p>
          </section>
        </div>`;
}

function filteredCity(city) {
  fetch("https://radial-reinvented-shoe.glitch.me")
    .then((res) => res.json())
    .then((data) => data.filter((element) => element.city == city))
    .then((filteredData) => {
      document.querySelector(".listedHouses").innerHTML = "";
      filteredData.forEach((element) => {
        addHouseCard(
          element.image,
          element.price,
          element.description,
          element.city
        );
      });
    })
    .catch((e) => console.log(e.message));
}
document
  .getElementById("vilnius")
  .addEventListener("click", () => filteredCity("Vilnius"));
document
  .getElementById("kaunas")
  .addEventListener("click", () => filteredCity("Kaunas"));
document
  .getElementById("klaipeda")
  .addEventListener("click", () => filteredCity("Klaipėda"));
