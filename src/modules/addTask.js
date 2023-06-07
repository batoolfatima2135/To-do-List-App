export default function add(tasks) {
  const input = document.getElementById('task');
  const task = {
    index: tasks.length + 1,
    description: input.value,
    completed: false,
  };
  input.value = '';
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}