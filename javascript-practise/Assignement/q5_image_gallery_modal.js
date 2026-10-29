document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBox = document.getElementById('modalBox');
    const modalImg = document.getElementById('modalImg');
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalOverlay.style.display = 'flex';
        });
    });

    // Close modal when clicking outside modal-box
    modalOverlay.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    // Use stopPropagation so clicking inside modalBox does not close it
    modalBox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});