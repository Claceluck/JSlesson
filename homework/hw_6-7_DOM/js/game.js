/*
Дан объект {
        cat: "Кот",
        book: "Книга",
        car: "Машина"
}
Написать функцию generateField(n) по генерации игрового поля размером n x n.
    Значение n не может быть меньше 3.
Для 3х ячеек поля (для выбора конкретной ячейки использовать random)
добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
    Для 1й ячейки значение атрибута prise="cat",
    для 2й ячейки значение атрибута prise="book",
    для 3й ячейки значение атрибута prise="car"
 */

let genAreaGame = document.getElementById("genGameArea");

genAreaGame.addEventListener("click", generateField);

let prise = {
  cat: "Кот",
  book: "Книга",
  car: "Машина",
};

function generateField(n) {
  let price = ["cat", "book", "car"]; // массив price
  let a;
  let b;
  let c;
  // создали ячейки a, b, c
  do {
    //
    a = Math.floor(Math.random() * (n * n));
    b = Math.floor(Math.random() * (n * n));
    c = Math.floor(Math.random() * (n * n));
  } while (a === b || b === c || c === a);
  console.log(a, b, c);
}

generateField(4);

function fieldGameArea() {
  let game_area = document.getElementsByClassName("game_area")[0];

  while (game_area.firstChild) {
    game_area.removeChild(game_area.firstChild);
  }

  let valCount = document.getElementById("fieldGameArea").value;
}

//   //Создали матрицу  х*х
//   arr = createArray(Number(count));
//   console.log(arr);

//   //Задали 3 ячейки рандом
//   let arrAtribute = [];
//   arrAtribute.push(getRandomIntInclusive(1, count*count));
//   arrAtribute.push(getRandomIntInclusive(1, count*count));
//   arrAtribute.push(getRandomIntInclusive(1, count*count));

// //  console.log(arrAtribute);

//   //Оформляем GRID

//   cell__grid.style.cssText = `
//   display: grid;
//   border: 2px solid red;
//   margin: 0 auto;
//   grid-template-columns: repeat(${count},1fr);
//   grid-template-rows:  repeat(${count},1fr);
//    `;

//   //Добавляем ячеки
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {

//       let div = document.createElement('div');

//       div.style.cssText = `
//         width: 100%;
//         height: 50px;
//         border: 1px solid red;
//         text-align: center;
//       `;

//       if (arrAtribute.indexOf(arr[i][j]) == 2){
//          div.innerText = homeObject.car;
//          div.setAttribute("prise", "car");
//         }
//       else if (arrAtribute.indexOf(arr[i][j]) == 1){
//         div.innerText = homeObject.book;
//         div.setAttribute("prise", "book");
//       }
//       else if (arrAtribute.indexOf(arr[i][j]) == 0){
//         div.innerText = homeObject.cat;
//         div.setAttribute("prise", "cat");
//       }

//       cell__grid.append(div);
