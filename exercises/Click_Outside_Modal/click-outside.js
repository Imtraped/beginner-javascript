let cardButtons = document.querySelectorAll('.card button');
let modalOuter = document.querySelector('.modal-outer');
let modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    let button = event.currentTarget;
    let card = button.closest('.card');
    // Grab the image src
    let imgSrc = card.querySelector('img').src;
    let desc = card.dataset.description;
    let name = card.querySelector('h2').textContent;
    // populate the modal with the new info
    modalInner.innerHTML = `<img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>`;
    // Show the modal.
    modalOuter.classList.add('open')
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    let isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
        closeModal();
    }
});