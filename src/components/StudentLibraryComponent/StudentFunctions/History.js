import React, { Component } from 'react'
import axios from 'axios'

export class History extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mybooks:[]
        }
    }
    

    componentDidMount(){
        axios.get('http://localhost:7000/api/issuedLogs')
        .then(res =>{
            console.log(res)
            this.setState({
                mybooks: res.data.data
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }


    render() {
        let {mybooks} = this.state
        return (
            <div> 
                <div>
                    <h2>Books Issued Logs</h2>   
                    {
                    mybooks.length ? 
                    mybooks.map(book => 
                    <div key={book.issueTime} className="row">
                        <div className="col-8 mybox">
                            <h5 className="bookname">Book Name : { book.book.bookName}</h5>
                            <p>Book Id : {book.book.bookId}</p>
                            <p>Book Issue Date : { (new Date(book.issueTime).getDate())+"/"+(new Date(book.issueTime).getMonth()+1)+"/"+(new Date(book.issueTime).getFullYear()) }</p>
                            <p>Book return Date : {book.return? <span className=" alert-success">{ (new Date(book.returnTime).getDate())+"/"+(new Date(book.returnTime).getMonth()+1)+"/"+(new Date(book.returnTime).getFullYear())} 
                            <p>
                            {
                            book.returnedAfterXDays > 10 ?
                            <span className="alert-danger">Book Returned After {book.returnedAfterXDays - 10} extra days, you have to pay fine</span>
                            :
                            <span>Thank You for returning book on time :)</span>
                            }
                            </p>
                            </span>: <span className="alert-danger">Not yet returned </span> }</p>
                        </div>
                        <div className="ml-5">
                            <img height="150px"  src={"http://localhost:7000/images/"+book.book.image} />
                        </div>  
                    </div>)
                        :
                    <h6>No book Available</h6>
                    }
                </div> 
            </div>
        )
    }
}

export default History
