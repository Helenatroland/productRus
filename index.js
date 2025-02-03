let categoryContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (element) => `
  <div class="category_list_container">
          <a href="productlist.html?category=${element.category}"><h3>${element.category}</h3></a>
        </div>
    `
    )
    .join("");
  console.log(markup);
  categoryContainer.innerHTML = markup;
}
