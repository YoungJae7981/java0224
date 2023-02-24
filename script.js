// // filter, map, reduce  ****** 제일 중요 ******
// // filter
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => number * number);
print(result);
print(numbers);

// const guys = [
//   {
//     name: "Smith",
//     주급: 1000000,
//   },
//   {
//     name: "Bill",
//     주급: 500000,
//   },
//   {
//     name: "Andy",
//     주급: 300000,
//   },
// ];
// // const result2 = guys.filter((guy) => {
// //   return guy.주급 > 400000;
// // })
// const result2 = guys.filter((guy) => guy.주급 > 400000);
// console.log(result2);

// function print(arr) {
//   const p = document.createElement("p");
//   p.innerHTML = arr;
//   document.body.appendChild(p);
// }

const 프로그래밍언어 = ["javascript", "java", "c#", "c++"];
const result2 = 프로그래밍언어.map((언어) => 언어.length);
print(result2);

function print(arr) {
  const p = document.createElement("p");
  p.innerHTML = arr;
  document.body.appendChild(p);
}

const users = [
  {
    name: "smith",
    age: 32,
  },
  {
    name: "andy",
    age: 41,
  },
];
{
  name: "tom";
  age: 15;
}
const result3 = users.map((user) => user.age);
print(result3);
