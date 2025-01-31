const ProductContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  markup = products.map((product) => {
    ` <div class="product_list_container">
    <div class="blaa_tshirt">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="blaa_tshirt" />
      <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
      <p>Tshirts - Nike</p>
      <p>DKK 895,-</p>
      <a href="product.html">Read More</a>
    </div>`;
  });
}
