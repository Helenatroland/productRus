// bestemt produkt - link til blå jersey
const ProductContainer = document.querySelector(".product_1");
const productId = 1163;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    ProductContainer.innerHTML = `

        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" 
        alt="${data.basecolor}" 
                 />
        <div class="product_text">
          <h1>Product Information</h1>
          <p>DKK ${data.price},- </p>
          <h3>Model Name ${data.articletype}</h3>
          <p>Sahara Team India Fanwear Round Neck Jersey</p>
          <h3>Color ${data.color}</h3>
          <p>Blue</p>
          <h3>Inventory Number</h3>
          <p>1163</p>
          <h2>Nike ${data.brandname}</h2>
          <p>'Nike, Creating experiences for today's athlete' ${data.brandbio}</p>
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
        </div>

        `;
  });
