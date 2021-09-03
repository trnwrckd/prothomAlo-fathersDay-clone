const navBar = document.getElementById("navBar");
// const navBar = $("#navBar");


window.addEventListener("scroll", function () {
    if (window.scrollY > 90) {
        // navBar.classList.remove("fixed-top");
        navBar.classList.add("animate");
    }
    else {
        navBar.classList.remove("animate");
        navBar.classList.add("fixed-top");
    }
})