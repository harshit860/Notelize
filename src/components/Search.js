        import React,{useState,useEffect} from 'react'
        import './../Styling/searchbar.css'

        export default function Search() {
            const [searchBar,searchAction] = useState(false)
            
            const Change = () => {
                        searchAction( searchBar => !searchBar)
            }

            return (
                <div style={{position:"relative"}}>
                    {searchBar ? (
                        <div className="holder">
                            <input  multiple={true} placeholder={'Remember something ... '} onClick={()=>Change()}  className="onAppear"></input>
                        </div>
                    ) : (
                        <div className="holder">
                            <input placeholder={'Remember something ... '} onClick={()=>Change()} className="onAppear"></input>
                        </div>
                    ) }
                </div>
            )
        }
        