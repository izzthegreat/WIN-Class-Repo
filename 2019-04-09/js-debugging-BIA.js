var woolOwners = [
  {
	  "master": 1
  },
  {
  	"dame": 1
  },
  {
	"little boy": 1,
	"location": "down the lane"
  }
];

var haveYouAnyWool = function() {
	for (var i = 0; i < woolOwners.length; i++) {
	var totalBags = totalBags + i;
	}
	return (i);
};

var bags = haveYouAnyWool();

function baabaaBlackSheep() {
	console.log("BaaBaa BlackSheep have you any wool?");
	if (bags > 0) {
		console.log("yes sir, yes sir " + bags + " bags full");
  }
}

function oneForMy() {
	for (var i = 0; i < 2; i++) {
		people = Object.keys(woolOwners[i]);
		var person = people.toString();
		console.log("one for my " + person);
	}
}

baabaaBlackSheep();

oneForMy();

var boy = Object.keys(woolOwners[2]);

var littleBoy = boy[0];

var whereHeLives = woolOwners[2].location;

console.log("one for the " + littleBoy + " that lives " + whereHeLives)