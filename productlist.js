const myCategory = new URLSearchParams(window.location.search).get("category");
const productContainer = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h1");

overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map((product) => {
      let productSoldOut = product.soldout ? "soldOut" : "";
      let soldOutTag = product.soldout ? `<p class="sold_out">Sold Out</p>` : "";

      return `
        <article class="produktkort ${productSoldOut}">
          <div class="blaa_tshirt">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
            ${product.discount ? `<div class="percentage_off_list"><p>${product.discount}% Off</p></div>` : ""}
            ${soldOutTag}
            <p>${product.brandname}</p>
            <h3>${product.productdisplayname}</h3>
            <p>DKK ${product.price},-</p>
            <a href="product.html?productId=${product.id}">Read More</a>
          </div>
        </article>
      `;
    })
    .join("");

  productContainer.innerHTML = markup;
}
