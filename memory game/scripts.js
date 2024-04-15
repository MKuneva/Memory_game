const cards = document.querySelectorAll('.memory-card');

let matchedCards = 0;
let hasFlippedCard = false;
let lockCards = false;
let firstCard, secondCard;
let timer;


function flipCard() {
  if (lockCards) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  matchedCards += 2;
  resetBoard();
  if (matchedCards === 12) {
    setTimeout(() => {
      YouWon();
    }, 500); 
  }
}

function unflipCards() {
  lockCards = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

function ShowGame() {
  var board = document.querySelector('.memory-game');
  board.style.display = 'flex';
  var welcome = document.getElementById('welcome');
  welcome.style.display = 'none';
  document.body.classList.remove('body');
  startTimer();
}

function startTimer() {
  let timeLeft = 60;
  var secondsLeft = document.getElementById('timer');

  timer = setInterval(() => {
    timeLeft--;
    secondsLeft.innerHTML = `Time Left: ${timeLeft} seconds`; // Time update

    if (timeLeft === 0) {
      gameOver();
    }
  }, 1000);
}

function gameOver() {
  clearInterval(timer); // Timer stops
  OpenModal(lostModal)
}

function YouWon() {
  clearInterval(timer); // Timer stops
  OpenModal(wonModal)
}



// Get the modal
var modals=document.getElementsByClassName("modal")
var wonModal = document.getElementById("wonModal");
var lostModal = document.getElementById("lostModal");

//opens modal with parameter
function OpenModal(modal){
  modal.style.display = "block";
}
//closes modal
function CloseModal(modal){
  modal.style.display = "none";
}

function resetGame() {
  CloseModal(wonModal);
  CloseModal(lostModal);
  (function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

  matchedCards = 0;
  hasFlippedCard = false;
  lockCards = false;
  firstCard = null;
  secondCard = null;

  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });

  clearInterval(timer);
  startTimer();
}







