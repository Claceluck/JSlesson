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

let genValue = document.getElementById("genValue");

genValue.addEventListener("click", generateField);

 
let prise = {
  cat: "Кот",
  book: "Книга",
  car: "Машина",
};

function generateField(n) {
  let a;
  let b;
  let c;
  do {
    a = Math.floor(Math.random() * (n * n));
    b = Math.floor(Math.random() * (n * n));
    c = Math.floor(Math.random() * (n * n));
  } while (a === b || b === c || c === a);
  console.log(a, b, c);
}

generateField(3);
