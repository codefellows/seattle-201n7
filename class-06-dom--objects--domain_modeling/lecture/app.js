// DOM - Document Object Model //
var h1El = document.getElementById('heading'); // This is a reference to the H1 element
console.log(h1El); // => <h1 id="heading">OOP &amp; Objects Demo</h1>
console.log(h1El.textContent); // => "OOP &amp; Objects Demo"
h1El.textContent = 'Flibbity Jibbit';
console.log(h1El.textContent); // => <h1 id="heading">Flibbity Jibbit</h1>


var h2El = document.createElement('h2'); // Creates a new <h2></h2> element (not attached to the DOM)
h2El.textContent = 'The shark in the dark'; // Add content to the new H2 element

var sectionEl = document.getElementById('section-content');
sectionEl.appendChild(h2El); // Append the H2 element as a child of the section


// ================================================== //
// ================================================== //
// OBJECTS //

// Create an empty object literal, and assign to myObj
var myObj = {};

// Create an obj literal with properties and values
var turtle = {
  name: 'Orsen',
  age: 30,
  gender: 'Male',
  color: 'Blue',
  ninja: true,
  size: 6,
  waterType: 'fresh'
};

console.log(turtle.age); // This is a getter using dot-notation to access
turtle.age = 31; // This is a setter using dot-notation to access

turtle['name']; // => 'Orsen'
var prop = 'name'
turtle[prop]; // => 'Orsen'


var rabbit = {
  name: 'Roger',
  color: 'black',
  age: 55,
  speed: 9,
  family: {
    spouse: {
      name: 'Gene'
    },
    children: [
      {
        name: 'Bill'
      },
      {
        name: 'Suzy'
      },
      {
        name: 'Mo'
      }
    ]
  },
  speak: function() {
    // this is a function and a method (property of the object)
    console.log('Hello, my name is ' + this.name);
  }
};

rabbit.growFamily = function(newName) {
  var newKid = {name: newName};
  this.family.children.push(newKid);
  // this.family.children.push({name: newName}); // shorthand for line 51-52
};

// This is a function but not a method
// function speak() {
//   console.log('Hello my name is ' + rabbit.name);
// }
