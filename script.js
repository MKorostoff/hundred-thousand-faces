var container = document.getElementById('main');
var main = document.getElementById('main');
var page = 0;
var number = 0;
var male_images = []
var female_images = [];


function addRows() {
  for (var face = 0; face < 1000; face++) {
    number = (page * 1000) + face + 1;

    if (number >= 98683) {
      return;
    }

    var outer = document.createElement('div');
    outer.classList = "outer";

    var gender = (Math.random() < 0.382) ? 'female' : 'male';
    var inner = document.createElement('img');
    inner.src = image(gender);

    var info = document.createElement('div');
    info.classList = "info";
    info.innerHTML = number + '. ' + name(gender);

    outer.appendChild(inner);
    outer.appendChild(info);

    container.appendChild(outer);
  }
  page++;
}
addRows();

window.addEventListener('scroll', function(e) {
  if (number < 98683 && main.offsetHeight - window.scrollY < 2000) {
    addRows();
  }
});

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

function name(gender) {
  var last_names = ["Doyle", "Watts", "Hines", "Holmes", "Espinoza", "Rooney", "Powell", "Thomas", "Fleming", "Reed", "Knight", "Commings", "Hunt", "Cook", "Cortez", "Hardy", "Aguirre", "Larson", "Mendez", "Stevenson", "Graham", "Laing", "Bowen", "Adams", "Read", "Rodgers", "Carter", "Watson", "Fitzgerald", "Sandoval", "Robbins", "Chang", "Gallagher", "Medina", "Simmons", "Lawson", "Hart", "Ray", "Rios", "Schmidt", "Smith", "Lloyd", "Perry", "Long", "Harvey", "Kent", "Turner", "Reeves", "Duncan", "Fischer", "Sanchez", "Kemp", "Saunders", "Lin", "Newman", "Robertson", "Singh", "Turnbull", "Davidson", "Diaz", "Adkins", "Gardiner", "Waters", "Christensen", "Nelson", "Hanson", "Robles", "Sullivan", "Floyd", "Peters", "Morgan", "Freeman", "Wheeler", "Walker", "Hernandez", "Hill", "Gomez", "Francis", "Rice", "Hamilton", "Lowe", "Norman", "Rhodes", "Wright", "Wood", "Perkins", "Rowe", "Sanders", "Shelton", "Banks", "Payne", "Tate", "Larson", "Murphy", "Smith", "Chavez", "Harris", "Booth", "Douglas", "Duran", "Hayes", "Woods", "King", "Ortiz", "Singleton", "Ochoa", "Goodman", "Clayton", "Byrne", "Marshall", "Bishop", "Freeman", "Stevens", "Morrison", "Bates", "Cartwright", "Broadhurst", "Vargas", "Kennedy", "May", "Christensen", "Logan", "Parry", "Lynch", "Anderson", "Marsh", "Singh", "Richardson", "Mccarthy", "Owens", "Washington", "Rees", "Cabrera", "Cooper", "Ruiz", "Shepherd", "Zimmerman", "Blake", "Butler", "Drake", "Hubbard", "Gardner", "Barnes", "Gordon", "Nash", "Buchanan", "Gutierrez", "Pacheco", "Parsons", "Neal", "Adams", "Sutton", "Harmon", "Vaughan", "Sharp", "Vasquez", "Townsend", "Turner", "Spencer", "Newman", "Thomas", "Griffin", "Ballard", "Price", "Sinclair", "Henderson", "Taylor", "Schmidt", "Roy", "Simmons", "Long", "Wills", "Weber", "Goodwin", "Fowler", "Mitchell", "Bell", "Henry", "Dawson", "Cook", "Clark", "Watkins", "Edwards", "Walker", "Donaldson", "Lehmann","Rosenthal","Shay","Mckeown","Mcclelland","Muir","Mclaurin","Buckenham","Toler","Vickery","Faulk","Crist","Dozier","Wahl","Upton","Pond","Stephen","Carlin","Lightfoot","Hite","Denson","Pendleton","Dow","Whitlow","Durbin","Hammonds","Greiner","Muse","Manson","Card","Gulley","Fortier","Duval","Blank","Ammons","Chapa","Milburn","Springall","Leung","Quinonez","Chaffin","Pulliam","Barksdale","Coy","Baines","Ridenour","Etheridge","Doan","Ginn","Romeo","Vergara","Taft","Kenyon","Priest","Bigelow","Evers","Lindberg","Kidwell","Vallejo","Madsen","Ricker","Moffitt","Burchett","Segovia","Cade","Markham","Garvin","Rendon","Driver","Mull","Deluca","Lyle","Gannon","Martel","Gorham","Sage","Kelleher","Qualls","Tamayo","Jack","Comstock","Eggleston","Goebel","Baumgartner","Beebe","Lovejoy","Farrar","Colson","Edge","Devore","Stine","Collett","Durand","Mullin","Peek","Bales","Stanfield","Barnardine","Siersma","Apailana","Franxman","Eule","Cluka","Padama","Conyngham","Duncalf","Martine-DuBauer","Emari","Andrewartha","Pershad","Jarrus","Leenheer","Soothsayer","Germinal","Mallien","Khabra","Tomlanovich","Trakul","Thersites","Ilves","Schiernbeck","Malvolio","Gangewere","Zomaya","Kampling","Zimmaro","Rambures","Grievous","Korotkov","Zogby","Pisanio","Autolycus","Cothrum","Cerimon","Tekka","Otonashi","Chidichimo","Semele","Klivian","Tsun","Senesca","De la Cruz","Fierek","Kolsch","Thuong","Spinnet","Helicanus","Renderman","Xinhai","Beridze","Soundpost","Sidious","Freauff","Afify","Bennetto","Magelitz","Hodgett","Klabenes","Demanett","Sangree","Poul","Bokun","Sadangi","Neeyutnee","Sorm","Tanico","Ozeri","Estreicher","Maloles","Breyne","Momcilovic","Kustermann","Egeus","Luettgen","Westenra","Bloodtide","Psenicka","Fool","Jagnarine","Baelish","Messala","Virtanen","Semyonov","Mahto","Schellack","Leonine"];
  var last = last_names[Math.floor(Math.random()*last_names.length)];

  var male_names = [ "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth", "Joshua", "George", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Stephen", "Jonathan", "Larry", "Justin", "Scott", "Brandon", "Frank", "Benjamin", "Gregory", "Samuel", "Raymond", "Patrick", "Alexander", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Henry", "Douglas", "Adam", "Peter", "Nathan", "Zachary", "Walter", "Kyle", "Harold", "Carl", "Jeremy", "Keith", "Roger", "Gerald", "Ethan", "Arthur", "Terry", "Christian", "Sean", "Lawrence", "Austin", "Joe", "Noah", "Jesse", "Albert", "Bryan", "Billy", "Bruce", "Willie", "Jordan", "Dylan", "Alan", "Ralph", "Gabriel", "Roy", "Juan", "Wayne", "Eugene", "Logan", "Randy", "Louis", "Russell", "Vincent", "Philip", "Bobby", "Johnny", "Bradley", "Javier", "Danny", "Edmond", "Marcelino", "Hershel", "Shad", "Joel", "Otis", "Augustine", "Quinn", "Quentin", "Brent", "Ray", "Horace", "Leonardo", "Jamaal", "Samual", "Earnest", "Theron", "Lemuel", "Lester", "Homer", "Josue", "Brice", "Silas", "Les", "Roberto", "Marvin", "Dwain", "Hayden", "Bradly", "Kurt", "Newton", "Andy", "Harland", "Mario", "Ambrose", "Tuan", "Gil", "Lynn"];
  var female_names = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Nancy", "Margaret", "Lisa", "Betty", "Dorothy", "Sandra", "Ashley", "Kimberly", "Donna", "Emily", "Michelle", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Rebecca", "Laura", "Sharon", "Cynthia", "Kathleen", "Helen", "Amy", "Shirley", "Angela", "Anna", "Brenda", "Pamela", "Nicole", "Ruth", "Katherine", "Samantha", "Christine", "Emma", "Catherine", "Debra", "Virginia", "Rachel", "Carolyn", "Janet", "Maria", "Heather", "Diane", "Julie", "Joyce", "Victoria", "Kelly", "Christina", "Joan", "Evelyn", "Lauren", "Judith", "Olivia", "Frances", "Martha", "Cheryl", "Megan", "Andrea", "Hannah", "Jacqueline", "Ann", "Jean", "Alice", "Kathryn", "Gloria", "Teresa", "Doris", "Sara", "Janice", "Julia", "Marie", "Madison", "Grace", "Judy", "Theresa", "Beverly", "Denise", "Marilyn", "Amber", "Danielle", "Abigail", "Brittany", "Rose", "Diana", "Natalie", "Sophia", "Alexis", "Lori", "Kayla", "Jane",  "Lavone", "Vernia", "Kia", "Charita", "Shirely", "Cristie", "Oneida", "Coletta", "Sonia", "Vanda", "Cordie", "Rosaline", "Eugenie", "Rashida", "Nilda", "Tamara", "Sari", "Gretta", "Tabetha", "Deanne", "Carleen", "Alberta", "Melony", "Tanesha", "Darcey", "Erma", "Vertie", "Renata", "Leena", "Ashanti", "Shakia", "Evelia", "Alida", "Amparo", "Mechelle", "Rivka", "Leone", "Venetta", "Katherine", "Sharen"];
  if (gender == 'male') {
    var first = male_names[Math.floor(Math.random()*male_names.length)];
  }
  else {
    var first = female_names[Math.floor(Math.random()*female_names.length)];
  }
  return first + ' ' + last;
}
