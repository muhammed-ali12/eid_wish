function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "manoali";
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
// const text = "Eid Mubarak 🌙\nMay your life be filled with happiness, peace, and countless blessings.";
const text = `Eid Mubarak 🌙
May your life be filled with happiness, peace, and countless blessings.
I Really Love You So Much Meri Baby 💋
Meri Happiness 😊 Meri Jaan ❤️
Meri Dunya 🌍 Meri Shona Baby 🦋
I Really Really Miss You
Sooo Much My Love 😘
🫠🌸 Mera chuzooo 🌸🫠
My Love 🤍 My Life 🫂 My Sukoon 🥺
I Really Really Like Youuuu 🎀💕
Mere Liya Sab Kuch Hooo Ap 👀🥰
I Really Really Love, Miss, Hug, Kiss You
🤍🫀 Meri Zindagi 🫀🤍`;

let i = 0;

function startTyping() {
    const eidText = document.querySelector(".eid-text");
    const imageCard = document.querySelector(".image-card");
    const readBtn = document.getElementById("readMessageBtn");

    // Step 1: Show Eid text in center
    eidText.classList.add("show");

    // Step 2: After 5 seconds, hide Eid text and show image directly
    setTimeout(() => {
        eidText.classList.remove("show"); // hide the text
        eidText.style.display = "none"; // completely remove it from layout

        imageCard.classList.add("show"); // show image

        // Step 3: After image animation, show button
        setTimeout(() => {
            readBtn.classList.remove("hidden");
            readBtn.classList.add("show");
        }, 800); // wait for image animation
    }, 5000);

    // Step 4: Button click -> show modal
    readBtn.onclick = () => {
        const modal = document.getElementById("messageModal");
        const modalMsg = document.getElementById("modalMessage");
        modalMsg.innerText = `Eid Mubarak 🌙
May your life be filled with happiness, peace, and countless blessings.
I Really Love You So Much Mera chuzooo 💋
Meri Happiness 😊 Meri Jaan ❤️
Meri Dunya 🌍 Mera chuzooo 🦋
I Really Really Miss You
Sooo Much My Love 😘
🫠🌸 Mera chuzooo 🌸🫠
My Love 🤍 My Life 🫂 My Sukoon 🥺
I Really Really Like Youuuu 🎀💕
Mere Liya Sab Kuch Hooo Ap 👀🥰
I Really Really Love, Miss, Hug, Kiss You
🤍🫀 Meri Zindagi 🫀🤍`;
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

// Call the function after unlocking
document.addEventListener('DOMContentLoaded', () => {
    createRosePetals();
});
