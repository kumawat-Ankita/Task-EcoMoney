const dropdownButton = document.getElementById('dropdownButton');
const sideButton = document.getElementById('sideButton');
const modalButton = document.getElementById('modalButton');

const dropdownMenu = document.getElementById('dropdownMenu');
const sideMenu = document.getElementById('sideMenu');
const modalOverlay = document.getElementById('modalOverlay');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '' ? 'flex' : 'none';
    sideMenu.style.right = '-250px';
    modalOverlay.style.display = 'none';
});
sideButton.addEventListener('click', () => {
    sideMenu.style.right = sideMenu.style.right === '0px' ? '-250px' : '0px';
    dropdownMenu.style.display = 'none';
    modalOverlay.style.display = 'none';
});
modalButton.addEventListener('click', () => {
    modalOverlay.style.display = modalOverlay.style.display === 'flex' ? 'none' : 'flex';
    dropdownMenu.style.display = 'none';
    sideMenu.style.right = '-260px';
});
window.addEventListener('click', (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
    if (!sideButton.contains(e.target) && !sideMenu.contains(e.target)) {
        sideMenu.style.right = '-250px';
    }
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

