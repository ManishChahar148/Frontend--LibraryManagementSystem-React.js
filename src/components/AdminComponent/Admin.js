import React, { Component } from 'react'
import adminImg from '../../assets/adminImg.png'
import { Link } from 'react-router-dom'
import {AiOutlineDoubleRight} from 'react-icons/ai'
 
class Admin extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={adminImg} alt={"Admin image"} style={{width: "100%", height:"100%"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Admin Login</h5>
                        <p className="card-text">If you are admin click the button below</p>
                        <Link to="adminlibrary">
                            <button  className="btn btn-primary">Enter Library <AiOutlineDoubleRight style={{position:"relative", top:"5px"}} size="20px"/></button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin
