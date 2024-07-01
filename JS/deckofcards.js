document.addEventListener('DOMContentLoaded', function() {
    const cardImage = document.getElementById('card-image');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const dealBtn = document.getElementById('deal-btn');

    let cards = [];
    let currentIndex = -1;

    function createDeck() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        suits.forEach(suit => {
            values.forEach(value => {
                cards.push({
                    value: value,
                    suit: suit,
                    imageUrl: `/images/${value}_of_${suit}.png`  // Path to card images
                });
            });
        });
    }

    function shuffleDeck() {
        cardImage.src = '/images/back_of_card.png';
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    function showCard() {
        if (currentIndex < cards.length) {
            cardImage.src = cards[currentIndex].imageUrl;
        } else {
            cardImage.src = '/images/back_of_card.png';  // Path to the back of the card image
        }
    }

    shuffleBtn.addEventListener('click', () => {
        shuffleDeck();
        currentIndex = -1;
        showCard();
    });

    dealBtn.addEventListener('click', () => {
        currentIndex++;
        console.log(currentIndex);
        if (currentIndex < cards.length) {
            showCard();
        } else {
            alert("No more cards in the deck!");
        }
    });

    createDeck();
    shuffleDeck();
    showCard();
});
