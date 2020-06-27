import React from 'react'
import { connect } from 'react-redux'
import './../Styling/shownotes.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Api from './../../Api'
import save from './../asset/check.jpg'
import cancel from './../asset/close.jpg'
function ShowNotes(props) {
    const [edit, editHandle] = useState(false)
    const [Notes, handleNotes] = useState([])

    function Change() {
        editHandle(edit => !edit)
    }
    useEffect(() => {
        Api.get('https://notelize.herokuapp.com/notes')
            .then(resp => {
                handleNotes(resp.data)
            })
            .catch(err => console.log(err))
    }, [handleNotes])

    console.log(Notes)

    return (
        <>
            {edit ? (
                <div className="addBox">
                    
                    <div className="arrange">
                        <div className="action">
                            <button id="save">
                                Save
                                {/* <img src={save} width="50" height="50" /> */}
                            </button>
                            <button id="cancel" onClick={Change}><img src={cancel} width="50" height="50" /></button>
                        </div>
                        <input className="add" style={{textDecoration:"bold"}} placeholder={'Title'}></input>
                        <textarea className="add" placeholder={'Body'}></textarea>
                    </div>
                </div>
            ) : (
                    <div className="addBox" onClick={Change}>
                        <input className="addDisplay" placeholder={'Click to Remember'}></input>
                    </div>
                )}

            <div className="mainBox">
                {Notes.map(note => {
                    return <div className="singleNote">
                        <p>{note.title}</p>
                        <p>{note.body}</p>
                        {/* <p>{note.created}</p> */}
                    </div>
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        Notes: state.Notes
    }
}
export default connect(
    mapStateToProps
)(ShowNotes)