import React, {Component} from 'react'
import Note from './Note';
import '../css/Board.css'


class Board extends Component {
    constructor (){
        super()
        this.state = {
            notes: [
                {
                    id: 1,
                    title: "Important Text",
                    body: "Less important text."
                },
                {
                    id: 2,
                    title: "The Second Card",
                    body: "This card has text too!"
                },
                {
                    id: 1,
                    title: "Another Card",
                    body: "Muah, ha, ha!!"
                }
            ]
        }
    }

    addNote() {
        this.state.notes.push (
            {
                id: Date.now()
            }
        )
        this.setState(
            {
                notes: this.state.notes
            }
        )
    }

    deleteNote (date){
        let noteArr = this.state.notes
        let newNoteArr = noteArr.filter(function (note) {
            return note.id === date
        })
        this.setState(
            {notes: newNoteArr}
        )

    }

    render() {
        return(
            <div>
                <div className="div-Board">
                    <div className="row">
                    {
                        this.state.notes.map(note => { 
                            return <Note id={note.id} title={note.title} body={note.body} deleteHandler={this.deleteNote.bind(this)}/>
                        })
                    }
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>
                        Add
                    </button>
                </div>
            </div>
        )
    } 


}
export default Board