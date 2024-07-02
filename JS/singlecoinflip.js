document.addEventListener('DOMContentLoaded', function() {
    const coin = document.getElementById('coin');
    const coin2 = document.getElementById('coin2');
    const flipBtn = document.getElementById('flip-btn');
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            coin2.style.display = 'block';
        } else {
            coin2.style.display = 'none';
        }
    });

    coin2.style.display = checkbox.checked ? 'block' : 'none';


    const images = {
        heads: 'images/coin-heads.png',  // Path to heads image
        tails: 'images/coin-tails.png'   // Path to tails image
    };

    flipBtn.addEventListener('click', () => {
        const result = Math.random() < 0.5 ? 'heads' : 'tails';
        const result2 = Math.random() < 0.5 ? 'heads' : 'tails';
        
        // Add a flipping animation
        coin.style.transform = 'rotateY(180deg)';
        coin2.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            coin.src = images[result];
            coin2.src = images[result2];
            coin.style.transform = 'rotateY(0deg)';
            coin2.style.transform = 'rotateY(0deg)';
        }, 500);
    });
});
