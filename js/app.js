document.addEventListener('DOMContentLoaded', () => {
    const newAnimalForm = document.querySelector('#new-animal-form');
    newAnimalForm.addEventListener('submit', handleNewAnimalSubmit)

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllButton);

});

const handleNewAnimalSubmit = function (event) {
    event.preventDefault();

    const animalListItem = createAnimalListItem(event.target);
    const animalList = document.querySelector('#animal-list');
    animalList.appendChild(animalListItem);

    event.target.reset();
};

const createAnimalListItem = function (form) {
    const animalListItem = document.createElement('li');
    animalListItem.classList.add('animal-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = form.species.value;
    animalListItem.appendChild(species);

    const continent = document.createElement('h4');
    continent.textContent = form.continent.value;
    animalListItem.appendChild(continent);

    return animalListItem;
};

const handleDeleteAllButton = function (event) {
    const animalList = document.querySelector('#animal-list')
    animalList.innerHTML = "";
};