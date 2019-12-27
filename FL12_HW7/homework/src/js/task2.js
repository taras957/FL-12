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
    console.log(random);


    while (counter > 0) {
        console.log("total money " + userPrize);
        console.log('maxTotalPrize' + totlaMaxPrize);


        // counter === 2 ? maxPrize / 2 : counter === 1 ? maxPrize / 4 : maxPrize
        --counter
        let userBet = +prompt(`Choose roulette pocket number from 0 to ${initialRange - 1}\nAttempts left: ${counter+1}\nTotal prize: ${ userPrize} $\nPossible prize on current attempt: ${maxPrize} $\nEnter a number of pocket`);


        if (userBet === random && counter === 2) {
            console.log('counter ' + counter);
            userPrize += maxPrize;
            let continueGame = confirm(`Congratulation, you won!   Your prize is: 
            ${userPrize} $. Do you want to continue?`);
            if (!continueGame) {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`)
                let playAgain = confirm('Do you want to play again?');
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
                continue;
            }
        } else if (userBet === random && counter === 1) {
            console.log('counter ' + counter);
            userPrize += maxPrize;
            continueGame = (`Congratulation, you won!   Your prize is: ${userPrize} $. Do you want to continue?`);
            if (!continueGame) {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`)
                playAgain = confirm('Do you want to play again?')
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
                maxPrize = totlaMaxPrize
                counter = 3;
                continue;
            }
        } else if (userBet === random && counter === 0) {
            console.log('counter ' + counter);
            userPrize += maxPrize;
            continueGame = (`Congratulation, you won!   Your prize is: ${userPrize} $. Do you want to continue?`);
            if (!continueGame) {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`)
                playAgain = confirm('Do you want to play again?')
                if (playAgain) {
                    initialRange = 9;
                    totlaMaxPrize = 100;
                    maxPrize = totlaMaxPrize;
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
                continue;
            }
        } else if (!userBet || userBet !== random) {
            maxPrize /= 2;
            continue;
        } else {
            alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
            playAgain = confirm('Do you want to play again?');
            if (!playAgain) {
                break;
            } else {
                initialRange = 9;
                userPrize = 0;
                totlaMaxPrize = 100;
                counter = 3;
                continue;
            }
        }
    }
}