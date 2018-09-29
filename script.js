let keys = document.querySelectorAll(`.key`);

keys.forEach((key) => {
    key.addEventListener(`transitionend`, (transitionEndEvent) => {
        if(transitionEndEvent.propertyName === `transform`){
            key.classList.remove(`playing`);
        }
    });
});

function addPlayingClassToKey(keyDownEvent){
    let key = document.querySelector(`div[data-key="${keyDownEvent.keyCode}"]`);
    key.classList.add(`playing`);
}

function playSound(keyDownEvent) {

    let audio = document.querySelector(`audio[data-key="${keyDownEvent.keyCode}"]`);

    if (audio !== null) {

        audio.currentTime = 0;
        audio.play();

        addPlayingClassToKey(keyDownEvent);
    }
}

window.addEventListener(`keydown`, playSound);