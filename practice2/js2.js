document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
  
        listItem.innerHTML = `
          ${taskText}
          <span class="remove-btn">Remove</span>
        `;
  
        const removeBtn = listItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
          taskList.removeChild(listItem);
        });
  
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear input field
      }
    });
  
    // Optional: Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTaskBtn.click();
      }
    });
  });
  