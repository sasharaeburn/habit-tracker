let form = document.getElementById('add-habit');

form.addEventListener('submit', event => {
    event.preventDefault();

    createHabit('test');

    let habit = {
        text: document.getElementById('habit-text').value,
        currentRepetitions: 0,
        maxRepetitions: parseInt(document.getElementById('num-of-repetitions').value),
    };

    saveHabit(habit);
})


function createHabit(habitText) {
    let habitContainer = document.getElementById('habit-container');

    let habit = document.createElement('div');
    habit.setAttribute('class', 'habit');

    let habitHeader = document.createElement('div');
    habitHeader.setAttribute('class', 'habit-header');
    habitHeader.innerHTML = 'Added habit';

    let habitName = document.createElement('div');
    habitName.setAttribute('class', 'habit-name');

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-sm btn-outline-danger');
    deleteButton.innerHTML = 'x';

    habitHeader.appendChild(habitName);
    habitHeader.appendChild(deleteButton);

    let progress = document.createElement('div');
    progress.setAttribute('class', 'progress');

    let progressBar = document.createElement('div');
    progressBar.setAttribute('class', 'progress-bar');
    progressBar.setAttribute('style', 'width: ' + '' + '%');
    progressBar.innerHTML = '' + '%';

    progress.appendChild(progressBar);

    let loggedHabits = document.createElement('div');
    loggedHabits.setAttribute('class', 'logged-habits');

    let numOfRepetitions = document.createElement('div');
    numOfRepetitions.setAttribute('class', 'num-of-times');

    let plusButton = document.createElement('button');
    plusButton.setAttribute('class', 'btn btn-success');
    plusButton.innerHTML = '+';

    loggedHabits.appendChild(numOfRepetitions);
    loggedHabits.appendChild(plusButton);

    habit.appendChild(habitHeader);
    habit.appendChild(progress);
    habit.appendChild(loggedHabits);

    habitContainer.appendChild(habit);
}

function saveHabit(habit) {
    let habits = getHabits();

    habits.push(habit);

    saveHabits(habits);
}

function getHabits() {
    let habits = [];

    if (localStorage.getItem('habits') !== null) {
        habits = JSON.parse(localStorage.getItem('habits'));
    }

    return habits;
}

function saveHabits(habits) {
    let jsonHabits = JSON.stringify(habits);

    localStorage.setItem('habits', jsonHabits);
}

