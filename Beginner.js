// https://fakestoreapi.com/products

let grid = document.querySelector(".products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    for (let value of json) {
      addElement(grid, value);
    }
  });

// get value from the api create dynamic element
function addElement(appendIn, value) {
  let div = document.createElement("div");
  div.className = "item justify-self-center";

  let { image, title, category, price } = value;

  div.innerHTML = `
  <div class="item justify-self-center">
  <img src="${image}" class="bg-cover img">
  <div class="text-center py-3 ">
    <h1 class="text-lg title">${title}</h1>
    <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
    <span class="block py-3">$ <span class="text-md">${price}</span></span>
    <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
  </div>
  `;
  appendIn.appendChild(div);
}
