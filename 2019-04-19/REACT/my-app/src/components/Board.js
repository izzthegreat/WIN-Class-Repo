import React, {Component} from 'react'
import Note from './Note';
import '../css/Board.css'


class Board extends Component {
    constructor (){
        super()
    }
    render() {
        return(
            <div>
                <div className="div-Board">
                    <div className="row">
                        <Note title="Important Text" body="Less important text."/>
                        <Note title="The Second Card" body="This card has text too!"/>
                        <Note title="Another Card" body="Muah, ha, ha!!"/>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button">
                        Add
                    </button>
                </div>
            </div>
        )
    } 
}

export default Board