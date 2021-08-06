function openSideMenu() {
    document.getElementById('slideMenu').style.width = "250px"
    document.getElementById('main').style.marginLeft = "250px"
}


function closeSideMenu() {
    document.getElementById('slideMenu').style.width = "0px"
    document.getElementById('main').style.marginLeft = "0"
}

function navOpen() {
    document.getElementById('logoutBtn').style.transform = "scale(1)"
}

function navClose() {
    document.getElementById('logoutBtn').style.transform = "scale(0)"
    document.getElementById('slideMenu').style.width = "0px"
    document.getElementById('main').style.marginLeft = "0"
}

function todoOpen() {
    document.getElementById('dashBtn').classList.remove("active")
    document.getElementById('todoBtn').classList.add('active')
    document.getElementById('sec1').style.display = 'none'
    document.getElementById('sec2').style.display = "block"
}

function dashOpen() {
    document.getElementById('dashBtn').classList.add("active")
    document.getElementById('todoBtn').classList.remove('active')
    document.getElementById('sec1').style.display = 'block'
    document.getElementById('sec2').style.display = "none"
}

let windowWidth = window.innerWidth;

function addTodo() {
    let conteiner = document.body;
    let newTodoWindow = document.createElement('div');
    conteiner.appendChild(newTodoWindow);
    newTodoWindow.setAttribute('class', 'todo-window');




    let newTodo = document.createElement('div')
    newTodoWindow.appendChild(newTodo)
    newTodo.classList.add('new-todo')

    let exit = document.createElement('a')
    exit.innerHTML = "&times"
    exit.classList.add('exit')
    newTodo.appendChild(exit)
    exit.setAttribute('onclick', 'closeTodo()')

    let addTodoText = document.createElement('h2');
    addTodoText.innerText = "Add Todo"
    addTodoText.style.marginBottom = '50px'
    newTodo.appendChild(addTodoText)







    let todoInput = document.createElement('input')
    todoInput.placeholder = "type  Todo here"

    newTodo.appendChild(todoInput)

    let addBtn = document.createElement('button')
    addBtn.innerText = 'ADD'
    addBtn.classList.add('add')
    newTodo.appendChild(addBtn)

}

function closeTodo() {
    document.querySelector('.todo-window').remove();


}


let labels1 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Octo', 'Nove', 'Dec'];
let data1 = [82, 71, 60, 36, 55, 75, 32, 58, 69, 70, 34, 55];

let colors1 = ['#49A9EA'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'bar',
    data: {
        labels: labels1,
        datasets: [{
            label: 'Total Tasks',
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {

        legend: {
            display: false
        }
    }
});
let labels2 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Octo', 'Nove', 'Dec'];
let data2 = [61, 55, 55, 10, 50, 69, 14, 45, 60, 65, 16, 14];
let colors2 = ['#49A9EA'];

let myChart2 = document.getElementById("myChart1").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            label: 'Total Completed Tasks',
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {

        legend: {
            display: false
        }
    }
});



let labels3 = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Octo', 'Nove', 'Dec'];
let data3 = [55, 35, 41, 16, 37, 47, 8, 32, 56, 47, 16, 30];
let colors3 = ['#49A9EA'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'bar',
    data: {
        labels: labels3,
        datasets: [{
            label: 'Total Incomplated Tasks',
            data: data3,
            backgroundColor: colors3
        }]
    },
    options: {

        legend: {
            display: false
        }
    }
});














const tabSwitchers = document.querySelectorAll("[data-switcher]")
for (let i = 0; i < tabSwitchers.length; i++) {
    const tabSwitcher = tabSwitchers[i];
    const pageNum = tabSwitcher.dataset.tab

    tabSwitcher.addEventListener('click', () => {
        document.querySelector('.tabs .tab.on').classList.remove('on')
        tabSwitcher.parentNode.classList.add('on')



        switchPage(pageNum)
    })
}

function switchPage(pageNum) {
    const currentPage = document.querySelector('.pages .page.pageOn')
    currentPage.classList.remove('pageOn')


    const nextPage = document.querySelector(`.pages .page[data-page="${pageNum}"]`)
    nextPage.classList.add('pageOn')
}

















const containerPage1 = document.getElementById('page1')
const containerPage2 = document.getElementById('page2')
const containerPage3 = document.getElementById('page3')
const containerPage4 = document.getElementById('page4')
const containerPage5 = document.getElementById('page5')
const containerPage6 = document.getElementById('page6')
const containerPage7 = document.getElementById('page7')
const containerPage8 = document.getElementById('page8')
const containerPage9 = document.getElementById('page9')
const containerPage10 = document.getElementById('page10')





const randerTodos = async() => {
    let url = 'https://jsonplaceholder.typicode.com/todos';

    const res = await fetch(url);
    const todos = await res.json();
    let temple = '';
    let temple2 = '';
    let temple3 = '';
    let temple4 = '';
    let temple5 = '';
    let temple6 = '';
    let temple7 = '';
    let temple8 = '';
    let temple9 = '';
    let temple10 = '';




    for (let i = 0; i < 100; i++) {
        const todo = todos[i]
        const todoId = todo.id
        if (todo.id < 11) {
            temple += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage1.innerHTML = temple
        } else if (todo.id < 21 && todo.id > 10) {
            temple2 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage2.innerHTML = temple2
        } else if (todo.id < 31 && todo.id > 20) {
            temple3 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage3.innerHTML = temple3
        } else if (todo.id < 41 && todo.id > 30) {
            temple4 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage4.innerHTML = temple4
        } else if (todo.id < 51 && todo.id > 40) {
            temple5 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage5.innerHTML = temple5
        } else if (todo.id < 61 && todo.id > 50) {
            temple6 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage6.innerHTML = temple6
        } else if (todo.id < 71 && todo.id > 60) {
            temple7 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage7.innerHTML = temple7
        } else if (todo.id < 81 && todo.id > 70) {
            temple8 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage8.innerHTML = temple8
        } else if (todo.id < 91 && todo.id > 80) {
            temple9 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage9.innerHTML = temple9
        } else if (todo.id < 101 && todo.id > 90) {
            temple10 += `
        <div class="todo">
        <p>${todo.title}</p>
        <p>${todo.completed}</p>
        <p> user ID ${todo.userId}</>
        <p>${todo.id}</p>
        <div>
         <button class="todoDel">Delete</button>
        <button class="todoEdit">Edit</button>
        </div>
        </div>
        `
            containerPage10.innerHTML = temple10
        }
    }




}







window.addEventListener('DOMContentLoaded', () => randerTodos())