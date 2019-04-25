import React from 'react'

const UserForm = (props) => {
    return(
        <form onSubmit={props.getUser}>
            User Name
            <input style={{margin:"20px auto", display:"block"}} type="text" name="userName"/> <br/>
            <button type="submit">Submit</button>
        </form> 
    )
}

export default UserForm