// Réponses correctes par question
const correctAnswers = {
    1: "color", // Question 1
    2: "#id",   // Question 2
    3: "/* commentaire */" // Question 3
};

// Sélection des boutons de validation
const validateButtons = document.querySelectorAll(".validate");

// Gestion des clics sur "Valider"
validateButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Récupération de l'article contenant la question
        const questionArticle = button.closest("article");
        const questionNumber = questionArticle.dataset.question;

        // Récupération des options
        const options = questionArticle.querySelectorAll(".option");
        const correctAnswer = correctAnswers[questionNumber];

        // Validation des réponses
        options.forEach(option => {
            if (option.textContent.trim() === correctAnswer) {
                option.style.backgroundColor = "green";
                option.style.color = "white";
            } else {
                option.style.backgroundColor = "red";
                option.style.color = "white";
            }

            // Désactiver les boutons après validation
            option.disabled = true;
        });

        // Désactiver le bouton "Valider"
        button.disabled = true;
    });
});
