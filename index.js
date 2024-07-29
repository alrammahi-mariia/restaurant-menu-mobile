import { menuItems } from "./data.js";
const menuItemsContainer = document.querySelector('.menu-items-container');
const orderContainer = document.querySelector('.order-container');

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



document.addEventListener('click', function(e){
    const itemId = parseInt(e.target.dataset.add);
    if(e.target.dataset.add){
    orderContainer.style.display = 'flex';
    addToOrder(itemId);
    }
});

function addToOrder(id){
    let orderItemsList = [];
    let orderItemsHtml = ``;
   menuItems.map(function(item){
    if (item.id === id)
    orderItemsList.push(item);
   })
  
    orderItemsList.map(orderItem => {
    orderItemsHtml += `<div class="order-item">
    <div class="item-name">${orderItem.title} <span class="remove">remove</span></div>
    <div class="item-price">$${orderItem.price}</div>
</div>`


 });
 return document.getElementById('items-container').innerHTML = orderItemsHtml;
 
};




renderMenuItems(menuItems);

