// валидатор может обрабатывать текстовые поля 

let rules = {
    login: { // login - значение атрибута name
        // название полей должны соответсвовать методам валидатора
        required: true,
        minLength: 2,
        maxLength: 12
    },
    password: { // password - значение атрибута name
        required: true,
        minLength: 6
    }

};

Validator.setForm(document.forms["auth-form"], rules)
    setSuccess(()=>{
        console.log("Данные можно отпрвлять на сервер");
    })
    .setError(()=>{
        console.log("Форма заполнена с ошибками");
    })
    .run();
