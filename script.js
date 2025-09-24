document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const container = document.querySelector('.container');

    const counterDiv = document.createElement('div');
    counterDiv.id = 'complete-counter';
    counterDiv.textContent = 'Tasks completed: 0';
    counterDiv.style.marginTop = '10px';
    counterDiv.style.fontWeight = 'bold';
    container.appendChild(counterDiv);

    let completeCount = 0;

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-btn" onclick="toggleComplete(this)">✓</button>
                <button class="delete-btn" onclick="deleteTask(this)">✖</button>
            </div>
        `;
        taskList.appendChild(li);
    }

    window.toggleComplete = function(btn) {
        const taskItem = btn.closest('.task-item');
        const wasCompleted = taskItem.classList.contains('completed');
        taskItem.classList.toggle('completed');

        // Zwiększamy lub zmniejszamy licznik w zależności od stanu
        if (!wasCompleted) {
            completeCount++;
        } else {
            completeCount--;
        }
        counterDiv.textContent = `Tasks completed: ${completeCount}`;
    }

    window.deleteTask = function(btn) {
        const taskItem = btn.closest('.task-item');


        if (taskItem.classList.contains('completed')) {
            completeCount--;
            counterDiv.textContent = `Tasks completed: ${completeCount}`;
        }

        taskItem.remove();
    }
});