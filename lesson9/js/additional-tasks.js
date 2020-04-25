
// function Users(name, commit) {
//     this.name = name;
//     this.date = new Date();
//     this.commit = commit;
// }
let arrAvtor = [];
let inputCommit = document.getElementsByTagName('input')[0];
inputCommit.addEventListener('click',addCommit);

function addCommit(){
    let commit = document.getElementById('commit'); // данные от пользователя
    commit = commit.value.trim();
    if (commit != '') {
        let user = {name: 'Ivan ', comment: commit};
        // arrAvtor.push(user); 
        let img = document.createElement('img');
        img.setAttribute('src', 'default.png');
        let p = document.createElement ('p');
        p.innerText = 'Гость';
        let commentP = document.createElement('p');
        commentP.innerText = commit;
        let commentDiv = document.createElement('div');
        commentDiv.append(img, p, commentP);
        view.append(commentDiv);
    } 
    viewUsers() 
} 

function viewUsers(){
    let view = document.getElementById('view');
    rez = '';
    for (let item of arrAvtor){
        rez = rez + item.name + item.comment + '<br>'; 
    } 
    view.innerHTML = rez; // всегда перезапись, для большого набора данных это большая нагрузка
    // в цикле innerHTML не стоит добавлять
}

let currentDate = new Date(); // получение текущей даты ( объект даты)
console.log(`Число ${currentDate.getDate()}, Месяц ${currentDate.getMonth()},Год ${currentDate.getFullYear()}` );
console.log(`Время ${currentDate.getHours()}:${currentDate.getMinutes()}`);