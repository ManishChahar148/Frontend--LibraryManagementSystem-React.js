import React, { Component } from 'react'
import studentImg from '../../assets/studentImg.jpg'
import {Link} from 'react-router-dom'
import {AiOutlineDoubleRight} from 'react-icons/ai'

export class student extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={studentImg} alt={"student image"} />
                    <div className="card-body">
                        <h5 className="card-title">Student Login</h5>
                        <p className="card-text">If you are a student click on the button below</p>
                        <Link to="/studentlibrary">
                            <button  className="btn btn-primary">Enter Library <AiOutlineDoubleRight style={{position:"relative", top:"5px"}} size="20px"/></button>
                        </Link>    
                    </div>
                </div>
            </div>
        )
    }
}

export default student
