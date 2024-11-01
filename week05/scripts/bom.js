
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


function displayList(item) {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    listItem.textContent = item;
    deleteButton.textContent = '❌';

    listItem.append(deleteButton);

    list.append(listItem);

    deleteButton.addEventListener('click', function () {
        list.removeChild(listItem);
        deleteChapter(item);
        input.focus();
        });
}
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }

    else {
        // Optional: You can show an alert or message if the input is blank
        alert('Please enter a valid item.');
        }
    input.focus();
  });



function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


