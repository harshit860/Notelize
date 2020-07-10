import React from 'react'
import { connect } from 'react-redux'
import './../Styling/shownotes.css'
import { useState, useEffect } from 'react'

import Api from './../../Api'
import save from './../asset/save.png'
import cancel from './../asset/close.jpg'
import Axios from 'axios'

function ShowNotes(props) {
    const [edit, editHandle] = useState(false)
    const [Notes, handleNotes] = useState([])
    const [info,setinfo] = useState({
        title:'',
        body:'',
        user:''

    })
    
    function HandleInfo(e){
        console.log(e.target.value)
        console.log(e.target.name)
        const {name,value} = e.target
        setinfo(prev =>({
            ...prev,
            [name]:value
        }))
    }

    function Change() {
        editHandle(edit => !edit)
    }
    function Close() {
        
        editHandle(false)
    }
    function CreateNote (){
        Api.post('/note',
        info
        ).then(resp => {
            console.log(resp)
            if(resp.status == 200)
            {
                console.log("Im insdie")
                Api.get('/notes')
            .then(resp => {
                handleNotes(resp.data)
            })
            .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
            Close()
    }


    useEffect(() => {
        Api.get('/notes')
            .then(resp => {
                handleNotes(resp.data)
            })
            .catch(err => console.log(err))
    }, [handleNotes])

    

    return (
        <>
            {edit ? (
                <div className="addBox" >

                    <div className="arrange" >
                        
                        <input autoFocus={true} className="add" style={{ textDecoration: "bold" }}  name="title" placeholder={'Title'} onChange={HandleInfo}></input>
                        <textarea className="add" placeholder={'Body'} name="body" onChange={HandleInfo}></textarea>
                        <div className="action p-3 border">
                        
                        <button id="cancel" onClick={CreateNote}>
                            <b>Save</b>
                            </button>
                            <button id="cancel" onClick={Change}>
                            <b>Cancel</b>
                           
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="addBox">
                        <input className="addDisplay"  onClick={Change} placeholder={'Type here to note..'}></input>
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