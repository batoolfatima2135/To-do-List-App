import './style.css';
import displayTask from './modules/display.js';
import 'bootstrap/dist/css/bootstrap.css';
import add from './modules/addTask.js';
import remove from './modules/removeCompleted.js';

const input = document.getElementById('task');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const clear = document.getElementById('clearCompleted');
const refresh = document.getElementById('refresh');

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
refresh.addEventListener('click', () => {
  tasks = [];
  localStorage.removeItem('tasks');
  displayTask(tasks);
});
displayTask(tasks);
