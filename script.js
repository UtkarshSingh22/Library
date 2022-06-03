//Variables declaration

let myLibrary = [];
const popup = document.querySelector('.popup');
const container = document.querySelector('.container');
const add = document.querySelector('.addBook');
const closeBtn = document.querySelector('#close');
const delAll = document.querySelector('.deleteAll');
const del = document.querySelector('.del');
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const rON = document.querySelector('#rON')
const form = document.querySelector('.form')
let content = document.querySelector('.content')
let delBtn = 0;
let boxes = 0;
let count = 0;


//Functions and constructors


function Book(title, author, pages, readOrNot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

function addBook(){
    popup.classList.add("active");
}

function deleteBoxes(){
    content.addEventListener('click', (e) => {
        let target = e.target;
        if(target.className === "del"){
            content.removeChild(content.children[target.dataset.index]);
            myLibrary.splice(target.dataset.index, 1);

            delBtn = document.querySelectorAll('.del');
            for(let i=0;i<delBtn.length;i++){
                delBtn[i].dataset.index = i;
            }
        }
        else{
            return;
        }
        
    })
}

function readToNotRead(){
    content.addEventListener('click', (e) => {
        let target = e.target;
        if(target.className === "read"){
            let ind = target.nextSibling.dataset.index;
            if(myLibrary[ind].readOrNot == true){
                myLibrary[ind].readOrNot = false;
                target.textContent = "Not Read";
            }
            else{
                myLibrary[ind].readOrNot = true;
                target.textContent = "Read";
            }
        }
        else{
            return;
        }
        
    })
}


// Event listeners and function call



add.addEventListener('click', addBook);


closeBtn.addEventListener('click', function(){
    popup.classList.remove('active');
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    popup.classList.remove('active');
    let book = new Book(title.value, author.value, pages.value, rON.checked);
    myLibrary.push(book);

    const box = document.createElement('div')
    box.classList.add('box');
    const info1 = document.createElement('div')
    const info2 = document.createElement('div')
    const info3 = document.createElement('div')
    const read = document.createElement('button')
    const del = document.createElement('button')
    info1.classList.add('info1');
    info2.classList.add('info2');
    info3.classList.add('info3');
    read.classList.add('read');
    del.classList.add('del');
    del.dataset.index = count;
    count += 1;

    info1.textContent = title.value;
    info2.textContent = author.value;
    info3.textContent = pages.value;
    if(rON.checked == true){
        read.textContent = 'Read';
    }
    else{
        read.textContent = 'Not Read';
    }
    del.textContent = 'Remove';

    box.appendChild(info1)
    box.appendChild(info2)
    box.appendChild(info3)
    box.appendChild(read)
    box.appendChild(del);
    content.appendChild(box);

    title.value = '';
    author.value = '';
    pages.value = '';
    rON.checked = false;

    boxes = document.querySelectorAll('.box');
    delBtn = document.querySelectorAll('.del');
    content = document.querySelector('.content')

    for(let i=0;i<delBtn.length;i++){
        delBtn[i].dataset.index = i;
    }

})

deleteBoxes();
readToNotRead();