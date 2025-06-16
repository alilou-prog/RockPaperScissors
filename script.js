function getComputerChoice() {
    p = Math.random()
    if(p < 0.33)
        return "rock"
    else if (p < 0.66)
        return "paper"
    else 
        return "scissors"
}