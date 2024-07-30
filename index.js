import { menuItems } from "./data.js";
const menuItemsContainer = document.querySelector('.menu-items-container');
const orderContainer = document.querySelector('.order-container');
const itemPrice = document.querySelector('.item-price');
const completeOrderBtn = document.querySelector('.complete-order');
const modal = document.querySelector('.modal');
let orderItemsList = [];


function renderMenuItems(items){
    return menuItemsContainer.innerHTML = items.map(item => {
       return `
       <div class="food-item"
            <div class="item-content">
                <div class="item-container">
                        <img src="${item.image}" alt = "${item.title}" class="food-item-image">
                        <div class="item-details">
                            <h2 class="food-item-title" id="food-item-title">${item.title}</h2>
                            <p class="food-item-description" id="food-item-description">${item.description}</p>
                            <p class="food-item-price" id="food-item-price">$${item.price}</p>
                        </div>
                </div>
                <div class="add-btn">          
                    <button class="add-btn" id="add-btn" data-add="${item.id}">+</button>
                </div>
            </div>
        </div>`
    }).join("");
}

function renderOrderItems(){
    let orderItemsHtml = "";
    orderItemsList.forEach(orderItem => {
        orderItemsHtml += `<div class="order-item">
        <div class="item-name">${orderItem.title} <span class="remove" data-remove="${orderItem.id}">remove</span></div>
        <div class="item-price">$${orderItem.price}</div>
    </div>`
    })
    document.getElementById('items-container').innerHTML = orderItemsHtml;
}


document.addEventListener('click', function(e){
    if(e.target.dataset.add){
    const itemId = parseInt(e.target.dataset.add);
    orderContainer.style.display = 'flex';
    addToOrder(itemId);
    updateTotalPrice(orderItemsList);
    }
    else if(e.target.classList.contains('remove')){
        const itemId = parseInt(e.target.dataset.remove);
        removeFromOrder(itemId);
        renderOrderItems();
        updateTotalPrice(orderItemsList);
    }
});

completeOrderBtn.addEventListener('click', () => {
    modal.style.display = 'flex';

})

function updateTotalPrice(itemsArray){
    const totalPrice = itemsArray.reduce(function(total, current){
       return total + current.price;
    }, 0)

    return itemPrice.textContent = `$${totalPrice}`;
}

function addToOrder(id){
    const targetItem = menuItems.find(item => item.id === id);
    if(targetItem){
        orderItemsList.push(targetItem);
        renderOrderItems();
 }}

 function removeFromOrder(id){
    orderItemsList = orderItemsList.filter(item => item.id !== id);
 }

 


renderMenuItems(menuItems);

