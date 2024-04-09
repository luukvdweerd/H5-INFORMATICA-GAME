body, html {
    margin: 0;
    padding: 0;
    height: 100%;
}
#game-container {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 50px auto;
    border: 2px solid black;
    background-image: url('background.jpg'); /* Replace 'background.jpg' with your background image */
    background-size: cover;
}
#ball {
    width: 50px;
    height: 50px;
    background-image: url('person.png'); /* Replace 'person.png' with your ball image */
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#goal {
    width: 50px;
    height: 50px;
    background-image: url('goal.png'); /* Replace 'goal.png' with your goal image */
    background-size: cover;
    position: absolute;
    top: 80%;
    left: 80%;
}
