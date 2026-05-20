document.addEventListener('DOMContentLoaded', () => {
    // Quantity controls for order page
    const minusBtns = document.querySelectorAll('.qty-minus');
    const plusBtns = document.querySelectorAll('.qty-plus');
    
    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.nextElementSibling;
            if(input && input.value > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });
    });

    plusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.previousElementSibling;
            if(input) {
                input.value = parseInt(input.value) + 1;
            }
        });
    });

    // Method selection toggles
    const methodBoxes = document.querySelectorAll('.method-box');
    methodBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const group = box.dataset.group;
            document.querySelectorAll(`.method-box[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
            box.classList.add('active');
        });
    });
});
