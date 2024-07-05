const answer = document.querySelector('#answer');

function Rizz(index) {
    const gif = document.querySelector("#gif");
    const audio = document.querySelector(`.mp3[audio-index = "${index}"]`);   
    const allAudio = document.querySelectorAll(".mp3");

    allAudio.forEach((audioElement) => {
        if (audioElement !== audio) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    });

    if (index === 1) {
        answer.style.display = "block";
        answer.textContent = "183cm(6 feet) Just tall enough to reach for the stars, but still down to earth enough to reach for your hand.";
        audio.play();
        gif.src = "https://media.tenor.com/xLsSN5G6utAAAAAj/bubu12.gif";
    }
     else if (index === 2) {
        answer.style.display = "block";
        answer.textContent = "My job is to adore you and make you feel special."
        audio.play();
        gif.src="https://media.tenor.com/LnDAw2bdEogAAAAM/huge-hands.gif";
    }
     else if (index === 3) {
        answer.style.display = "block";
        answer.textContent = "Finding new and exciting ways to impress you😘."
        audio.play();
        gif.src = "https://media.tenor.com/-aW73OVUtyYAAAAj/tkthao219-bubududu.gif";
    }
     else if (index === 4) {
        answer.style.display = "block";
        answer.textContent = "Im from a place where the weather's always perfect—because I bring the sunshine with me🌞."
        audio.play();
        gif.src = "https://media.tenor.com/Du9VVJYDPDkAAAAj/tkthao219-bubududu.gif"
    }
     else if (index === 5) {
        answer.style.display = "block";
        answer.textContent = "Something romantic, but I'm more interested in our love story😜."
        audio.play();
        gif.src = "https://media.tenor.com/XtGispDVwDQAAAAj/tkthao219-bubududu.gif"
    }
     else if (index === 6) {
        answer.style.display = "block";
        answer.textContent = "Yes, I'm a pro at winning hearts❤️."
        audio.play();
        gif.src = "https://media.tenor.com/905u0Gsct30AAAAj/tkthao219-bubududu.gif";
    }
     else if (index === 7) {
        answer.style.display = "block";
        answer.textContent = "I'd have to say it's you, because you're the sweetest thing I've ever tasted."
        audio.play();
        gif.src="https://media.tenor.com/vmvaMX3F-3IAAAAj/hehehehe.gif";
    }
     else if (index === 8) {
        answer.style.display = "block";
        answer.textContent = "Not yet, but I wouldn't mind adopting a cuddle buddy. You interested?"
        audio.play();
        gif.src = "https://media.tenor.com/-Qq0R9rKNzUAAAAj/panda-bear.gif";
    }
     else if (index === 9) {
        answer.style.display = "block";
        answer.textContent = "Absolutely! But I'd love to travel through life with someone special like you."
        audio.play();
        gif.src = "https://media.tenor.com/O-GOlNdxjH8AAAAj/love-bear.gif";
    }
     else if (index === 10) {
        answer.style.display = "block";
        answer.textContent = "I like a bit of everything, especially if it involves dancing with you."
        audio.play();
        gif.src = "https://media.tenor.com/LFYspX1SSUcAAAAj/bubu-dudu-bubu.gif";
    }
     else if (index === 11) {
        answer.style.display = "block";
        answer.textContent = "Coffee, because you keep me awake and make my heart race."
        audio.play();
        gif.src = "https://media.tenor.com/JCzvhxNoLwYAAAAj/bubu-bubu-dudu.gif";
    }
     else if (index === 12) {
        answer.style.display = "block";
        answer.textContent = "Blue, because like the sky, my love for you has no limits."
        audio.play();
        gif.src = "https://media.tenor.com/f_TC2j5AMvkAAAAj/bear-cute.gif";
    }
     else {
        answer.style.display = "block";
        answer.textContent = "Error"
    }
}