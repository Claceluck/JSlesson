// кроме вариартов получения элементов из lesson 6, элементы формы можно получать чеоез значения атрибутов name

// document.forms - все формы в html документе 

let form = document.forms.lesson; // lesson - значение атрибута name формы 
console.log(form);

// доступ к элементу формы (form) по значению атрибута name
let LoginInput = form.elements.login; 
console.log(LoginInput);

// получение и установка значения (атрибут value )
// console.log(loginInput.value); так получить пользовательский ввод нельзя
// console.log(typeof loginInput.value);
LoginInput.value = "qwe"; // установка значения

// получим элементы со значением атрибута name=color

let colorRadio = form.elements.color;
console.log(colorRadio);
// colorRadio - коллекция, так как в форме неслколько элементов с name color 

// повесить обработчик события на каждую радиокнопку 
// собтие focus
// функция changeColor 
// на коллекцию нельзя поставить обработчик событий 

for (let radio of colorRadio) {
        radio.addEventListener("focus", changeColor);
}

function changeColor() {
    form.elements.checkbox_fieldset.style.background = this.value;
}

// значение атрибутов nmae чекбоксов == lang[],
// поэтому обращение через точку не подойдёт и нужно исрользовть []
let langArr = form.elements["lang[]"];
console.log(langArr);

// у чекбоксов и радиокнопок есть атрибут cheked
// на js мы можем получить значение этого атрибута
// через свойство elem.cheked 

for (let cb of langArr) {
    if (cb.checked) {
        console.log(cb.value); // это не инамическая работа с чек боксами
    }
}
// выпадающий список  ( значение атрибута name = countries)
let countries  = form.elements.countries; 
console.log(countries);
// у option есть атрибут seleckted, на js  мы можем получить значение данного атрибута  через свойство elem.selected



//  отправка формы ( нажатие на кнопку submit) событие формы

form.addEventListener("submit", takeForm);


function takeForm(event) {
    // по умолчанию данне формы сразу отправляются на сервер
    event.preventDefault(); // отмена события по умолчанию 
    console.log("обработка формы на js");

    // значение атрибута value ( пользовательский ввод)
    // элемента формы с name= login 
    console.log(this.elements.login.value);

    for ( let elem of form.elements.countries) {
        if (elem.selected) {
            console.log(elem.value);
        }
    }
    // объект FormData собирает все данные HTML  формы, используется для отправки данных на сервер хранит данные в формате: 
    // значение атрибута name - значение атрибута value
    let formData = new FormData(this);
    // [login: qwe]
    // [pwd: 123]
    // [user_name: Anton]
    console.log(formData);
    // возвращает значение атрибута value
    // по значению атрибута name 
    console.log(formData.get('login')); 
    console.log(formData.getAll("lang[]"));
    // удаление поля с заданным именем 
    formData.delete('pwd');
    // добавление поля
    formData.append('some_field', 'some_value');

    for (let data of formData.entries()) {
        console.log(data);
        console.log('значение атрибута name ' + data[0]);
        console.log('значение атрибута value ' + data[1]);
    }

}

// reset - сброс данныз формы ( щелчек по кнопки type='reset')
// данное событие - событие формы
// form.addEventListener( 'reset, resetHandler');

LoginInput = form.elements.login;
// когда пользователь закончил ввод - это потеря фокуса ( blur),  проверять введенные им данные и сразу сообщать об успехе/ошибки 
LoginInput.addEventListener('blur', focusOutElem);

function focusOutElem() {
    console.log('Потеря фокуса login input');
    if(this.value.length < 3) {
        this.nextElementSibling.classList.add("error");
    } else {
        this.nextElementSibling.classList.remove("error");
        this.nextElementSibling.classList.add("success");
    }
}

LoginInput.addEventListener('focus', focusOutElem);
function focusOutElem() { 
    console.log ('фокус на login input');
}


