import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineAppstoreAdd, AiOutlineUnorderedList, AiOutlineLogout, AiOutlineSolution} from 'react-icons/ai'
import {GiBookshelf} from 'react-icons/gi'
import AddBooks from './AdminFunctions/AddBooks'
import ListBooks from './AdminFunctions/ListBooks'
import IssueLogs from './AdminFunctions/IssueLogs'

export class AdminLibrary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    refreshBookList = () =>{
        this.refs.child.componentDidMount()
    }
    
    
    render() {
        return (
            <div className="mt-2">
                
                <div className="row">
                <div className="col-2">
                    <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Add Books  <AiOutlineAppstoreAdd style={{position:"relative", top:"5px"}} size="20px"/></a>
                    <a onClick={this.refreshBookList}  className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">List All Books <AiOutlineUnorderedList style={{position:"relative", top:"5px"}} size="20px"/></a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Book Issue Logs <AiOutlineSolution style={{position:"relative", top:"5px"}} size="20px"/></a>
                    <Link to="/">
                        <a className="list-group-item list-group-item-action" id="list-settings-list"  href="#" role="tab" >Logout <AiOutlineLogout style={{position:"relative", top:"5px"}} size="20px"/></a>
                    </Link>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"> <AddBooks /> </div>
                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> <ListBooks ref="child" />  </div>
                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><IssueLogs /></div>
                    </div>
                </div>
                </div>  

            </div>
        )
    }
}

export default AdminLibrary
