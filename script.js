function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "eid2026";
    const errorMsg = document.getElementById("errorMsg");
    const lockIcon = document.getElementById("lockIcon");
    const lockBox = document.querySelector(".lock-box");

    if (password === correctPassword) {
        lockIcon.innerHTML = "🔓";
        lockBox.classList.add("unlocking");

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

function startTyping() {
    const eidText = document.querySelector(".eid-text");
    const imageCard = document.querySelector(".image-card");
    const readBtn = document.getElementById("readMessageBtn");

    const message = "Eid Mubarak 🌙\nMay your life be filled with happiness, peace, and countless blessings.";
    let index = 0;

    eidText.innerText = "";
    eidText.classList.add("show", "center-text");

    const typingInterval = setInterval(() => {
        eidText.innerText = message.slice(0, index);
        index++;
        if (index > message.length) clearInterval(typingInterval);
    }, 50);

    setTimeout(() => {
        eidText.classList.remove("center-text");
        eidText.classList.add("top-text");

        setTimeout(() => {
            imageCard.classList.add("show");

            setTimeout(() => {
                readBtn.classList.remove("hidden");
                readBtn.classList.add("show");
            }, 500);
        }, 1000);
    }, 5000);

    readBtn.onclick = () => {
        const modal = document.getElementById("messageModal");
        const modalMsg = document.getElementById("modalMessage");
        modalMsg.innerText = message;
        modal.classList.remove("hidden");
        modal.classList.add("show");
    }
}

function closeModal() {
    const modal = document.getElementById("messageModal");
    modal.classList.add("hidden");
    modal.classList.remove("show");
}

// 🌟 Stars
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

// 🌹 Rose petals
function createRosePetals() {
    const body = document.body;
    const petalsCount = 30;

    for (let i = 0; i < petalsCount; i++) {
        const petal = document.createElement('img');
        petal.src = 'rose.png';
        petal.className = 'rose-petal';
        petal.style.top = '-50px';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        body.appendChild(petal);
    }
}

document.addEventListener('DOMContentLoaded', () => { createRosePetals(); });
