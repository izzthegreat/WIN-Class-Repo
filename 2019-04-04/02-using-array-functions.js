const players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
]

//Mike
console.log (
	players.find(
		function (p){
			return p.firstName === 'Mike'
		}
	)
)

//Running Backs
console.log (
	players.filter(
		function(p){
			return p.position === 'RB'
		}
	)
)

//Last Names
console.log (
	players.map(
		function(p){
			return p.lastName
		}
	)
)

//High Scorring Running Back Names
console.log(
	players.filter(
		function(p){
			return p.position === 'RB' && p.touchdowns > 5
		}
	).map(
		function(p){
			return p.firstName + ' ' + p.lastName
		}
	)
)

//Touchdowns by Running Backs
console.log (
	players.filter(
		function(p){
			return p.position === 'RB'
		}
	).reduce(
		function(sum,p){
			return sum + p.touchdowns
		},
		0
	)
)