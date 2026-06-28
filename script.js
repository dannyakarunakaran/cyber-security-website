function checkAnswer(answer) {
    if (answer === "correct") {
        document.getElementById("result").innerText =
            "✔ Correct! Phishing is a fake email or message.";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText =
            "✘ Wrong answer! Try again.";
        document.getElementById("result").style.color = "red";
    }
}