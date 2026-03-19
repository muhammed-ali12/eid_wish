function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "eid2026";
    const errorMsg = document.getElementById("errorMsg");
    const lockIcon = document.getElementById("lockIcon");
    const lockBox = document.querySelector(".lock-box");

    if (password === correctPassword) {

        // 🔓 Change icon
        lockIcon.innerHTML = "🔓";

        // ✨ Add glow animation
        lockBox.classList.add("unlocking");

        // 🎬 Smooth transition
        setTimeout(() => {
            document.getElementById("lockScreen").classList.remove("active");

            setTimeout(() => {
                document.getElementById("mainContent").classList.add("active");
                startTyping();
            }, 200);

        }, 800);

    } else {
        errorMsg.innerText = "Wrong password!";
    }
}

/* ✨ Typing Effect */
const text = "Eid Mubarak 🌙\nMay your life be filled with happiness, peace, and countless blessings.";

let i = 0;

function startTyping() {
    const eidText = document.querySelector(".eid-text");
    const imageCard = document.querySelector(".image-card");
    const readBtn = document.getElementById("readMessageBtn");

    // Step 1: Show Eid text in center
    eidText.classList.add("show");

    // Step 2: After 5 seconds, move Eid text to top
    setTimeout(() => {
        eidText.classList.remove("center-text");
        eidText.classList.add("top-text");

        // Step 3: After text moves (~1s), animate image
        setTimeout(() => {
            imageCard.classList.add("show");

            // Step 4: After image animation, show button
            setTimeout(() => {
                readBtn.classList.remove("hidden");
                readBtn.classList.add("show");
            }, 800); // wait for image animation
        }, 1000); // wait for text transition
    }, 5000);

    // Step 5: Button click -> show modal
    readBtn.onclick = () => {
        const modal = document.getElementById("messageModal");
        const modalMsg = document.getElementById("modalMessage");
        modalMsg.innerText = "Eid Mubarak 🌙\nMay your life be filled with happiness, peace, and countless blessings.";
        modal.classList.remove("hidden");
        modal.classList.add("show");
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById("messageModal");
    modal.classList.add("hidden");
    modal.classList.remove("show");
}


function togglePassword() {
    const input = document.getElementById("password");
    const icon = document.getElementById("eyeIcon");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


// Generate 100+ random stars for more density
const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
}


// 🌹 Generate falling rose petals
// 🌹 Generate falling rose petals
function createRosePetals() {
    const body = document.body;
    const petalsCount = 30; // number of petals

    for (let i = 0; i < petalsCount; i++) {
        const petal = document.createElement('img');
        petal.src = 'rose.png'; // path to your rose image
        petal.className = 'rose-petal';
        petal.style.top = '-50px'; // start slightly above the screen
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's'; // 5-10s
        petal.style.animationDelay = Math.random() * 5 + 's';
        body.appendChild(petal);
    }
}
// Call the function after unlocking
document.addEventListener('DOMContentLoaded', () => {
    createRosePetals();
});
