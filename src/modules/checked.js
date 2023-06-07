export function checked(tasks, index) {
  const task = tasks.find((obj) => obj.index === index);
  task.completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function unchecked(tasks, index) {
  const task = tasks.find((obj) => obj.index === index);
  task.completed = false;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}