
  function personConstructor(name, job, age) {
    var newPerson = {};
    newPerson.name = name;
    newPerson.job = job;
    newPerson.age = age;
    return newPerson;
  }

  function Person(name, job, age) {
    // var this = {};
    this.name = name;
    this.job = job;
    this.age = age;
    this.getInfo = function() {
      console.log('My name is ' + this.name);
      console.log('My job is ' + this.job);
      console.log('My age is ' + this.job);
    };
    this.render = function() {
      var peopleList = document.getElementById('peopleList');
      var liElement = document.createElement('li');
      liElement.textContent = this.name + ' ' + this.job + ' ' + this.age;
      peopleList.appendChild(liElement);
    }
    this.renderAsRow = function() {
      var peopleTable = document.getElementById('peopleTable');
      var trElement = document.createElement('tr');
      var nameData = document.createElement('td');
      var jobData = document.createElement('td');
      var ageData = document.createElement('td');
      nameData.textContent = this.name;
      jobData.textContent = this.job;
      ageData.textContent = this.age;
      trElement.appendChild(nameData);
      trElement.appendChild(jobData);
      trElement.appendChild(ageData);
      peopleTable.appendChild(trElement);
    }
    // return this
  }
  // incorrect. Will appear to work but will not in reality
  // var person5 = Person('beth', 'engineer', 30);
  var person5 = new Person('beth', 'engineer', 30);
  var person6 = new Person('tim', 'plumber', 2);

  person5.render();
  person6.render();
  person5.renderAsRow()

  var person3 = personConstructor('beth', 'engineer', 30);
  var person4 = personConstructor('bob', 'cashier', 18);

  var person1 = {
    name: 'beth',
    job: 'engineer',
    age: 30
  };

  var person2 = {
    name: 'bob',
    job: 'cashier',
    age: 18
  };

  console.log(person1.age);
  console.log(person3.age);

/*
function render(person) {
  var peopleList = document.getElementById('peopleList');
  var liElement = document.createElement('li');
  liElement.textContent = person.name + ' ' + person.job + ' ' + person.age;
  peopleList.appendChild(liElement);
}
var person5 = new Person('beth', 'engineer', 30);
render(person5);
var person6 = new Person('tim', 'plumber', 2);
render(person6);
*/

/* More modular yet...
var people = [person5, person6];
for (var i = 0; i < people.length; i++) {
  people[i].render()
}
*/
