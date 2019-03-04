$(document).ready(function () {
    var Random = Math.floor(Math.random() * 981 + 19)
    // Selects beginning random number (between 19-1000) to be shown we are trying to get to

    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html 

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    // Setting up random numbers (1-12) for each jewel

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //  Our variables for tallies

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }
    //resets the game

    //adds the wins to the userTotal
    function userWins() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //adds the wins to the userTotal

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
    //adds the losses to the userTotal


    $('#one').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //(Above) sets up click listener for jewel one //(Below) sets win/lose conditions with if/else statements
        if (userTotal === Random) {
            userWins();
        } else if (userTotal > Random) {
            loser();
        }
    })
    $('#two').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //(Above) sets up click listener for jewel two //(Below) sets win/lose conditions with if/else statements
        if (userTotal === Random) {
            userWins();
        } else if (userTotal > Random) {
            loser();
        }
    })
    $('#three').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //(Above) sets up click listener for jewel three //(Below) sets win/lose conditions with if/else
        if (userTotal === Random) {
            userWins();
        } else if (userTotal > Random) {
            loser();
        }
    })
    $('#four').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //(Above) sets up click listener for jewel four //(Below) sets win/lose conditions with if/else
        if (userTotal === Random) {
            userWins();
        } else if (userTotal > Random) {
            loser();
        }
    });
});

