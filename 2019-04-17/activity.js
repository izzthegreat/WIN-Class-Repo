const object = {
    name: `Sombody Important`,
    email: `HeyImImportant@BigHead.edu`
}

const machine = ({name} = `you forgot to put something here`) => console.log (name)

machine(object)
machine()