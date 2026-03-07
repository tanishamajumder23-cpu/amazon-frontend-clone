// ================= HEADER SLIDER ================= //
// This code controls the homepage image slider. 

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
let n = 0;

// Function to show one slide at a time
function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    if (imgs[n]) {
        imgs[n].style.display = 'block';
    }
}

// Run slider only if elements exist on the current page
if (imgs.length > 0 && prev_btn && next_btn) {
    changeSlide();
    
    prev_btn.addEventListener('click', (e) => {
        e.preventDefault(); // prevents screen from jumping to top
        if (n > 0) {
            n--;
        } else {
            n = imgs.length - 1;
        }
        changeSlide();
    });

    next_btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (n < imgs.length - 1) {
            n++;
        } else {
            n = 0;
        }
        changeSlide();
    });
}

// ================= ADD TO CART SYSTEM ================= //
const cartCount = document.querySelector('.cart-count');
let cartItems = 0;
const addCartButtons = document.querySelectorAll('.add-cart');

for (let i = 0; i < addCartButtons.length; i++) {
    addCartButtons[i].addEventListener('click', () => {
        cartItems++;
        if (cartCount) {
            cartCount.innerText = cartItems;
        }
    });
}