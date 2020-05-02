var suitSequence;
var turns = 1;
var drawnCard = {
    value: 0,
    suit: 0,
    color: 0,
    name: 0,
    url: 0,
    fullName: 0
};

var firstCard = {
    value: 0,
    suit: 0,
    color: 0,
    name: 0,
    url: 0,
    fullName: 0
};

var secondCard = {
    value: 0,
    suit: 0,
    color: 0,
    name: 0,
    url: 0,
    fullName: 0
};

var thirdCard = {
    value: 0,
    suit: 0,
    color: 0,
    name: 0,
    url: 0,
    fullName: 0
};

var discard = [];

function generateSuit() {
    suitSequence = Math.floor(Math.random() * 4) + 1;

    switch(suitSequence) {
        case 1:
            suit = '♥';
        break;
        case 2:
            suit = '♣';
        break;
        case 3:
            suit = '♠';
        break;
        default:
            suit = '♦';
        break;
        
    }

    return suit;
}

function suitColor(innerSuit) {

    var innerColor;

    if (innerSuit == '♦' || innerSuit == '♥') {
        innerColor = 'red';
    } else {
        innerColor = 'black';
    }

    return innerColor
}

function generateName(innerValue) {

    var innerName;

    if (innerValue === 1) {
        innerName = 'A';
    } else if (innerValue === 11) {
        innerName = 'J';
    } else if (innerValue === 12) {
        innerName = 'Q';
    } else if (innerValue === 13) {
        innerName = 'K';
    } else {
        innerName = innerValue;
    }
    
    return innerName;
}

function generateUrl(innerValue, innerSuit) {

    var innerUrl;

    if (innerSuit == '♥') {
        switch(innerValue){
            case 1:
                innerUrl = 'AH.png';
                break;
            case 2:
                innerUrl = '2H.png';
                break;
            case 3:
                innerUrl = '3H.png';
                break;
            case 4:
                innerUrl = '4H.png';
                break;
            case 5:
                innerUrl = '5H.png';
                break;
            case 6:
                innerUrl = '6H.png';
                break;
            case 7:
                innerUrl = '7H.png';
                break;
            case 8:
                innerUrl = '8H.png';
                break;
            case 9:
                innerUrl = '9H.png';
                break;
            case 10:
                innerUrl = '10H.png';
                break;
            case 11:
                innerUrl = 'JH.png';
                break;
            case 12:
                innerUrl = 'QH.png';
                break;
            default:
                innerUrl = 'KH.png';
                break;
        }
    } else if (innerSuit == '♣') {
        switch(innerValue){
            case 1:
                innerUrl = 'AC.png';
                break;
            case 2:
                innerUrl = '2C.png';
                break;
            case 3:
                innerUrl = '3C.png';
                break;
            case 4:
                innerUrl = '4C.png';
                break;
            case 5:
                innerUrl = '5C.png';
                break;
            case 6:
                innerUrl = '6C.png';
                break;
            case 7:
                innerUrl = '7C.png';
                break;
            case 8:
                innerUrl = '8C.png';
                break;
            case 9:
                innerUrl = '9C.png';
                break;
            case 10:
                innerUrl = '10C.png';
                break;
            case 11:
                innerUrl = 'JC.png';
                break;
            case 12:
                innerUrl = 'QC.png';
                break;
            default:
                innerUrl = 'KC.png';
                break;
            } 
    } else if (innerSuit == '♠') {
        switch(innerValue){
            case 1:
                innerUrl = 'AS.png';
                break;
            case 2:
                innerUrl = '2S.png';
                break;
            case 3:
                innerUrl = '3S.png';
                break;
            case 4:
                innerUrl = '4S.png';
                break;
            case 5:
                innerUrl = '5S.png';
                break;
            case 6:
                innerUrl = '6S.png';
                break;
            case 7:
                innerUrl = '7S.png';
                break;
            case 8:
                innerUrl = '8S.png';
                break;
            case 9:
                innerUrl = '9S.png';
                break;
            case 10:
                innerUrl = '10S.png';
                break;
            case 11:
                innerUrl = 'JS.png';
                break;
            case 12:
                innerUrl = 'QS.png';
                break;
            default:
                innerUrl = 'KS.png';
                break;
            }
    } else {
        switch(innerValue){
            case 1:
                innerUrl = 'AD.png';
                break;
            case 2:
                innerUrl = '2D.png';
                break;
            case 3:
                innerUrl = '3D.png';
                break;
            case 4:
                innerUrl = '4D.png';
                break;
            case 5:
                innerUrl = '5D.png';
                break;
            case 6:
                innerUrl = '6D.png';
                break;
            case 7:
                innerUrl = '7D.png';
                break;
            case 8:
                innerUrl = '8D.png';
                break;
            case 9:
                innerUrl = '9D.png';
                break;
            case 10:
                innerUrl = '10D.png';
                break;
            case 11:
                innerUrl = 'JD.png';
                break;
            case 12:
                innerUrl = 'QD.png';
                break;
            default:
                innerUrl = 'KD.png';
                break;
        }
    }

    return innerUrl;

}

