 // Global variable to store completed tasks count
    let completedTasksCount = 0;

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '12345') {
            // Hide login page and show main page
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('mainPage').style.display = 'block';
        } else {
            alert('Invalid login credentials');
        }
    }

    function loadTodoList() {
        // Fetch todo list from the API
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => {
                // Display todos
                const todoListElement = document.getElementById('todoList');
                todoListElement.innerHTML = '';

                todos.forEach(todo => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.innerHTML = todo.title;

                    // Check if the todo is completed
                    if (todo.completed) {
                        listItem.classList.add('list-group-item-success');
                        completedTasksCount++;
                    }

                    todoListElement.appendChild(listItem);
                });

                // Check if 5 tasks are completed
                if (completedTasksCount >= 5) {
                    alert(`Congrats. ${completedTasksCount} Tasks have been Successfully Completed`);
                }

                completedTasksCount = 0; // Reset completed tasks count
            })
            .catch(error => console.error('Error fetching todo list:', error));
    }

    function logout() {
        // Hide main page and show login page
        document.getElementById('mainPage').style.display = 'none';
        document.getElementById('loginPage').style.display = 'block';
    }
