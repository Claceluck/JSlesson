class Validator {

    static setFormAndSettings(form, settings){
        return new Validator(form, settings);
    }
}

// Логин от 3 до 7 
// пароль от 5

// при потери фокуса:
// сразу проверять введеённые данные и сообщать об ошибки/успехе 

// при нажатии на кнопку type= sumbit:
// в случае успешного заполнения - вызов success функции 
// в случае успешного заполнения - вызов error функции

let submitSuccess = () => {console.log("Данные можно отправить на сервер")};
let submitError = () => {console.log("Данные нельзя отправить на сервер")};

let settings = {
    login: { //login значение атрибута name
        rules: {
            required: true, // поле обязательное для заполнения
            minLength: 3, // мин длинна - 3
            maxLength: 7 // макс длинна - 7 
        }
    },
    password: { //password значение атрибута name
        rules: {
            required: true, // поле обязательное для заполнения
            minLength: 5 // мин длинна - 5
        }
    }
}

Validator.setFormAndSettings(document.forms.validator, settings)
    .setSubmitSuccess(submitSuccess)
    .setSumbitError(submitError)
    .run();