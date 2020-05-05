class Validator {

    _errors = 0;

    _messages = {
        minLengt: "Минимум:",
        maxLength: "Максимум:",
        required: "Поле обязательно для заполнения"
    };

    constructor(form, rules){
        this._form = form;
        this._settings = rules;
    }
    // имена методов должны выглядеть как свойства объектов 
    required(inputValue){
        return inputValue.length > 0;
    }

    minLength(inputValue, rule){
        return inputValue.length >= rule;
    }

    maxLength(inputValue, rule){
        return inputValue.length <= rule;
    }

    validateField(elem, elemRules){
        // elem  проверяемый элемент
        //elemRules объект с правилами для проверки пользовательского ввода 
        for(let rule in elemRules){
            // для login required minLengt maxLength 
        if(!this[rule](elem.value, elemRules[rule])) {
            // this.required()
            // this.minLengt()
            // this.maxLength()
            elem.nextElementSibling.innetText = `${this._messages[rule]} ${elemRules[rule]}`
            this._errors += 1;
            return;
        }
        if (this._errors > 0) this._errors -= 1;
        elem.nextElementSibling.innetText = "Поле заполненно верно";
        }
        
        }
    
        // метод должен быть вызван, при событии submit
        submitValidate(event){
            event.preventDefault();
            for (let elem of this._form.elements){
                if(elem.dataset.validate) {
                    this.validateField(elem, this._settings[elem.dataset.validate]);
                }
                if(this._errors === 0) this._successFunc();
                else this._errorFunc();
            }
        }
        // метод должен быть вызван, когда происходит потеря фокуса элемента!

        blurValidate(elem, elemRules){
            this.validateField(elem, elemRules);
        }

        initSubmit(){
            this._form.addEventListener("submit", this.submitValidate.bind(this));
        }
        initBlur(){
            for (let elem of this._form.elements){
                if(elem.dataset.validate) {
                    elem.addEventListener("blur", this.blurValidate.bind(this, elem, this._settings[elem.dataset.validate]))
                }
            }
        }

        run () {
            this.initBlur();
            this.initSubmit();
        }

    setSuccess(successFunc){
         // создаёт свойство _successFunc, устанавливаем значение 
        this._successFunc = successFunc;
        return this; // очень часто используеться метод возвращает сссылку на текущий объект 
    }

    setError(errorFunc){
        // создаёт свойство _errorFunc, устанавливаем значение 
        this._errorFunc = errorFunc;
        return this;
    }

    static setForm(form, rules) {
        // создаёт объект и возвразает ссылку на этот объект 
        return new Validator(form, rules);
    }

}