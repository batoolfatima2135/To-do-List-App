import deleteTask from './deleteTask.js';
import displayTask from './display.js';

export default function remove(tasks) {
  const completed = tasks.filter((obj) => obj.completed === true);
  completed.forEach((element) => {
    deleteTask(element.index, tasks);
  });
  displayTask(tasks);
}