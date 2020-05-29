var main = document.getElementById('main');
var counter = document.getElementById('counter');
var counter_inner = document.getElementById('counter-inner');
var total = 102241;
var page = 0;
var number = 0;
var male_images = []
var female_images = [];

function addRows() {
  for (var face = 0; face < 1000; face++) {
    number = (page * 1000) + face + 1;

    if (number >= total) {
      return;
    }

    var face_wrapper = document.createElement('div');
    face_wrapper.classList = "face-wrapper";
    if (number == 1) {
      face_wrapper.id = 'first';
    }

    var gender = (Math.random() < 0.382) ? 'f' : 'm';
    var age = (Math.random() < 0.0006) ? 'child' : 'adult';
    var inner = document.createElement('img');
    inner.src = (age === 'adult') ? image(gender) : child_image(gender);

    face_wrapper.appendChild(inner);
    main.appendChild(face_wrapper);
  }
  page++;
}
addRows();

window.addEventListener('scroll', function(e) {
  if (number < total && main.offsetHeight - window.scrollY < 10000) {
    addRows();
  }
  counter_inner.innerHTML = getScrollPercent().toLocaleString() + ' ';
});

function getScrollPercent() {
  var face_width = document.getElementById('first').clientWidth;
  var face_height = document.getElementById('first').clientHeight;
  var body = document.documentElement || document.body;
  var faces_per_row = Math.floor(main.clientWidth / face_width);
  var total_height = total / faces_per_row * face_height;
  var scroll_percent = (body.scrollTop - main.offsetTop + body.clientHeight) / total_height;
  var count = Math.floor(scroll_percent * total);

  var chunked_count = count - (count % faces_per_row);

  if (chunked_count > 0) {
    counter.classList = "fixed";
  }
  else {
    counter.classList = "";
  }
  return (chunked_count > 0) ? chunked_count : 0;
}

function shuffle_male_images() {
  for (var m = 1; m <= 183; m++) {
    male_images.push('img/m/' + m + '.jpg');
  }
  shuffle(male_images);
}

function shuffle_female_images() {
  for (var f = 1; f <= 114; f++) {
    female_images.push('img/f/' + f + '.jpg');
  }
  shuffle(female_images);
}

function shuffle(array) {
  array.sort(function(){
    return Math.random() - 0.5;
  });
}

shuffle_male_images();
shuffle_female_images();

function image(gender) {
  if (gender == 'm') {
    if (!male_images.length) {
      shuffle_male_images();
    }
    return male_images.pop();
  }
  else {
    if (!female_images.length) {
      shuffle_female_images();
    }
    return female_images.pop();
  }
}

function child_image(gender) {
  var propability = Math.random();
  var race = '';

  if (propability < .05) {
    race = 'asian';
  }
  else if (propability < .162) {
    race = 'latin';
  }
  else if (propability < .422) {
    race = 'black';
  }
  else {
    race = 'white';
  }
  return 'img/children/' + gender + '/' + race + '.jpg';
}
