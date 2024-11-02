const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;


document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu-toggle');
    const navigation = document.querySelector('#main-nav ul');
    const body = document.querySelector('body');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        body.classList.toggle('menu-open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tracker-form');
    const progressTable = document.getElementById('progress-table').querySelector('tbody');
    let progressData = JSON.parse(localStorage.getItem('progressData')) || [];

    function renderProgress() {
        // Clear current rows
        progressTable.innerHTML = '';

        // Render each item
        progressData.forEach((item, index) => {
            const row = document.createElement('tr');

            const dateCell = document.createElement('td');
            dateCell.textContent = item.date;
            row.appendChild(dateCell);

            const skillCell = document.createElement('td');
            skillCell.textContent = item.skill;
            row.appendChild(skillCell);

            const milestoneCell = document.createElement('td');
            milestoneCell.textContent = item.milestone;
            row.appendChild(milestoneCell);

            const notesCell = document.createElement('td');
            notesCell.textContent = item.notes;
            row.appendChild(notesCell);

            // Action cell for deleting
            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteProgress(index));
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            progressTable.appendChild(row);
        });
    }

    function addProgress(date, skill, milestone, notes) {
        progressData.push({ date, skill, milestone, notes });
        localStorage.setItem('progressData', JSON.stringify(progressData));
        renderProgress();
    }

    function deleteProgress(index) {
        progressData.splice(index, 1);
        localStorage.setItem('progressData', JSON.stringify(progressData));
        renderProgress();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = form.date.value;
        const skill = form.skill.value.trim();
        const milestone = form.milestone.value.trim();
        const notes = form.notes.value.trim();

        if (date && skill && milestone) {
            addProgress(date, skill, milestone, notes);
            form.reset();
        }
    });

    // Initial render on page load
    renderProgress();
});
