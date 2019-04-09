class Profile {
    constructor (name,address,city,state,zipcode,avatar) {
        this.name = name
        this.address = address  
        this.city = city
        this.state = state
        this.zipcode = zipcode
        this.avatar = avatar
    }
}

let userProfile1 = new Profile('Billy Bob', '123 Dammit Drive', 'Ness', 'KS', '67560','BillyBob.jpg')

function getProfileUpdate (a,b,c,d,e,f) {
    let profileUpdate = new Profile (a,b,c,d,e,f)
    return profileUpdate
}

function updateProfile (profile, otherProfile) {
    Object.assign({}, profile, otherProfile)
}

getProfileUpdate
updateProfile(userProfile1,profileUpdate)

console.log (userProfile1)