import { checked, unchecked } from './checked.js';
import deleteTask from './deleteTask.js';
import edit from './edittask.js';

export default function displayTask(tasks) {
  const ul = document.getElementById('items');
  ul.innerHTML = '';
  tasks.forEach((task) => {
    // Creating li to store tasks
    const li = document.createElement('li');
    li.draggable = true;
    li.setAttribute('id', task.index);
    li.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    // Creating checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    // Creating label for checkbox
    const label = document.createElement('input');
    label.type = 'text';
    label.setAttribute('id', task.index);
    label.classList.add('flex-grow-1', 'text-left', 'm-1', 'form-control');
    // Adding event listner for delete
    label.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const text = label.value;
        edit(task.index, tasks, text);
        displayTask(tasks);
      }
    });
    label.value = task.description;
    li.appendChild(label);
    // Adding event listner
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        checked(tasks, task.index);
        label.style.textDecoration = 'line-through';
      } else {
        unchecked(tasks, task.index);
        label.style.textDecoration = 'none';
      }
    });
    if (task.completed) {
      checked(tasks, task.index);
      label.style.textDecoration = 'line-through';
      checkbox.checked = true;
    }
    // Creating option icon
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash', 'trash');
    icon.addEventListener('click', () => {
      deleteTask(task.index, tasks);
      displayTask(tasks);
    });
    li.appendChild(icon);
    // Appending elements
    ul.appendChild(li);
  });
}
