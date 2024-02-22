let COUNT = 0;

function getQuote() {
    const listOfQuotes = [
        {
            quote: "Never, ever underestimate the importance of having fun.",
            author: "I forgot",
        },
        {
            quote: "I didn't have time to write a short letter, so I wrote a long one instead.",
            author: "Mark Twain",
        },
        {
            quote: "The only way to have a friend is to be one.",
            author: "Ralph Waldo Emerson",
        },
        {
            quote: "Two possibilities exist: Either we are alone in the Universe or we are not. Both are equally terrifying.",
            author: 'Arthur C. Clarke"',
        },
    ];

    const quoteBlock = document.getElementById("quote-block");
    const quoteAuthor = document.getElementById("quote-author");
    const randomQuote =
        listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];

    quoteBlock.innerText = `"${randomQuote.quote}"`;
    quoteAuthor.innerText = `${randomQuote.author}`;
    getYear();
}

function onAddItem() {
    const itemCount = COUNT++;
    const inputElement = document.getElementById("add-input-todo");

    if (inputElement.value) {
        const todoListContainer = document.getElementById(
            "todo-list-container"
        );

        // Create an element
        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-list-item");
        todoItem.id = `todo-item-${itemCount}`;
        todoItem.innerHTML += `<input type="checkbox" onclick="onCheckItem(event, ${itemCount})" class="todo-item-checkbox" />`;
        todoItem.innerHTML += `<span class="todo-item-label">${inputElement.value}</span>`;
        todoItem.innerHTML += `<button class="todo-item-btn" onclick="onRemoveItem(${itemCount})">x</button>`;

        // Add value to the container
        todoListContainer.appendChild(todoItem);

        // Empty the input
        inputElement.value = "";
    }
}

function onCheckItem(event, id) {
    const checkedItem = document.getElementById(`todo-item-${id}`);
    const isChecked = event.target.checked;
    if (isChecked) {
        checkedItem.classList.add("is-checked");
    } else {
        checkedItem.classList.remove("is-checked");
    }
}

function onRemoveItem(id) {
    const getSelectedItem = document.getElementById(`todo-item-${id}`);
    getSelectedItem.style.display = "none";
}

function getYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const yearContainer = document.getElementById("current-year");
    yearContainer.innerHTML = `${currentYear}`;
}
