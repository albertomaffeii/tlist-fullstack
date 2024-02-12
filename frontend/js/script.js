/**
 * Ottiene il riferimento all'elemento <tbody> del documento HTML.
 * @type {HTMLElement}
 */
const tbody = document.querySelector("tbody");

const addForm = document.querySelector(".add-form");

const inputTask = document.querySelector(".input-task");

const fetchTasks = async () => {
    const res = await fetch("http://localhost:3333/tasks");
    const tasks = await res.json();
    console.log(res.status);
    return tasks;
};

const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };

    await fetch("http://localhost:3333/tasks", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });

    loadTasks();
    inputTask.value = "";
};

const deleteTask = async (id, title) => {
    if (
        !confirm(
            "Are you sure you want to delete this task:\n ° " + title + "?"
        )
    ) {
        loadTasks();
        return;
    }

    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: "delete",
    });

    loadTasks();
};

const updateTask = async ({ id, title, status }) => {
    if (
        !confirm(
            "Are you sure you want to update this task:\n ° " + title + "?"
        )
    ) {
        loadTasks();
        return;
    }

    const updated_atUTC = new Date().toISOString(); // Obtém a data atual em formato UTC

    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, status, updated_at: updated_atUTC }),
    });

    loadTasks();
};

const formatDate = (dateUTC) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false, // I set it to use the 24-hour format.
    };

    const date = new Date(dateUTC).toLocaleString("it", options);
    return date;
};

const createElement = (tag, innerText = "", innerHTML = "") => {
    const element = document.createElement(tag);
    if (innerText) {
        element.innerText = innerText;
    }
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
};

const createSelect = (value) => {
    const options = `
    <option value="pending">Pending</option>
    <option value="progress">In Progress</option>
    <option value="completed">Completed</option>    
    `;

    const select = createElement("select", "", options);

    select.value = value;

    return select;
};

const createRow = (task) => {
    const { id, title, created_at, status, updated_at } = task;

    const tr = createElement("tr");
    const tdTitle = createElement("td", title);
    const tdCreatedAt = createElement("td", formatDate(created_at));
    const tdStatus = createElement("td");
    const tdUpdatedAt = createElement("td", formatDate(updated_at));
    const tdActions = createElement("td");

    const select = createSelect(status);

    select.addEventListener("change", ({ target }) =>
        updateTask({ ...task, status: target.value })
    );

    const editButton = createElement(
        "button",
        "",
        '<span class="material-symbols-outlined">edit</span>'
    );
    const deleteButton = createElement(
        "button",
        "",
        '<span class="material-symbols-outlined">delete</span>'
    );

    const editForm = createElement("form");
    const editInput = createElement("input");

    editInput.value = title;
    editForm.appendChild(editInput);

    editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        updateTask({ id, title: editInput.value, status });
    });

    editButton.addEventListener("click", () => {
        tdTitle.innerText = "";
        tdTitle.appendChild(editForm);
    });

    tdStatus.appendChild(select);

    editButton.classList.add("btn-action");
    deleteButton.classList.add("btn-action");

    deleteButton.addEventListener("click", () => deleteTask(id, title));

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdUpdatedAt);
    tr.appendChild(tdActions);

    return tr;
};

const loadTasks = async () => {
    const tasks = await fetchTasks();

    tbody.innerHTML = "";

    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
};

addForm.addEventListener("submit", addTask);

loadTasks();
