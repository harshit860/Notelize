import React from 'react'
import { connect } from 'react-redux'
import './../Styling/shownotes.css'
import { useState ,useEffect} from 'react'
import axios from 'axios'

function ShowNotes(props) {
    const [edit, editHandle] = useState(false)
    const onEnter = () => {
        console.log("inside item")
        editHandle(edit => !edit)
    }

    useEffect (()=>{
        axios.get('https://notelize.herokuapp.com/')
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    })
    return (
        <div className="mainBox">
            {
                props.Notes.map(element => {
                    return <>
                        <div  onMouseEnter={onEnter} onMouseLeave={onEnter} className="singleNote">
                        <button id="edit">
                        
                        </button>
                           <p>{element}</p> 
                          
                        </div>
                        
                        </>
                    

                })
            }
        </div>
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