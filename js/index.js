const menuBar = document.querySelector(".menu-bar");
const navBarItem = document.querySelector(".navbar-item");
const responsiveNav = document.querySelector(".responsive-nav");
const responsiveCloseBtn = document.querySelector(".res-close-btn");
const responsiveSandWich = document.querySelector(".responsive-sandwich");
const resAboutLink = document.querySelector(".res-about");
const resServiceLink = document.querySelector(".res-service");
const resProjectLink = document.querySelector(".res-project");
const resTestimonialLink = document.querySelector(".res-testimonial");
const resContactLink = document.querySelector(".res-contact");

menuBar.addEventListener("click", function () {
  responsiveNav.style.animation = "res-nav-appear 1s forwards 1";
  responsiveSandWich.style.animation = "res-nav-appear 1s forwards 1";
  navBarItem.style.opacity = "0";
  responsiveCloseBtn.style.animation = "close-btn 0.3s forwards 1 1s";
});

responsiveCloseBtn.addEventListener("click", function () {
  responsiveNav.style.animation = "res-nav-disappear 1s forwards 1";
  responsiveSandWich.style.animation = "res-nav-disappear 1s forwards 1";
  navBarItem.style.opacity = "1";
  responsiveCloseBtn.style.animation = "close-btn-normal 0.3s forwards 1";
});

responsiveSandWich.addEventListener("click", function () {
  responsiveNav.style.animation = "res-nav-disappear 1s forwards 1";
  responsiveSandWich.style.animation = "res-nav-disappear 1s forwards 1";
  responsiveCloseBtn.style.animation = "close-btn-normal 0.3s forwards 1";
  navBarItem.style.opacity = "1";
});

function resLinkClick(linkName) {
  linkName.addEventListener("click", function () {
    responsiveNav.style.animation = "res-nav-disappear 0.5s forwards 1";
    responsiveSandWich.style.animation = "res-nav-disappear 0.5s forwards 1";
    navBarItem.style.opacity = "1";
  });
}

resLinkClick(resAboutLink);
resLinkClick(resServiceLink);
resLinkClick(resProjectLink);
resLinkClick(resTestimonialLink);
resLinkClick(resContactLink);
