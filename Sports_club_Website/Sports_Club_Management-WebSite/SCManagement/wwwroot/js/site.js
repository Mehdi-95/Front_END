// Set the initial theme based on localStorage or default to "light"
setTheme(localStorage.getItem("theme") || "light");

// Periodically check for theme changes
setInterval(() => {
    const dtrDataElements = document.getElementsByClassName("dtr-data");
    if (dtrDataElements.length > 0) {
        setTheme(localStorage.getItem("theme") || "light");
    }
}, 500);

// Prevent event propagation for dropdowns
document.getElementById("Dropdown").addEventListener("click", (event) => event.stopPropagation());
document.getElementById("Dropdown1").addEventListener("click", (event) => event.stopPropagation());

// Show a confirmation toast
function showConfirmedToast() {
    $("#confirmedToast").show();
}

// Handle window resize events
function handleResize() {
    const dtrDataElements = document.getElementsByClassName("dtr-data");
    const dtrTitleElements = document.getElementsByClassName("dtr-title");

    // Add "text-to-dark" class to visible elements
    Array.from(dtrDataElements).forEach((element) => element.classList.add("text-to-dark"));
    Array.from(dtrTitleElements).forEach((element) => element.classList.add("text-to-dark"));

    // Remove the resize event listener after handling
    window.removeEventListener("resize", handleResize);
}

// Add resize event listener
window.addEventListener("resize", handleResize);

// Toggle between dark and light themes
function darkThemeToggle(event) {
    const theme = event.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
    setTheme(theme);
}

