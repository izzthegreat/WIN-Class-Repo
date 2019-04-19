import React, {Component} from 'react'
import propTypes from 'prop-types'
import '../css/Note.css'

class Note extends Component {
    constructor () {
        super()
    }

    render() {
        return(
            <div className="col-sm-4">
                <div className="card card-view">
                    <div className="card-body dark">
                        <h5 className="card-title">
                            {this.props.title}
                        </h5>
                        <p>
                            {this.props.body}
                        </p>
                        <button className="btn btn-warning edit-button">Edit</button>
                        <button className="btn btn-danger delete-button">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

Note.defaultProps = {
    title: 'Title',
    body: 'Body'
}

Note.propTypes = {
    title: propTypes.string,
    body: propTypes.string
}

export default Note