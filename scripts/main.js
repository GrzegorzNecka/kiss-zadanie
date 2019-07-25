"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const menuBbtn = document.querySelector("button.menu"),
        nav = document.querySelector("section.nav"),
        closeBtn = document.querySelector("button.close"),
        media = window.matchMedia("all and (min-width: 960px)");

    function closeNav() {
        nav.classList.remove("active");
        menuBbtn.classList.remove("deactivate");
    }


    menuBbtn.addEventListener("click", e => {
        e.stopPropagation();
        nav.classList.toggle("active");
        e.currentTarget.classList.toggle("deactivate");
    })

    closeBtn.addEventListener("click", closeNav);
    document.body.addEventListener("click", closeNav);

    nav.addEventListener("click", e => {
        e.stopPropagation();
    });

    media.addListener((m) => {
        if (nav.classList.contains("active") && m.matches) {
            closeNav();
        }
    });

});