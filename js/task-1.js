const categories = document.querySelector("#categories");
const elementsOfCategories = categories.querySelectorAll(".item");

console.log("Numbers of categories: ", elementsOfCategories.length);

elementsOfCategories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const count = item.querySelectorAll("ul li").length;

  console.log("Category: ", title);
  console.log("Elements: ", count);
});
