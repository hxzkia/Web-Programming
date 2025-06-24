const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})