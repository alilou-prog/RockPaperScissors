function get_computer_choice() {
    p = Math.random()
    if (p < 0.33)
        return "rock"
    else if (p < 0.66)
        return "paper"
    else
        return "scissors"
}

function get_human_choice() {
    return prompt("Enter rock | paper | scissors")
}


let human_score = 0, computer_score = 0
const human_win_msg = "You win this round"
const computer_win_msg = "You lose this round"
const draw_msg = "Draw this round"


function play_round(human_choice, computer_choice) {
    human_choice = human_choice.toLowerCase();
    computer_choice = computer_choice.toLowerCase();
    if (human_choice === "rock") {
        if (computer_choice === "rock") {
            return draw_msg;
        }
        else if (computer_choice === "paper") {
            computer_score += 1;
            return computer_win_msg
        }
        else {
            human_score += 1;
            return human_win_msg;
        }
    }
    else if (human_choice === "paper") {
        if (computer_choice === "rock") {
            human_score += 1;
            return human_win_msg;

        }
        else if (computer_choice === "paper") {
            return draw_msg;
        }
        else {
            computer_score += 1;
            return computer_win_msg
        }
    }
    else if (human_choice === "scissors") {
        if (computer_choice === "rock") {
            computer_score += 1;
            return computer_win_msg;
        }
        else if (computer_choice === "paper") {

            human_score += 1;
            return human_win_msg;
        }
        else {
            return draw_msg;
        }
    }
}

const buttons = document.querySelector(".buttons")
buttons.addEventListener("click", (e) => {
    display_result(play_round(e.target.textContent, get_computer_choice()));
    display_score();
    check_end();
})

function display_result(result) {
    const result_div = document.querySelector(".result");
    result_div.textContent = result;
}

function display_score() {
    const score_div = document.querySelector(".score");
    score_div.textContent = `Score:\thuman: ${human_score}\tcomputer: ${computer_score}`;
}

function init() {
    display_score();
}

document.addEventListener("DOMContentLoaded", (e) => { init(); })

function end_game(msg) {
    const game_over_div = document.querySelector(".game-over");
    game_over_div.textContent = msg;
    for (btn of buttons.children) {
        btn.disabled = true;
    }
}

function check_end() {
    if (human_score == 5) {
        end_game("You win the game");
    }
    else if (computer_score == 5) {
        end_game("You lose the game");
    }
}