// Declare global vars
let toDos = []
let contador = 0
let taskObject = {}

//Add function code block
function add_task() {
    // We upload the info that we already have on the HTML
    let li = document.createElement('li');
    let taskDescription = document.getElementById("list")
    let task = document.getElementById("new-task").value

    // We validate if the input info is not empty
    if (!task.length) {
        taskDescription.innerHTML = '<p>La tarea no puede estar vacía<p>'
    } else {
        //We add a counter for changing an id number of every task
        contador++
        //We create an Object with the info that is going to be push to a list
        taskObject = {
            id: contador,
            text: task,
            isDone: false,
        }
        //We add the new task to
        li.innerHTML = `<label class="custom-checkbox">
        <input onchange="onCheck(this)" id="${contador}" type="checkbox">
        ${taskObject.text}`
        toDos.push(taskObject) //We push the object to the list
        taskDescription.appendChild(li) //We add the li child
        let checkbox = document.getElementById(`${contador}`)

        //Event listener for changing the letter style if is checked
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                li.classList.add("li-checked")
            } else {
                li.classList.remove("li-checked")
            }
        }
        )
    }
}


//We change the "isDone" for every single checked box
function onCheck(e) {
    if (e.checked) {
        c = toDos.filter(obj => obj.id == e.id)
        c[0].isDone = true; //If is already done
    } else {
        c = toDos.filter(obj => obj.id == e.id)
        c[0].isDone = false; //If is not done
    }
}

//Delete function
function onDelete() {
    //We upload the info that we already have on the HTML
    let contenido = document.getElementById('tasks')
    let lista = contenido.getElementsByTagName(`li`)
    //We roam from the end to the start 
    for (let i = toDos.length - 1; i >= 0; i--) {
        if (toDos[i].isDone === true) { //If are already checked (done)
            toDos.splice(i, 1); //We eliminate from the list
            lista[i].remove(); //And from the HTML
        }
    }
}

//Reset function
function reset() {
    let contenido = document.getElementById('tasks')
    contenido.remove()
}