let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: "https://picsum.photos/id/162/300"
    }
};


function generateCards(cardsData, cardsElem) {
    // cardsData - объект с товарами
    // cardsElem - элемент, в котором будут сформированы карточки с товарами
    for (let item in cardsData) {
        // на каждой итерации в переменную item копируеться имя свойства : piano, guitar, drum, flute..
        let card = document.createElement("div"); 
        // на каждой итерации создаём div
        card.classList.add("card"); // добавили класс card
        let title = document.createElement("h2"); 
        // создали элемент h2 для отображения названия
        title.innerText = cardsData[item].title;
        // создаём картинку 
        let pic = document.createElement("img");
        pic.setAttribute("src", cardsData[item].img);
        let price = document.createElement("p");
        price.innerText = `Цена: ${cardsData[item].price}`;
        // в элемент div  добавляем h2, img и p
        card.append(title, pic, price);
        // добавили элемент div (со всем его содержимым)
        // в cardElem
        cardsElem.append(card);
    }
}

let section = document.querySelector(".goods");
generateCards(goods, section);


let slider = {
    init: function (id) {
        this.cliderContainer = document.getElementById(id); // в объекте slider мы создаём свойство cliderContainer
        // со значением - элементы слайдера (список li)
        this.slides = this.cliderContainer.children;
        // Индекс текущего (отображаемого слайда)
        this.currentSlide = 0;
    },
    nextSlide: function () {
        // логика переключения слайдов
        if (this.currentSlide || this.currentSlide === 0 ){
            this.slides[this.currentSlide]
                .classList.remove("active");
            this.currentSlide += 1;

        }
        this.currentSlide = 
            this.currentSlide < this.slides.length ?
                this.currentSlide: 0;
        
        this.slides[this.currentSlide]
            .classList.add("active");
    console.log(this.currentSlide);
    },
    run: function () {
        // запуск метода nextSlide
        this.nextSlide();
        // setInterval(func, time (ml sec)); если функция не успела отработать то она всё равно будет вызвана повторно
        setInterval(this.nextSlide.bind(this), 4000); // так привязываеться контент (bind)
    }
};

slider.init("slider");
slider.run();