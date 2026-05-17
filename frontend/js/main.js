// Simple interaction example

document.addEventListener("DOMContentLoaded", () => {
    console.log("PoyshaGuni Landing Page Loaded");

    const buttons = document.querySelectorAll(".btn-primary");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Redirecting to signup...");
        });
    });
});