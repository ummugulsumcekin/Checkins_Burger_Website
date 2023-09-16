const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

function alertBtn() {
  alert("You can contact us for any questions, suggestions, or complaints that come to your mind.");
}


window.addEventListener('scroll', toggleScrollToTopButton);

// Sayfanın en üstüne gitmek için kullanılan fonksiyon
function scrollToTop() {
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera
    document.body.scrollTop = 0; // Diğer tarayıcılar için
}

// Scroll durumuna göre düğmeyi gizlemek veya göstermeye yardımcı 
function toggleScrollToTopButton() {
    var button = document.getElementById('scrollToTopButton');
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

