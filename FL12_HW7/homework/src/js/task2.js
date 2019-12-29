// Your code goes here
let gameStart = confirm('Do you want to play a game?');
if (!gameStart) {
  alert('You did not become a billionaire, but can.');
} else if (gameStart) {
  let counter = 3;
  let userPrize = 0;
  let initialRange = 9;
  let totlaMaxPrize = 100;
  let maxPrize = totlaMaxPrize;
  let random = Math.floor(Math.random() * initialRange);
  let playAgain = true;

  while (counter >= 0) {
    if (counter === 0) {
      alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
      playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        initialRange = 9;
        userPrize = 0;
        totlaMaxPrize = 100;
        counter = 3;
      } else if (!playAgain) {
        break;
      }
    }

    --counter;
    let userBet = +prompt(`Choose roulette pocket number
      from 0 to ${initialRange - 1}
      Attempts left: ${counter + 1}
      Total prize: ${userPrize} $
      Possible prize on current attempt: ${maxPrize} $
      Enter a number of pocket`);

    if (
      userBet === random && counter === 2 ||
      userBet === random && counter === 1 ||
      userBet === random && counter === 0
    ) {
      userPrize += maxPrize;
      let continueGame = confirm(`Congratulation, you won!   Your prize is: 
            ${userPrize} $. Do you want to continue?`);
      if (!continueGame) {
        alert(
          `Thank you for your participation. Your prize is: ${userPrize} $`
        );
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
          initialRange = 9;
          totlaMaxPrize = 100;
          userPrize = 0;
          counter = 3;
          continue;
        } else {
          break;
        }
      } else if (continueGame) {
        initialRange += 4;
        totlaMaxPrize *= 2;
        maxPrize = totlaMaxPrize;
        counter = 3;
        random = Math.floor(Math.random() * initialRange);
        continue;
      }
    } else if (!userBet || userBet !== random) {
      maxPrize /= 2;
      continue;
    }
  }
}