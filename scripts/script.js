"use strict";

$("#dark-mode-toggle").click(() => {
    // todo: find out if there is a better way to do this.
    const table = document.getElementById("table");
    // const header = document.getElementById("header");
    // const toggle = document.getElementById("dark-mode-toggle");
    // const contact = document.getElementById("contact");
    const body = document.body;

    if (table.classList.contains("table-dark")) {
        table.classList.remove("table-dark");
        header.classList.remove("dark");
        // toggle.classList.remove("dark");
        // contact.classList.remove("dark");
        body.classList.remove("dark");
        $('#contact h5').children('a').css('color', '#212529');
    } else {
        body.classList.add("dark");
        setTimeout(() => {
            table.classList.add("table-dark");
            // header.classList.add("dark");
            // toggle.classList.add("dark");
            // contact.classList.add('dark');
            $('#contact h5').children('a').css('color', '#fff');
        }, 60);
    }
})