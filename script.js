const intro = ['Today your day will be:  ', 'Expected outlook today: ', 'What today holds for you: ' ];

const secondSection = ['interesting.', 'eventful. ', "fun! "];

const thirdSection = ['You may have a visit from an unexpected guest.', 'You just won the lottery! ', 'Someone is looking for you...'];

const final = ['Stay safe out there!', 'Try to remain positive.', 'Run!!'];

// Created a single function that returns a item from an array at random.
const randomArray = (array)=>{
    let randomIndex = Math.floor(Math.random()* array.length);
    return array[randomIndex];
}

// Combines all four array categories into one coherent prediction for the user
let mixedMessage = `${randomArray(intro)}${randomArray(secondSection)}${randomArray(thirdSection)}${randomArray(final)}`;

console.log(mixedMessage);