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

let getGame = () => {
  return {
      cat: "Кот",
      book: "Книга",
      car: "Машина"
  }
};

function generateField(n) {
  if (n < 3)
      return;
      
  let priseCell = [];
  while (true)
  {
      let index = Math.floor(Math.random() * n * n); // сгенерировали случайные индексы призовых ячеек
      if (!priseCell.includes(index))
      {
          priseCell.push(index);
      }
      if (priseCell.length === 3)
      {
          console.log(priseCell);
          break;
      }
  }

  let count = 0;
  let gameField = document.getElementById("gameField"); // выбираем директторию для игрового поля
  console.log(gameField);
  for (let i = 0; i < n; i++)
  {
      let gameCell = document.createElement("div"); // создаём игровое поле
      gameCell.classList.add("flex");

      for (let j = 0; j < n; j++)
      {
          count++;
          let p = document.createElement("p"); // Создаём игровые ячейки
          p.classList.add("gameCell");
          p.textContent = "Приз";

          if (priseCell.includes(count))
          {
              p.setAttribute("data-prise", priseName(priseCell.indexOf(count))); 
              console.log(priseCell.indexOf(count));
              console.log(priseName(priseCell.indexOf(count)));
          }
              
          gameCell.append(p);
      }
      gameField.append(gameCell);
  }
}

let priseName = (value) => {  // массив с призами
  let mas = ["cat", "book", "car"];
  return mas[value];
};

generateField(3); 

let attemptValue = 3; // количество попыток 

let container = document.getElementById("gameField");
container.addEventListener("click", openPrise);

let attempt = document.createElement("span");
attempt.innerText = `Осталось попыток: ${attemptValue}`
document.body.append(attempt);

function openPrise(event){ // функция открываня призов

  let clickElem = event.target; 
  console.log(clickElem);
  let prise = clickElem.dataset.prise;
  
  if(prise && attemptValue > 0){
      clickElem.innerText = getGame()[prise];
      clickElem.classList.add("open");
      this.removeEventListener("click", openPrise);
      attempt.innerText = "Победа!";
  } else 
  if(attemptValue > 0){
      clickElem.innerText = "Пусто";
      clickElem.classList.add("open");
      attemptValue--;
      attempt.innerText = `Количество попыток: ${attemptValue}`;
  }
  else this.removeEventListener("click", openPrise);
}
