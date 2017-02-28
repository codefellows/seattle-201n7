// 1. Generate three random, non-dupe images (part of the controller)
// 2. Object constructor for Products:
  // a. Include name, path, votes
// 3. A tracker object that will controll functionality of app
// 4. Event listener(s) for image clicks

var productImageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck'];
var productsArray = [];

function Products(name) {
  this.name = name;
  this.path = '../lab/assets/' + name + '.jpg';
  this.votes = 0;
  productsArray.push(this);
}

// a simple IIFE to build all the product images
(function() {
  for(var i = 0; i < productImageNames.length; i++) {
    new Products(productImageNames[i]);
  }
})();

var tracker = {
  imageOneEl: document.getElementById('img-one'),
  imageTwoEl: document.getElementById('img-two'),
  imageThreeEl: document.getElementById('img-three'),
  showResultsEl: document.getElementById('show-results'),
  resultsEl: document.getElementById('results'),
  imageContainerEl: document.getElementById('image-container'),
  imgObjOne: null,
  imgObjTwo: null,
  imgObjThree: null,
  clicks: 1,

  getRandomIndex: function() {
    return Math.floor(Math.random() * productsArray.length);
  },

  displayImages: function() {
    this.imgObjOne = productsArray[this.getRandomIndex()];
    this.imgObjTwo = productsArray[this.getRandomIndex()];
    this.imgObjThree = productsArray[this.getRandomIndex()];

    if(this.imgObjOne === this.imgObjTwo || this.imgObjOne === this.imgObjThree || this.imgObjTwo === this.imgObjThree) {
      this.displayImages();
    }

    this.imageOneEl.src = this.imgObjOne.path;
    this.imageOneEl.id = this.imgObjOne.name;
    this.imageTwoEl.src = this.imgObjTwo.path;
    this.imageTwoEl.id = this.imgObjTwo.name;
    this.imageThreeEl.src = this.imgObjThree.path;
    this.imageThreeEl.id = this.imgObjThree.name;
  },

  checkClicks: function() {
    console.log(this.clicks);
    if(this.clicks > 14) {
      this.imageContainerEl.removeEventListener('click', this.clickHandler);
      this.showResultsEl.addEventListener('click', function(e) {
        e.preventDefault();
        tracker.renderResults();
      });
    }
  },

  clickHandler: function(e) {
    tracker.checkClicks();
    if(
      e.target.id === tracker.imgObjOne.name ||
      e.target.id === tracker.imgObjTwo.name ||
      e.target.id === tracker.imgObjThree.name
    ) {

      tracker.clicks++;
      tracker.tallyVotes(e.target.id);
      tracker.displayImages();
    }
  },

  tallyVotes: function(elId) {
    // for(var i = 0; i < productsArray.lenght; i++) {} => same as below
    for(var i in productsArray) {
      if(elId === productsArray[i].name) {
        productsArray[i].votes += 1;
        console.log(productsArray[i]);
        break;
      }
    }
  },

  renderResults: function() {
    var ulEl = document.createElement('ul');

    for(var i in productsArray) {
      var liEl = document.createElement('li');
      liEl.textContent = productsArray[i].name + ': ' + productsArray[i].votes;
      ulEl.appendChild(liEl);
    }

    this.resultsEl.appendChild(ulEl);
  }
};

tracker.imageContainerEl.addEventListener('click', tracker.clickHandler);
tracker.displayImages();
