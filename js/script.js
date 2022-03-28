// Menu Toggle
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

// add hovred classin selected list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((ele) => {
    ele.classList.remove("hovered");
    this.classList.add("hovered");
  });
}
list.forEach((e) => {
  e.addEventListener("mouseover", activeLink);
});
