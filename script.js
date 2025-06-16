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
const human_win_msg = "You win"
const computer_win_msg = "You lose"
const draw_msg = "Draw"

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


for (i = 0; i < 2; ++i) {
    console.log(play_round(get_human_choice(), get_computer_choice()))
    console.log(`Score:\thuman: ${human_score}\tcomputer: ${computer_score}`)
}
