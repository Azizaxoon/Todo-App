let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks')

// add btn disabled 

input.addEventListener('keyup', () => {
    if (input.value.trim() !== 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.add('active')

    }
})


// add new item to list

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-circle-xmark delete"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task')
    }
})


function deleteItem(item) {
    item.remove();
}

tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        deleteItem(event.target.closest('.item'));
    }
});
