class Task {
  constructor() {
    this.tasks = this.getTask();
  }

  getTask() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTask(data) {
    const newTask = {
      id: Date.now(),
      isCompleted: false,
      ...data,
    };

    this.tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    return {
      success: true,
    };
  }
}
