function toggleMenu() {
    const menu = document.queryselector(".menu-links");
    const icon = document.queryselector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}