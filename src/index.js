import './style.css';
import displayTask from './modules/display.js';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const tasks = [
  {
    index: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'fix car',
    completed: false,
  },
  {
    index: 3,
    description: 'Cook food',
    completed: false,
  },
  {
    index: 4,
    description: 'Eat dinner',
    completed: false,
  },
];
window.addEventListener('DOMContentLoaded', displayTask(tasks));