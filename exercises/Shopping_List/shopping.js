const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold our state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted the item, too bad it\'s useless.');
    console.log(e.currentTarget);
    const name = e.currentTarget.value;
    console.log(name);
};

shoppingForm.addEventListener('submit', handleSubmit);