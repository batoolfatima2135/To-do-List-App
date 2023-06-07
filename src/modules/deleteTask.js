export default function deleteTask(index, tasks) {
  tasks.splice(index - 1, 1);
  tasks.forEach((item, i) => {
    item.index = i + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
