const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".ri-close-line");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  cross.classList.add("active");
  black.classList.add("active");
});

cross.addEventListener("click", () => {
  sidebar.classList.remove("active");
  cross.classList.remove("active");
  black.classList.remove("active");
});
