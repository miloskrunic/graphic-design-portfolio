const text = `My name is Miloš, a 24-year-old final-year Mechatronics student at the Faculty of Technical Sciences.
    I'm ambitious, sociable, and reliable, with a passion for creative problem-solving.
    Since high school, I’ve worked as a freelance graphic designer, honing my technical skills and adaptability to diverse clients and projects. 
    I enjoy crafting innovative, visually impactful designs while exploring new tools and techniques to enhance my craft.
    With a strong interest in technology and engineering, I bring a unique perspective to challenges. 
    My goal is to blend my technical background and creativity to deliver meaningful, effective solutions.`;

const speed = 50;
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