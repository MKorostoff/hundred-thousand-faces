var main = document.getElementById('main');
var counter = document.getElementById('counter');
var total = 98683;
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
    face_wrapper.dataset.ordinalNumber = number;
    face_wrapper.classList = "face-wrapper";

    var gender = (Math.random() < 0.382) ? 'female' : 'male';
    var inner = document.createElement('img');
    inner.src = image(gender);

    face_wrapper.appendChild(inner);
    main.appendChild(face_wrapper);
  }
  page++;
}
addRows();

window.addEventListener('scroll', function(e) {
  if (number < total && main.offsetHeight - window.scrollY < 2000) {
    addRows();
  }
  counter.innerHTML = getScrollPercent().toLocaleString();
});

function getScrollPercent() {
  var body = document.documentElement || document.body;
  var faces_per_row = Math.floor(main.clientWidth / 188);//todo: programatically get face width
  var total_height = total / faces_per_row * 188;//todo: programatically get face height
  var scroll_percent = (body.scrollTop - main.offsetTop + body.clientHeight) / total_height;
  var count = Math.floor(scroll_percent * total);

  if (count > 0) {
    counter.classList = "fixed";
  }
  else {
    counter.classList = "";
  }

  var chunked_count = count - (count % faces_per_row);
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
  if (gender == 'male') {
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
