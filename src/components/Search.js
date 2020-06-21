        import React,{useState,useEffect} from 'react'
        import './../Styling/searchbar.css'
        import {connect} from 'react-redux'
        import { saveNote } from '../Redux/storeNote'


        function Search(props) {
            const [searchBar,searchAction] = useState(false)
            const [note,HandleNote] = useState('')

            const Change = () => {
                        searchAction( searchBar => !searchBar)
            }

            const enterNote = (noteFromBox) => {
                HandleNote(noteFromBox)
            }

            console.log(note)
            console.log(props)
            return (
                <div style={{position:"relative"}} >
                    {searchBar ? (
                        <div className="holder">
                            <textarea id="notesFeild" placeholder={'Remember something ... '}  className="onAppear" onChange={(e)=>enterNote(e.target.value)}></textarea>
                            <button onClick={()=>props.addNotes(note)}>Add</button>
                        </div>
                    ) : (
                        <div className="holder">
                            <input placeholder={'Remember something ... '} onClick={()=>Change()} className="onAppear"></input>
                        </div>
                    ) }
                </div>
            )
        }

        const mapStateToProps = state =>{
            console.log(state)
            return {
                notes:state.Notes
            }
        }

        const mapDispatchToProps = dispatch =>{
            return {
                addNotes :(note)=>dispatch(saveNote(note))
            }
        }

        export default connect(
            mapStateToProps,
            mapDispatchToProps
        )(Search)