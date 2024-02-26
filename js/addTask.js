// TaskController

document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskModel = new Task();
  
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskData = {
        taskName: document.getElementById("taskName").value,
        taskPriority: document.getElementById("taskPriority").value,
      };
     
      const result = taskModel.saveTask(taskData);
  
      if (result.success) {
        return (window.location.href = "../tasks.html");
      } else {
        console.log("proses simpan data gagal!");
      }
    });
  });
  