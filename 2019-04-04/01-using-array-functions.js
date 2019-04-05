var superHeroes =  [
    ['Batman', 'Bruce Wyane'],
    ['Spiderman', 'Peter Parker'],
    ['The Flash', 'Barry Allen']
]

var secretIdentity = superHeroes.map(
    function (superHeroes){
        return superHeroes.join(' is ')
    }
)
console.log (secretIdentity.join('\n'))