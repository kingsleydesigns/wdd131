
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value;
        deleteButton.textContent = '❌';

        listItem.append(deleteButton);

        list.append(listItem);

        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
          });
        input.value = '';
    }
    else {
        // Optional: You can show an alert or message if the input is blank
        alert('Please enter a valid item.');
        }
    input.focus();
  });