// Apply the selected theme
function setTheme(theme) {
    const element = document.getElementById("navBar");
    const darkToggle = document.getElementById("darkToggle");
    const darkToggle1 = document.getElementById("darkToggle1");
    const texts = document.getElementsByClassName("text-to-dark");
    const brand = document.querySelector(".navbar-brand");
    const dropdowns = document.getElementsByClassName("dropdown-menu");
    const cards = document.getElementsByClassName("card");
    const bodies = document.getElementsByClassName("body");
    const logoText = document.getElementById("logoText");
    const logoText1 = document.getElementById("logoText1");
    const modals = document.getElementsByClassName("modal-content");
    const dlBgs = document.getElementsByClassName("dlBg");
    const noClubImg = document.getElementById("swapImage");
    const sidebar = document.getElementById("mySidebar");
    const calendarBG = document.getElementById("calendar-container");
    const eventCardBG = document.getElementById("event-card");
    const inputs = document.getElementsByClassName("form-control");
    const clabels = document.getElementsByClassName("control-label");
    const flabels = document.getElementsByClassName("form-label");
    const tables = document.getElementsByClassName("table");
    const textareas = document.getElementsByTagName("textarea");
    const datatablesInfo = document.getElementsByClassName("dataTables_info");
    const datatablesPagination = document.getElementsByClassName("dataTables_paginate");
    const datatablesPaginateBtn = document.getElementsByClassName("paginate_button");
    const tableWrappers = document.getElementsByClassName("dataTables_wrapper");
    const arrow = document.getElementById("arrowa");

    // Add "text-to-dark" class to dtr-data and dtr-title elements
    Array.from(document.getElementsByClassName("dtr-data")).forEach((el) => el.classList.add("text-to-dark"));
    Array.from(document.getElementsByClassName("dtr-title")).forEach((el) => el.classList.add("text-to-dark"));

    if (theme === "dark") {
        // Dark theme settings
        darkToggle.checked = true;
        darkToggle1.checked = true;
        element.classList.add("navbar-dark", "bg-dark");
        element.classList.remove("navbar-light", "bg-white");

        if (noClubImg) noClubImg.src = "../img/NoClubWhite.png";

        Array.from(dropdowns).forEach((dropdown) => dropdown.classList.add("bg-dark"));
        Array.from(tables).forEach((table) => table.classList.add("table-dark"));
        Array.from(datatablesInfo).forEach((info) => (info.style.color = "white"));
        Array.from(datatablesPagination).forEach((pagination) => (pagination.style.color = "white"));
        Array.from(datatablesPaginateBtn).forEach((btn) => (btn.style.color = "white"));

        Array.from(tableWrappers).forEach((wrapper) => {
            const labels = wrapper.querySelectorAll("label");
            const selects = wrapper.querySelectorAll("select");
            labels.forEach((label) => (label.style.color = "white"));
            selects.forEach((select) => (select.style.color = "white"));
        });

        Array.from(clabels).forEach((label) => (label.style.color = "white"));
        Array.from(flabels).forEach((label) => (label.style.color = "white"));
        Array.from(inputs).forEach((input) => {
            input.classList.add("bg-dark");
            input.style.color = "white";
        });
        Array.from(textareas).forEach((textarea) => {
            textarea.classList.add("bg-dark");
            textarea.style.color = "white";
        });

        Array.from(texts).forEach((text) => (text.style.color = "white"));
        brand.style.width = "158px";

        Array.from(cards).forEach((card) => (card.style.background = "#3d4245"));
        Array.from(bodies).forEach((body) => body.classList.add("bg-dark"));
        Array.from(modals).forEach((modal) => modal.classList.add("bg-dark"));

        logoText.style.fill = "white";
        if (logoText1) logoText1.style.fill = "white";
        if (arrow) arrow.style.color = "white";

        Array.from(dlBgs).forEach((dlBg) => (dlBg.style.background = "#1a1a1a"));
        if (sidebar) sidebar.classList.add("bg-dark");
        if (calendarBG) calendarBG.classList.add("bg-dark");
        if (eventCardBG) eventCardBG.classList.add("bg-dark");
    } else {
        // Light theme settings
        darkToggle.checked = false;
        darkToggle1.checked = false;
        element.classList.add("navbar-light", "bg-white");
        element.classList.remove("navbar-dark", "bg-dark");

        if (noClubImg) noClubImg.src = "../img/NoClubBlack.png";
        if (arrow) arrow.style.color = "black";

        Array.from(dropdowns).forEach((dropdown) => dropdown.classList.remove("bg-dark"));
        Array.from(texts).forEach((text) => (text.style.color = "black"));
        Array.from(datatablesInfo).forEach((info) => (info.style.color = "black"));
        Array.from(datatablesPagination).forEach((pagination) => (pagination.style.color = "black"));
        Array.from(datatablesPaginateBtn).forEach((btn) => (btn.style.color = "black"));

        Array.from(tableWrappers).forEach((wrapper) => {
            const labels = wrapper.querySelectorAll("label");
            const selects = wrapper.querySelectorAll("select");
            labels.forEach((label) => (label.style.color = "black"));
            selects.forEach((select) => (select.style.color = "black"));
        });

        Array.from(textareas).forEach((textarea) => {
            textarea.classList.remove("bg-dark");
            textarea.style.color = "black";
        });

        Array.from(clabels).forEach((label) => (label.style.color = "black"));
        Array.from(tables).forEach((table) => table.classList.remove("table-dark"));
        Array.from(flabels).forEach((label) => (label.style.color = "black"));
        Array.from(inputs).forEach((input) => {
            input.classList.remove("bg-dark");
            input.style.color = "black";
        });

        if (sidebar) sidebar.classList.remove("bg-dark");
        Array.from(cards).forEach((card) => (card.style.background = "#D9D9D9"));
        Array.from(bodies).forEach((body) => body.classList.remove("bg-dark"));
        Array.from(modals).forEach((modal) => modal.classList.remove("bg-dark"));
        Array.from(dlBgs).forEach((dlBg) => (dlBg.style.background = "whitesmoke"));

        logoText.style.fill = "black";
        if (logoText1) logoText1.style.fill = "black";
        if (calendarBG) calendarBG.classList.remove("bg-dark");
        if (eventCardBG) eventCardBG.classList.remove("bg-dark");
    }
}