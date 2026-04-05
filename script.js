// console
console.log(
    "%cPaulo Gimenez - IT student", 
    "color: #e49012; font-size: 20px; font-weight: bold; font-family: sans-serif;"
);
console.log("coding as hobby, now cursing IT at Federal University of Parana");

// using o`clock to make a nice HELLO :D
const container = document.querySelector('.container');
const introParagraph = document.querySelector('p'); // Using the first paragraph

if (introParagraph) {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) greeting = "Good morning! ";
    else if (hour >= 12 && hour < 18) greeting = "Good afternoon! ";
    else greeting = "Good evening! ";

    // GREETINGs
    introParagraph.prepend(greeting);
}

// Trying an effect
// I really hope it works
document.addEventListener('mousemove', (e) => {
    if (container) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 30; // Moviment sensibility
        const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        container.style.transition = "transform 0.1s ease";
    }
});

// restart the position
document.addEventListener('mouseleave', () => {
    if (container) {
        container.style.transform = `rotateY(0deg) rotateX(0deg)`;
        container.style.transition = "transform 0.5s ease";
    }
});
