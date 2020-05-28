import React, { Component } from 'react'
import axios from 'axios'
import { toastify, toast } from 'react-toastify' 

toast.configure()
export class TrackBooks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mybooks:[]
        }
    }
    

    componentDidMount(){
        axios.get('http://localhost:7000/api/issuedBooks')
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


    returnBook = (count, bookId, issueId, issueTime)=>{
        let returnData = {
            bookCount: count,
            bookId: bookId,
            issueId: issueId,
            issueTime: issueTime
        }
        console.log(returnData)

        axios.post('http://localhost:7000/api/returnBook', returnData)
        .then(res =>{
            console.log(res)
            this.componentDidMount()
            toast.success('Book returned successfully', {position: toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
        })
        .catch(err =>{
            console.log(err);
            
        })

    }

    render() {
        let {mybooks} = this.state
        return (
            <div>
                <div>
                    <h2>Books Issued</h2>   
                    {
                    mybooks.length ? 
                    mybooks.map(book => 
                    <div key={book.issueTime} className="row">
                        <div className="col-8 mybox">
                            <h5 className="bookname">Book Name : { book.book.bookName}</h5>
                            <p>Book Id : {book.book.bookId}</p>
                            <p>Book Issue Date : { (new Date(book.issueTime).getDate())+"/"+(new Date(book.issueTime).getMonth()+1)+"/"+(new Date(book.issueTime).getFullYear()) }</p>
                                
                            <button className="btn btn-primary mb-2" onClick={() => this.returnBook(book.book.bookCount, book.book.bookId, book.issueId, book.issueTime)}>Return Book</button>
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

export default TrackBooks
