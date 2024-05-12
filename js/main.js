const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const tasksCreated = document.querySelectorAll(".no-completed");
  const numTask = tasksCreated.length;
  if (taskText) {
    const li = document.createElement("li");
    li.className = "no-completed";
    if (numTask > 0) {
      li.setAttribute("id", `${numTask + 1}th`);
      li.textContent = `${numTask + 1}) ${taskText}`;
    } else {
      li.setAttribute("id", "1th");
      li.textContent = `1) ${taskText}`;
    }

    const span = document.createElement("span");
    span.className = "done";
    li.appendChild(span);

    li.addEventListener("click", toggleCompleted);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

function toggleCompleted(event) {
  event.stopPropagation();
  let li = event.target;
  let span = event.target.lastChild;
  if (span == null) {
    li = event.target.parentElement;
    span = event.target;
  }
  li.classList.toggle("completed");
  span.classList.toggle("completed");
}
