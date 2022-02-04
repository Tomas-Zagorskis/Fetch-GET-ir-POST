const BASE_URL = "https://radial-reinvented-shoe.glitch.me";
fetch(BASE_URL)
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

function addNewProperty(img, price, descr, city) {
  const data = {
    city: city,
    description: descr,
    image: img,
    price: price,
  };
  console.log(data);
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Succesfully uploaded!");
    })
    .catch((err) => {
      alert("Oops, something went wrong!");
    });
}
document.querySelector("input[type=submit]").addEventListener("click", (e) => {
  e.preventDefault();
  const img = document.getElementById("img").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const city = document.getElementById("cities").value;
  addNewProperty(img, price, description, city);
});
