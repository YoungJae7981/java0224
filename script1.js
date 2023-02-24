// let fruits = ['Banana', 'Apple', 'Orange'];

// <p태그배열을사용하는방법>
// const pArray = document.querySelectorAll('p')
// pArray.forEach((pTag, index) => {
//   pTag.innerHTML = fruits[index];
// })

// 기본방법
// document.querySelector('#p0').innerHTML = fruits[0];
// document.querySelector('#p1').innerHTML = fruits[1];
// document.querySelector('#p2').innerHTML = fruits[2];

// // 과일배열만 사용하는법(백틱 사용)

// fruits.forEach((fruit, index) => {
//   document.querySelector(`#p${index}`).innerHTML = fruit;
// })
// const fruits = ['banana', 'apple', 'orange', 'grape', 'mango', 'melon'];
const beers = ["cass", "tera", "ob", "kalsburg"];

beers.forEach((beer) => {
  const pElm = document.createElement("h1");
  pElm.innerHTML = beer;
  document.body.appendChild(pElm);
});
