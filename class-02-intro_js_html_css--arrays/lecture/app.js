var userName = prompt('What\'s your name?');
alert('Hello ' + userName + '. Thanks for coming to my site!');

// We want to ask the user a question
// Take their answer as input; stored in a var
// Validate that their answer matches my answer
// Depending on True or False, provide feedback

var answerOne = prompt('What state was I born in?');
var myAnswerOne = 'Washington';

if(answerOne === myAnswerOne) {
  alert('You got it right. I was born in Washington!');
} else {
  alert('Sorry, that\'s wrong. I was born in Washington.');
}

var answerTwo = prompt('Javascript walked into the bar...');

if (answerTwo === '?' || answerTwo === '') {
  alert('Woop! You be genius.');
} else if (answerTwo === 'What' || answerTwo === 'Wat' || answerTwo === '?') {
  alert('Yeah, wierd question...');
} else {
  alert('I can\'t even...');
}
