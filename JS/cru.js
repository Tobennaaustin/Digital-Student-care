const closeNav = document.getElementById('closeNav');
const newsletter = document.getElementById('newsletter');

closeNav.addEventListener('click', () => {
    newsletter.style.display = "none";
});