function drawCard() {
    
    do {
    drawnCard.value = Math.floor(Math.random() * 13) + 1;
    drawnCard.suit = generateSuit();
    drawnCard.color = suitColor(drawnCard.suit);
    drawnCard.name = generateName(drawnCard.value);
    drawnCard.url = generateUrl(drawnCard.value, drawnCard.suit);
    drawnCard.fullName = drawnCard.name + drawnCard.suit
    }
    while(discard.indexOf(drawnCard.fullName) !== -1);

    if (drawnCard.name == 'A') {
        drawnCard.value = 14;
    } else {
        console.log('Love yourself.');
    }
    
}

function redOrBlack(input) {

    var winCondition;
    
    if (input === 1) {
        if (drawnCard.color == 'red') {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    } else if (input === 2) {
        if (drawnCard.color == 'black') {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    }

    return winCondition;
}

function higherOrLower(input) {

    var winCondition;
    
    if (input === 1) {
        if (drawnCard.value > firstCard.value) {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    } else if (input === 2) {
        if (drawnCard.value < firstCard.value) {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    }

    return winCondition;
}

function insideOrOutside(input) {
    
    var winCondition;

    if (firstCard.value > secondCard.value) {
        if (input === 1) {
            if (drawnCard.value < firstCard.value && drawnCard.value > secondCard.value) {
                winCondition = 'greenlight.png';
            } else {
                winCondition = 'redlight.png';
            }
        } else {
            if (drawnCard.value > firstCard.value || drawnCard.value < secondCard.value) {
                winCondition = 'greenlight.png';
            } else {
                winCondition = 'redlight.png';
            }
        }
    } else {
        if (input === 1) {
            if (drawnCard.value > firstCard.value && drawnCard.value < secondCard.value) {
                winCondition = 'greenlight.png';
            } else {
                winCondition = 'redlight.png';
            }
        } else {
            if (drawnCard.value < firstCard.value || drawnCard.value > secondCard.value) {
                winCondition = 'greenlight.png';
            } else {
                winCondition = 'redlight.png';
            }
        }
    }

    return winCondition;
    
}

function guessSuit(input) {
    
    var winCondition;

    if (input === 1) {
        if (drawnCard.suit == '♣') {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    } else if (input === 2) {
        if (drawnCard.suit == '♦') {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    } else if (input === 3) {
        if (drawnCard.suit == '♠') {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    } else {
        if (drawnCard.suit == '♥') {
            winCondition = 'greenlight.png';
        } else {
            winCondition = 'redlight.png';
        }
    }

    return winCondition;

}

function newGame() {
    location.reload();
}

function flipCard(input) {

    var innerInput = input;
    var outcome;

    drawCard();

    if (turns === 1) {
        
        document.getElementById('cardOne').src = drawnCard.url;
        outcome = redOrBlack(innerInput);
        document.getElementById('roundOne').src = outcome;

        discard.push(drawnCard.fullName);

        returnedFirstCard = Object.assign(firstCard, drawnCard);
        turns++;

        document.getElementById('redOrBlack').className = 'hiddenButton';
        document.getElementById('higherOrLower').className = 'buttonContainer';

    } else if (turns === 2) {

        document.getElementById('cardTwo').src = drawnCard.url;
        outcome = higherOrLower(innerInput);
        document.getElementById('roundTwo').src = outcome;

        discard.push(drawnCard.fullName);

        returnedSecondCard = Object.assign(secondCard, drawnCard);
        turns++;

        document.getElementById('higherOrLower').className = 'hiddenButton';
        document.getElementById('insideOrOutside').className = 'buttonContainer';

    } else if (turns === 3) {

        document.getElementById('cardThree').src = drawnCard.url;
        outcome = insideOrOutside(innerInput);
        document.getElementById('roundThree').src = outcome;

        discard.push(drawnCard.fullName);

        returnedThirdCard = Object.assign(thirdCard, drawnCard);
        turns++;

        document.getElementById('insideOrOutside').className = 'hiddenButton';
        document.getElementById('guessSuit').className = 'buttonContainer';

    } else {
        document.getElementById('cardFour').src = drawnCard.url;
        outcome = guessSuit(innerInput);
        document.getElementById('roundFour').src = outcome;

        document.getElementById('guessSuit').className = 'hiddenButton';
        document.getElementById('newGame').className = 'buttonContainer';

    }

}