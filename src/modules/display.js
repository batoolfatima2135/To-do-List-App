export default function displayTask(tasks) {
  const ul = document.getElementById('items');
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
    label.classList.add('flex-grow-1', 'text-left', 'm-1', 'form-control');
    label.value = task.description;
    li.appendChild(label);
    // Creating option icon
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash', 'trash');
    li.appendChild(icon);
    // Appending elements
    ul.appendChild(li);
  });
}
