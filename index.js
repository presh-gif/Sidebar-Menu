const bars = document.querySelector(".fa-bars")
const sidebar = document.querySelector(".sidebar")
const closingButton = document.querySelector(".fa-square-xmark")

bars.addEventListener("click", ()=>{
    // console.log("I got clicked");
    sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar");
});