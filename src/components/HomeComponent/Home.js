import React from 'react'
import Nav from '../NavComponent/Nav'
import Admin from '../AdminComponent/Admin'
import Student from '../StudentComponent/student'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <Student></Student>
                    </div>
                    <div className="col-6">
                        <Admin></Admin>
                    </div>
                </div>
        </div> 
      </div>
        
    )
}

export default Home
