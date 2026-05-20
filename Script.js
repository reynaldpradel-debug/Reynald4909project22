// =====================================
// ARRAY WITH 5+ ITEMS
// =====================================

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "GitHub",
    "UI/UX Design"
];

// =====================================
// LOOP RENDERS ITEMS TO PAGE
// =====================================

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(function(skill) {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.textContent = skill;
    skillsContainer.appendChild(skillCard);
});

// =====================================
// BUTTON EVENT INTERACTION
// =====================================

const themeBtn = document.getElementById("themeBtn");

// FUNCTION DEFINED AND CALLED
function changeTheme(mode) {

    // CONDITIONAL LOGIC (IF/ELSE)
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        themeBtn.textContent = "Dark Mode";
    }
}

// EVENT LISTENER
let darkMode = false;

themeBtn.addEventListener("click", function() {
    darkMode = !darkMode;

    if (darkMode) {
        changeTheme("dark");
    } else {
        changeTheme("light");
    }
});

