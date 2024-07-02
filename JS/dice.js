document.addEventListener('DOMContentLoaded', function() {
    const die = document.getElementById('die');
    const die2 = document.getElementById('die2');
    const rollBtn = document.getElementById('roll-btn');
    const checkbox = document.getElementById('checkbox');

    die2.style.display = checkbox.checked ? 'block' : 'none';


    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            die2.style.display = 'block';
        } else {
            die2.style.display = 'none';
        }
    });

    die2.style.display = checkbox.checked ? 'block' : 'none';

    rollBtn.addEventListener('click', () => {
        const result = Math.floor(Math.random() * 6) + 1;
        const result2 = Math.floor(Math.random() * 6) + 1;
        console.log(`${result} + ${result2}`);
        // Add a flipping animation
        die.style.transform = 'rotateY(180deg)';
        die2.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            die.src = `images/${result}-die.png`;
            die2.src = `images/${result2}-die.png`;
            die.style.transform = 'rotateY(0deg)';
            die2.style.transform = 'rotateY(0deg)';
        }, 500);
    });
});
