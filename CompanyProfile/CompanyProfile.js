// Get all the card__article elements
const cardArticles = document.querySelectorAll('.klima-imge1');

// Adding a hover event listener to each card__article
cardArticles.forEach(cardArticle => {
    const cardData = cardArticle.querySelector('.klimaText-Box');

    cardArticle.addEventListener('mouseenter', () => {
        cardData.style.display = 'block';
    });

    cardArticle.addEventListener('mouseleave', () => {
        cardData.style.display = 'none';
    });
});

const cardArticle1 = document.querySelector('.klima-imge2')

// Adding a hover event listener to each card__article
cardArticles.forEach(cardArticles => {
    const cardData1 = cardArticle1.querySelector('.klimaText-Box');

    cardArticle1.addEventListener('mouseenter', () => {
        cardData1.style.display = 'block';
    });

    cardArticle1.addEventListener('mouseleave', () => {
        cardData1.style.display = 'none';
    });
});

const cardArticle2 = document.querySelector('.klima-imge3')

// Adding a hover event listener to each card__article
cardArticles.forEach(cardArticles => {
    const cardData2 = cardArticle2.querySelector('.klimaText-Box');

    cardArticle2.addEventListener('mouseenter', () => {
        cardData2.style.display = 'block';
    });

    cardArticle2.addEventListener('mouseleave', () => {
        cardData2.style.display = 'none';
    });
});



const cardArticle3 = document.querySelector('.klima-imge4')

// Adding a hover event listener to each card__article
cardArticles.forEach(cardArticles => {
    const cardData3 = cardArticle3.querySelector('.klimaText-Box');

    cardArticle3.addEventListener('mouseenter', () => {
        cardData3.style.display = 'block';
    });

    cardArticle3.addEventListener('mouseleave', () => {
        cardData3.style.display = 'none';
    });
});


const cardArticle4 = document.querySelector('.klima-imge5')

// Adding a hover event listener to each card__article
cardArticles.forEach(cardArticles => {
    const cardData4 = cardArticle4.querySelector('.klimaText-Box');

    cardArticle4.addEventListener('mouseenter', () => {
        cardData4.style.display = 'block';
    });

    cardArticle4.addEventListener('mouseleave', () => {
        cardData4.style.display = 'none';
    });
});