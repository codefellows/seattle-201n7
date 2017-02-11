function personConstructor(name, job, age) {
  var newPerson = {};
  newPerson.name = name;
  newPerson.job = job;
  newPerson.age = age;
  return newPerson;
}

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
