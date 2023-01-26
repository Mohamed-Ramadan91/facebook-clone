// Contact Me Section
let creator = document.querySelector("footer .creator span");
let contactMe = document.querySelector(".contact-me");
let closee = document.querySelector(".contact-me .card .ri-close-fill");
creator.onclick = function (event) {
  contactMe.classList.add("show");
};
closee.onclick = function (event) {
  contactMe.classList.remove("show");
};
