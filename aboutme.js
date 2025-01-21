const text = `My name is Miloš, a 24-year-old final-year Mechatronics student at the Faculty of Technical Sciences in Novi Sad, Serbia.
    I'm an ambitious and reliable person who enjoys finding creative solutions to problems.
    Working as a freelance graphic designer since high school has helped me improve my skills and adapt to various clients and projects.
    I love creating visually striking designs while constantly exploring new tools and techniques to enhance my work.
    With a strong interest in technology and engineering, I approach challenges from a different perspective.
    My goal is to blend my technical background and creativity to deliver meaningful and effective solutions.`;

const speed = 15;
let index = 0;

function typeEffect1() {
    const typingElement = document.getElementById("typing");
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect1, speed);
    } else {
        typingElement.style.borderRight = "none";
    }
}

window.onload = typeEffect1;