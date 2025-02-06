// DOM Elements
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');
const filterSelect = document.getElementById('filter-select');

// Add Task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item', priority);

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskContent.classList.add('task-text');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = '';
});

// Search and Filter Tasks
function filterTasks() {
  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  const tasks = document.querySelectorAll('.task-item');
  tasks.forEach(task => {
    const taskText = task.querySelector('.task-text').textContent.toLowerCase();
    const matchesSearch = taskText.includes(searchValue);
    const matchesFilter = filterValue === 'all' || task.classList.contains(filterValue);

    if (matchesSearch && matchesFilter) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterTasks);
filterSelect.addEventListener('change', filterTasks);
