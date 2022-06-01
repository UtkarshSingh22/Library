let myLibrary = [];

function Book(title, author, pages, readOrNot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

function addBookToLibrary(){
    
}

function addBook(){
    popup.classList.add("active");
}

const popup = document.querySelector('.popup');
const container = document.querySelector('.container');
const add = document.querySelector('.addBook');
const closeBtn = document.querySelector('#close');
const submit = document.querySelector('.submit');
const delAll = document.querySelector('.deleteAll');
const del = document.querySelector('.del');

add.addEventListener('click', addBook);
closeBtn.addEventListener('click', function(){
    popup.classList.remove('active');
});
