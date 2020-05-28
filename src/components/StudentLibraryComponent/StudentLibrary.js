import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import FindBooks from './StudentFunctions/FindBooks'
import TrackBooks from './StudentFunctions/TrackBooks'
import History from './StudentFunctions/History'
import {AiOutlineFileSearch, AiOutlineLogout} from 'react-icons/ai'
import {DiStackoverflow} from 'react-icons/di'
import {BsCollection} from 'react-icons/bs'

export class StudentLibrary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.trackBookref = React.createRef()  
        this.finBookRef = React.createRef()
        this.historyCbRef = React.createRef()
    }

   

    trackBookrefHandle = ()=>{
        this.trackBookref.current.componentDidMount()
    }

    findBookRefHandler = ()=>{
        this.finBookRef.current.componentDidMount()
    }

    HistoryRefHandeler = () =>{
        
        this.historyCbRef.current.componentDidMount()
    }

    
    render() {
        return (
                <div className="mt-2">
                
                <div className="row">
                <div className="col-2">
                    <div className="list-group" id="list-tab" role="tablist">
                    <a onClick={this.findBookRefHandler} className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Find & Issue Books <AiOutlineFileSearch style={{position:'relative', top:'5px'}} size="20px"/></a>
                    <a onClick={this.trackBookrefHandle}  className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Books I have <DiStackoverflow style={{position:'relative', top:'5px'}} size="23px"/></a>
                    <a onClick={this.HistoryRefHandeler} className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">History <BsCollection style={{position:'relative', top:'5px'}} size="18px"/></a>
                    <Link to="/">
                        <a className="list-group-item list-group-item-action" id="list-settings-list"  href="#" role="tab" >Logout <AiOutlineLogout style={{position:"relative", top:"5px"}} size="20px"/></a>
                    </Link>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"> <FindBooks ref={this.finBookRef}/>  </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> <TrackBooks ref={this.trackBookref}/> </div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><History ref={this.historyCbRef}/></div>
                    </div>
                </div>
                </div>  

            </div>
            
        )
    }
}

export default StudentLibrary
