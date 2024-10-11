const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const radio = box.querySelector('input[type="radio"]');
    const options = box.querySelector('.options');
    const bestRate = box.querySelector('.best-rate');

    box.addEventListener('click', () => {
        boxes.forEach(b => b.querySelector('.options').style.display = 'none');
        options.style.display = 'block';
        radio.checked = true;
    });

    box.onmouseover = () => bestRate.style.display = 'block';
    box.onmouseout = () => !radio.checked && (bestRate.style.display = 'none');
});

