// 1. ul#categories içindeki kategorilerin sayısını hesapla ve konsola yazdır
const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

// 2. Her li.item öğesi için başlık ve öğe sayısını bul ve konsola yazdır
categoryItems.forEach((item) => {
  const title = item.querySelector('h2').textContent; // <h2> başlığını al
  const elementsCount = item.querySelectorAll('ul li').length; // İçindeki <li> öğelerini say

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
