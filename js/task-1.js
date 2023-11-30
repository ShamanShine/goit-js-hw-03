function slugify(title) {
  const slugTitle = title.join('-').toLowerCase(); //Сначала обьеденяем элементы масива в стоку с разделителем "-", затем задаём нижний реестр
  console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
  console.log(slugify('English for developer')); // "english-for-developer"
  console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
  console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer
}
