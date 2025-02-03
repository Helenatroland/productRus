const myCategory = new URLSearchParams(window.location.search).get("category");
const productContainer = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h1");

overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `
    <div class="blaa_tshirt">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="blaa_tshirt" />
      <h3>${product.productdisplayname}</h3>
      <p>Tshirts - Nike</p>
      <p>DKK${product.price},-</p>
      <a href="product.html?productId=${product.id}">Read More</a>
    </div>
    `
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
