export default function edit(index, tasks, text) {
  tasks[index - 1].description = text;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}