const navLine = document.getElementById("nav-line");
const navList = document.getElementById("nav-list");
const navBg = document.getElementById("header");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");

//Menambahkan fungsi ketika mengklik (Navigasi di media screen dengan lebar <= 576px)
navLine.addEventListener("click", () => {
    navList.classList.toggle("hidden");
    navBg.classList.toggle("background-nav");
    navLine.classList.toggle("reline");
});

//Menambahkan fungsi popup alert jika mengklik daftar menu
menu1.addEventListener("click", () => {
    alert("Coming soon");
});
menu2.addEventListener("click", () => {
    alert("Coming soon!");
});
menu3.addEventListener("click", () => {
    alert("Coming soon!!");
});
menu4.addEventListener("click", () => {
    alert("Coming soon!!!");
});
