function playSound(e){
        const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if(!audio) return; //stoping the function
        audio.currentTime = 0;//rewinding to start when clicked continously
        audio.play();
        //key.addClass('playing');
        key.classList.add('playing');
}

window.addEventListener('keydown',playSound); 

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}