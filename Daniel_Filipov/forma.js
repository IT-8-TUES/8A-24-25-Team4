document.addEventListener('DOMContentLoaded', function () {
    const floatingButton = document.getElementById('floating-button');
    const modal = document.getElementById('form-modal');
    const closeButton = document.querySelector('.close-button');

    floatingButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
