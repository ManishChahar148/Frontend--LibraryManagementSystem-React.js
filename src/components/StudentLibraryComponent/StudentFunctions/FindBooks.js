import React, { Component } from 'react' 
import {toast} from 'react-toastify'
import axios from 'axios'
import './Style.css'


toast.configure()
class FindBooks extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             books:[],
             searchString:''
        }

      
    }

    componentDidMount(){
        console.log("loading book data")
        axios.get('http://localhost:7000/api/fetchBooks')
        .then(response => {
            console.log(response.data);
            this.setState({
                books:response.data.data
            })
            
            
        })
        .catch(error => {
            console.log(error);
            
        })
    }

    searchSubmitHandeler = (event)=>{
        axios.get('http://localhost:7000/api/findBooks/'+this.state.searchString)
        .then(response => {
            console.log(response.data);
            this.setState({
                books:response.data.data
            })
            
            
        })
        .catch(error => {
            console.log(error);
            
        })

        event.preventDefault()
    }

    searchFieldHandeler = (event) =>{
        this.setState({
            searchString:event.target.value
        })
    }

    issueBook = (count, bookId) =>{
        if(count==0)
        {
            toast.error("Book out of stock!", {position: toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
        }
        else{
            let issueBookData = {
                bookId:bookId,
                count:count    
            }
            console.log(issueBookData)
            

            axios.post('http://localhost:7000/api/issueBook', issueBookData)
            .then(res =>{
                console.log(res)
                toast.success('Books Issued Successfully', {position: toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
                this.componentDidMount()
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }


    render() {
        const { books } = this.state

        return (
            <div>
                <h2>Available Books in Library</h2>
                
                <form onSubmit={this.searchSubmitHandeler}>
                    <input type="text" className="mr-4 form-control col-4" placeholder="search books here" onChange={this.searchFieldHandeler}/> 
                    <button className="btn btn-success buttonPos" >Search</button>
                </form>    
                {
                books.length ? 
                // if we have length>0 display the books
                books.map(book => 
                <div className="row">  
                    <div class="card mb-4" style={{width: "18rem"}}>
                        <img style={{maxHeight:'200px'}} class="card-img-top" src={"http://localhost:7000/images/"+book.image} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-0">{book.bookName}</h5>
                            written by
                            <h6 className="text-secondary">{book.authorName}</h6>
                            <p className="red">{book.bookCount} books Available</p>
                            <p class="card-text">
                                <h6>Price : Rs. {book.price}</h6>
                                <p className="alert alert-warning">If you lost this you have to pay extra charges</p>
                            </p>
                            <button onClick={()=>this.issueBook(book.bookCount, book.bookId)} class="btn btn-primary mb-2">Issue Book</button>
                        </div>
                    </div>
                    <div className="col-8" style={{textAlign:'justify'}}>
                        <h4>Book Description</h4>
                        <p>{book.description}</p>
                        <br></br>
                        <p >Publisher : {book.publisher}</p>
                        <p >Language : {book.language}</p>
                        <p >Book ID : {book.bookId}</p>
                    </div>
                </div>)
                :
                // if we do not have any book displau this
                <h6>No book Available</h6>
                }
            </div> 
        )
    }
}

export default FindBooks
