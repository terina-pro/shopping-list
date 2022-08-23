const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

sendInput.addEventListener('keydown', function(event) {


    if (event.key == 'Enter') {
        const listItem = sendInput.value;
        const newItem = document.createElement('div');

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });
        newItem.textContent = listItem;
        if (listItem != '') {
            itemsContainer.append(newItem);
        }
        sendInput.value = '';
    }
})


/* Новые элементы должны добавляться в список по нажатию на Enter */
/* Пустые элементы не должны добавляться */
/* Если кликнуть на элемент списка, он зачеркивается */
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */
/* Очищать input после добавления нового элемента в список */