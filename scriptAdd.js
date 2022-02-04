function addNewProperty(img, price, descr, city) {
  const data = {
    city: city,
    description: descr,
    image: img,
    price: price,
  };
  fetch("https://radial-reinvented-shoe.glitch.me", {
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
