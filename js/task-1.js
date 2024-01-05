const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.getElementsByClassName('item');

console.log(`Number of categories: ${categoryItems.length}`);

for (const category of categoryItems) {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemCount}`);
}
  