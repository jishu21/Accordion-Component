
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        header.classList.toggle('active');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = '0 15px';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = '15px';
        }
    });
});