function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Toggle completion
    li.onclick = () => {
      li.classList.toggle("completed");
    };
  
    // Delete on double click
    li.ondblclick = () => {
      li.remove();
    };
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  