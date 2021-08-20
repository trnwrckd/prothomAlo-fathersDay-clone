const navBar = $("#navBar");
// const navPosition = navBar.offsetHeight;
// // console.log(navPosition)


// $(window).scroll(function () {
//     if ($(window).scrollTop()) {

//     }

// });

window.addEventListener("scroll", function () {
    navBar.hide().slideDown("slow", function () {
        // navBar.toggleClass("fixed-top", window.scrollY > 0);
    })
})