// for (start; stop; step) { do some codes }
var arr = ['Scott', 25, 'banana', true, undefined, 'boom'];

for (var i = 0; i < arr.length; i++) {
  // log each element in the arr from [0] to the last
  console.log(arr[i]);
}


for (var j = arr.length -1; j >= 0; j--) {
  // log each element in the arr from the last to [0]
  console.log(arr[j]);
}

// Lets talk about counters
var counter = 0;

for (var k = 0; k < arr.length; k++) {
  // counter = counter + 1;
  // counter += 1;
  // counter++;  // postfix incremental
  // ++counter;  // prefix incremental
}
console.log('counter', counter);


// While Loops!! WOOP!
while (true) {
  // do some stuff
}


do {
  // run at least once!
  // do some stuff
} while(true)
