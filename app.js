document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const cardArray = [

        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.game')

const resultDisplay = document.querySelector('#score')
var cardsChosen = []
var cardChosenId = []
var cardsWon = []



// check for matches
function checkForMatch () {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("you found a match")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("sorry try again")
        resultDisplay.textContent = resultDisplay.textContent - 1
    }
    cardsChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    
    if (cardsWon.length == cards.length/2) {
        resultDisplay.textContent = "congratulations! you found them all"

    }
}



// flip your card

function flipCard() {  
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
        setTimeout(checkForMatch, 500)
    }
}


//create your board

function createBoard () {
    
    for (var i=0;i< cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard ();

})

