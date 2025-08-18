document.addEventListener('DOMContentLoaded', function () {
  // Toggle task completion
  const checkboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const taskItem = this.parentElement;
      if (this.checked) {
        taskItem.style.textDecoration = 'line-through';
        taskItem.style.opacity = '0.7';
      } else {
        taskItem.style.textDecoration = 'none';
        taskItem.style.opacity = '1';
      }
    });
  });

  // Add new task
  const addTaskBtn = document.querySelector('.add-task');
  addTaskBtn.addEventListener('click', function () {
    const taskText = prompt('Enter new task:');
    if (taskText) {
      const taskList = document.querySelector('.task-list');
      const newTask = document.createElement('li');
      newTask.innerHTML = `
                <input type="checkbox"> ${taskText}
            `;
      taskList.appendChild(newTask);

      // Add event listener to the new checkbox
      newTask.querySelector('input').addEventListener('change', function () {
        if (this.checked) {
          newTask.style.textDecoration = 'line-through';
          newTask.style.opacity = '0.7';
        } else {
          newTask.style.textDecoration = 'none';
          newTask.style.opacity = '1';
        }
      });
    }
  });

  // Sidebar navigation
  const navItems = document.querySelectorAll('.sidebar nav li');
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Favorite tools interaction
  const tools = document.querySelectorAll('.tool');
  tools.forEach(tool => {
    tool.addEventListener('click', function () {
      alert(`Opening ${this.textContent.trim()}`);
    });
  });

  // Calendar day selection
  const days = document.querySelectorAll('.day');
  days.forEach(day => {
    day.addEventListener('click', function () {
      days.forEach(d => d.classList.remove('selected'));
      this.classList.add('selected');
      console.log('Selected date:', this.textContent);
    });
  });

  // Update current time
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const dateString = now.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });

    // In a real app, you would update the time widget here
    console.log('Current time:', timeString, dateString);
  }

  updateTime();
  setInterval(updateTime, 60000); // Update every minute
});