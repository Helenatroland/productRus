// bestemt produkt - link til blå jersey
// const ProductContainer = document.querySelector(".product_1");

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("productId");

// const productId = 1163;

console.log("productId", productId);

let ProductContainer = document.querySelector(".product_1");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    ProductContainer.innerHTML = `

        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" 
        alt="productpicture" 
                 />
        <div class="product_text">
          <h1>Product Information</h1>
          <p>DKK ${data.price},- </p>
          <h3> Articletype: ${data.articletype}</h3>
          <p> ${data.description}</p>
          <h3>Id number: ${data.id}</h3>
          <h3>${data.discount}% off</h3>
          <h2>${data.brandname}</h2>
          <p>${data.brandbio}</p>
          <div class="size_text">
            <label for="size">Choose a size</label>
            <select id="size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <!-- Add to Basket Button -->
          <button type="submit" class="add-to-basket">Add to Basket</button>
        </div>`;

    sizeButtonListeners();
  });

function sizeButtonListeners() {
  const buttons = document.querySelectorAll(".size-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      console.log("Valgt størrelse:", button.dataset.size);
    });
  });
}
