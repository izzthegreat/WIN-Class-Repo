var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log (course.name)
console.log (course.teachers[1])
console.log (course.students[0].name)
console.log (course.students[1].computer.type)
console.log (course.preReqs.equipment)
console.log (course.preReqs.equipment.OSOptions[1])
console.log (course.preReqs.equipment.OSOptions)
var x = 0
var osxStudents = []
while (x < course.students.length) {
	if (course.students[x].computer.OS === 'OSX') {
	osxStudents.push (course.students[x].name)
	}
	x++;
}
console.log (osxStudents)