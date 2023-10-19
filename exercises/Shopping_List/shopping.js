const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold our state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted the item, too bad it\'s useless.');
    console.log(e.currentTarget.item);
    const name = e.currentTarget.item.value;
    // If it's empty, then don't submit it.
    if(!name) return;
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };
    // Push the items into our state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    // Clear the form
    e.target.reset();
    displayItems();
};

function displayItems() {
    const html = items.map(item => `<li class="shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}">&times;</button>
    </li>`)
    .join('');
    list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);