let score = 0;
let answered = 0;
let alreadyAnswered = [];


function checkAnswer(correct, questionNumber, button) {

    // Prevent answering the same question twice
    if (alreadyAnswered[questionNumber]) {
        return;
    }

    alreadyAnswered[questionNumber] = true;


    // Get the result message for this question
    let result = document.getElementById("result" + questionNumber);


    // Find the buttons of this question
    let element = button;
    let questionButtons = [button];

    while (element.nextElementSibling) {

        element = element.nextElementSibling;

        if (element.tagName === "BUTTON") {
            questionButtons.push(element);
        }

        if (element.id === "result" + questionNumber) {
            break;
        }
    }


    // Disable only this question's buttons
    questionButtons.forEach(function(btn) {
        btn.disabled = true;
    });


    // Check the answer
    if (correct) {

        score++;

        result.innerText = "✔ Correct Answer!";
        result.style.color = "green";

        button.style.backgroundColor = "#d4edda";
        button.style.color = "green";

    } else {

        result.innerText = "✘ Wrong Answer!";
        result.style.color = "red";

        button.style.backgroundColor = "#f8d7da";
        button.style.color = "red";
    }


    answered++;


    // Show popup after all 5 questions
    if (answered === 5) {

        let message = "";

        if (score === 5) {

            message = "🛡️ Cyber Expert! Excellent security knowledge.";

        } else if (score >= 3) {

            message = "🔐 Good Awareness! Keep learning cybersecurity.";

        } else {

            message = "⚠️ Keep improving your cybersecurity knowledge.";
        }


        document.getElementById("finalScore").innerText =
            "Your Score: " + score + "/5";

        document.getElementById("finalMessage").innerText =
            message;


        document.getElementById("scorePopup").style.display = "flex";
    }
}


function closePopup() {

    document.getElementById("scorePopup").style.display = "none";
}


function restartQuiz() {

    location.reload();
}


/* Contact Form */

function sendMessage() {

    document.getElementById("successMessage").innerText =
        "✅ Thank you! Your message has been sent successfully.";

    document.getElementById("successMessage").style.color = "green";

    document.getElementById("successMessage").style.fontWeight = "bold";

    document.getElementById("contactForm").reset();

    return false;
}