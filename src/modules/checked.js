export default function updateChecked(tasks, index) {
  tasks.map((item) => {
    if (item.index === index) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    return item;
  });
}