const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("close-btn");
let navLinks = document.querySelectorAll("nav li a");


navLinks.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('open-nav');
  })
});

open.addEventListener('click', () => {
  nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
  nav.classList.remove('open-nav');
})
