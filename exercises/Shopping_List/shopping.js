const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array to hold our state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    const name = e.currentTarget.item.value;
    // If it's empty, then don't submit it.
    if(!name) return;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    };
    // Push the items into our state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    // Clear the form
    e.target.reset();
    // fire off a custom event that will tell you that the items have been updated.
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
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

function mirrorToLocalStorage() {
    console.info('Saving items to localstorage');
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
    console.info(`Restoring from LS`);
    // Pull the items from LS
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();