function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${input.value}
    <button onclick="completeTask(this)">✔</button>
    <button onclick="deleteTask(this)">❌</button>
  `;
  document.getElementById("pending").appendChild(li);
  input.value = "";
}

function completeTask(btn) {
  const li = btn.parentElement;
  btn.remove();
  document.getElementById("completed").appendChild(li);
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
