let titleElems = document.querySelectorAll(".article p:first-child"); // querySelectorAll ищет по css стилям, тут мы находим все первые дочерние элементы с классом article
console.log(titleElems);

// перебор html коллекции
for (let elem of titleElems) { 
    console.log (elem);
    // добавляем обработчика события click(щелчёк левой клавишей)
    // обработчик события - функция, в которой описывается реакция на событие
    // данная функция будет вызвана при наступление события!

    // 1 вариант:addEventListener(название события, название функции обработчика)
    elem.addEventListener("click", openDescription);

}

// функция, которая будет вызвана при нажатии мыши на элемент p

function openDescription() {
    console.log ("openDescription", this);
    // this - контекст вызова функции
    // в случае обработки событий - тот элемент на который повешен обработчик
    // получаем элемент this, получаем его соседа справа (р с длинным текстом)
    // добавляем css класс open если его нет и удаляем если он есть
    this.nextElementSibling.classList.toggle("open");
    
}

// Атрибут data-* используется для передачи пользовательских данных из html в js
// data - название_прикрепляемых_данных = "данные"
// получение на js : элемент.dataset.название_прикреплённых данных
/* <div data-art="575645"> </div>
при обращение к  divElem.dataset.art получим номер */

let getPresent = () => {
    return {
        car: "Машина",
        dog: "Собака",
        book: "Книга"
    }
};

// получим элемент - контеинер по id
let presentContainer = document.getElementById("present_container");
console.log(presentContainer);

// добавим обработчик событий на presentContainer
presentContainer.addEventListener("click", showPresent); 

function showPresent(event) {
    console.log("showPresent", this);
    console.log("информация о событии", event);
    // event.target- элемент на котором произошло событие в рамках presentContainer
    let clickElem = event.target; // любая область внутри presentContainer на которую был сделан click
    let present = clickElem.dataset.present;
    console.log("present =" + present);
    // если событие произошло на р то получим значение атрибута data-present 
    // если нет то undidined
    if(present) {
        clickElem.innerText = getPresent()[present];
        clickElem.classList.add("present");
        // удаление обработчика события removeEventListener можно удалить с контенера куда событие было повешано в нашем случае presentContainer
        this.removeEventListener("click", showPresent)
    }
}

window.addEventListener("scroll", fixMenu);
let fixedBlock = document.getElementById("fixed");
let fixedBlockoffset = fixedBlock.getBoundingClientRect().top; 
// отступ сверху
console.log ("fixedBlock", fixedBlock, fixedBlockoffset);

function fixMenu(){
    console.log("прокрутка " + window.pageYOffset);
    if (window.pageYOffset > fixedBlockoffset){
        fixedBlock.classList.add("fixed");
    } else {
        fixedBlock.classList.remove("fixed");
    }
}