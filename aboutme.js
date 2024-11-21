const text = `My name is Milos, and I'm 24 years old. 
I'm a final-year student at the Faculty of Technical Sciences, majoring in Mechatronics. 
I'm ambitious, sociable, and reliable, with a strong passion for creative problem-solving. 
I've been working as a freelance graphic designer since high school, which has allowed me to develop both my technical skills and my ability to adapt to different clients and projects. 
I enjoy working on innovative and visually impactful designs, and I'm constantly exploring new tools and techniques to improve my craft. 
In addition to design, I have a keen interest in technology and engineering, which helps me approach challenges with a unique perspective. 
My goal is to combine my technical background and creative expertise to create meaningful and effective solutions.`;

const speed = 50; // Brzina kucanja
let index = 0;

function typeEffect1() {
    const typingElement = document.getElementById("typing");
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect1, speed);
    } else {
        typingElement.style.borderRight = "none"; // Uklanja kursor nakon završetka
    }
}

window.onload = typeEffect1; // Pokreće kucanje kada se stranica učita