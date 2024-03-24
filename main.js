const p = document.querySelector('p');
const h2win = document.querySelector('#winpoints');
const h2tie = document.querySelector('#tiepoints');
const h2loss = document.querySelector('#losepoints');
const button1 = document.querySelector('#Rock');
const button2 = document.querySelector('#Paper');
const button3 = document.querySelector('#Scissors');
var win_points = 0;
var tie_points = 0;
var lose_points = 0;

h2win.textContent = "Wins: " + win_points;
h2tie.textContent = "Ties: " + tie_points;
h2loss.textContent = "Losses: " + lose_points;

button1.addEventListener('click',responseToClick1)
function responseToClick1() {
    var comp_pick = Math.floor(Math.random()*3);
        if(comp_pick == 0) {
            var comp_play = 'r';
        }
        else if (comp_pick == 1) {
            var comp_play = 'p';
        }
        else {
            var comp_play = 's';
        };
    if(comp_play == 'r') {
        tie_points = tie_points + 1;
        p.textContent = "It's a tie! You and the Computer picked both Rock.";
        h2tie.textContent = "Ties: " + tie_points;
    }
    else if (comp_play == 'p') {
        lose_points = lose_points + 1;
        p.textContent = 'You lose! The Computer picked Paper, which beats your Rock.';
        h2loss.textContent = "Losses: " + lose_points;
    }
    else {
        win_points = win_points + 1;
        p.textContent = "You win! You picked Rock, which beats the Computer's Scissors.";
        h2win.textContent = "Wins: " + win_points;
    };
};

button2.addEventListener('click',responseToClick2)
function responseToClick2() {
    var comp_pick = Math.floor(Math.random()*3);
        if(comp_pick == 0) {
            var comp_play = 'r';
        }
        else if (comp_pick == 1) {
            var comp_play = 'p';
        }
        else {
            var comp_play = 's';
        };
    if(comp_play == 'r') {
        win_points = win_points + 1;
        p.textContent = "You win! You picked Paper, which beats the Computer's Rock.";
        h2win.textContent = "Wins: " + win_points;
    }
    else if (comp_play == 'p') {
        tie_points = tie_points + 1;
        p.textContent = "It's a tie! You and the Computer picked both Paper.";
        h2tie.textContent = "Ties: " + tie_points;
    }
    else {
        lose_points = lose_points + 1;
        p.textContent = 'You lose! The Computer picked Scissors, which beats your Paper.';
        h2loss.textContent = "Losses: " + lose_points;
    };
};

button3.addEventListener('click',responseToClick3)
function responseToClick3() {
    var comp_pick = Math.floor(Math.random()*3);
        if(comp_pick == 0) {
            var comp_play = 'r';
        }
        else if (comp_pick == 1) {
            var comp_play = 'p';
        }
        else {
            var comp_play = 's';
        };
    if(comp_play == 'r') {
        lose_points = lose_points + 1;
        p.textContent = 'You lose! The Computer picked Rock, which beats your Scissors.';
        h2loss.textContent = "Losses: " + lose_points;
    }
    else if (comp_play == 'p') {
        win_points = win_points + 1;
        p.textContent = "You win! You picked Scissors, which beats the Computer's Paper.";
        h2win.textContent = "Wins: " + win_points;
    }
    else {
        tie_points = tie_points + 1;
        p.textContent = "It's a tie! You and the Computer picked both Scissors.";
        h2tie.textContent = "Ties: " + tie_points;
    };
};

