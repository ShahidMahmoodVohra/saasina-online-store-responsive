
// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
    
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');

// }


// mobile/menu / sidebar
let sidebar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar-opened");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-opened");
})
// cart sidebar
let cartSidebar = document.querySelector(".cart-sidebar");

  let cartOpenBtn = document.querySelector("#cart-btn");
 
  let cartCloseBtn = document.querySelector("#cart-close");

  cartOpenBtn.addEventListener("click", () => {
    cartSidebar.classList.add("opened");
  });
  cartCloseBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("opened");
  });
  // 
  let searchOpenBtn = document.querySelector("#search-btn");
  let searchForm1 = document.querySelector(".search-form");
  searchOpenBtn.addEventListener("click", () => {
    searchForm1.classList.toggle("opened");
  });





