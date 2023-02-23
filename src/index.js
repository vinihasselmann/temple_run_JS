

// mover para esquerda
function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0) {
        character.style.left = left + "px"
    }
}

//mover para direita
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<450) {
        character.style.left = left + "px"
    }
}

document.addEventListener("keydown", e => {
    if(e.key==="ArrowLeft") {moveLeft();}
    if(e.key==="ArrowRight") {moveRight();}
});


    var block = document.getElementById("block");
    var counter = 0;

    block.style.animation = "slide 1s infinite;";
    
    block.addEventListener("animationiteration",
        () => {
                var random = Math.floor(Math.random() * 5);
                let left = random * 100;
                block.style.left = left + "px";
                counter++;
    });

    
    setInterval(() => {
        let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
        if(characterLeft == blockLeft && blockTop<500 && blockTop>300) {
            console.log(`game over, score:`+ counter);
            block.style.animation = "none";
        }
    }, 1);
    document.getElementById("left").addEventListener("touchstart", moveLeft);
    
    document.getElementById("right").addEventListener("touchstart", moveRight);



