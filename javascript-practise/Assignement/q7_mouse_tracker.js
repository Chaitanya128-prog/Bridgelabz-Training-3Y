document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const coords = document.getElementById('coords');

    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        coords.innerText = `ClientX: ${e.clientX}, ClientY: ${e.clientY} | Box Relative: X: ${x}, Y: ${y}`;
    });

    box.addEventListener('dblclick', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${x - 5}px`;
        dot.style.top = `${y - 5}px`;
        box.appendChild(dot);
    });
});