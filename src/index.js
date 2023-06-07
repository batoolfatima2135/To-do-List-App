import './style.css';
import displayTask from './modules/display.js';
import 'bootstrap/dist/css/bootstrap.css';
import add from './modules/addTask.js';
import remove from './modules/removeCompleted.js';

const input = document.getElementById('task');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const clear = document.getElementById('clearCompleted');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    add(tasks);
    displayTask(tasks);
  }
});
clear.addEventListener('click', () => {
  remove(tasks);
  displayTask(tasks);
});
displayTask(tasks);
