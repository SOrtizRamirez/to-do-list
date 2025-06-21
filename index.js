let toDos = []
let contador = 0
let taskObject = {}

function add_task() {
    let li = document.createElement('li');
    let taskDescription = document.getElementById("list")
    let task = document.getElementById("new-task").value
    if (!task.length) {
        taskDescription.innerHTML = '<p>La tarea no puede estar vacía<p>'
    } else {
        contador++
        taskObject = {
            id: contador,
            text: task,
            isDone: false,
        }

        li.innerHTML = `<label class="custom-checkbox">
        <input onchange="onCheck(this)" id="${contador}" type="checkbox">
        ${taskObject.text}`
        toDos.push(taskObject)
        taskDescription.appendChild(li)
        let checkbox = document.getElementById(`${contador}`)

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

function onCheck(e) {
    if (e.checked) {
        c = toDos.filter(obj => obj.id == e.id)
        c[0].isDone = true;
    } else {
        c = toDos.filter(obj => obj.id == e.id)
        c[0].isDone = false;
    }
}

function onDelete() {
    let contenido = document.getElementById('tasks')
    let lista = contenido.getElementsByTagName(`li`)
    for (let i = toDos.length - 1; i >= 0; i--) {
        if (toDos[i].isDone === true) {
            toDos.splice(i, 1);
            lista[i].remove();
        }
    }
}
