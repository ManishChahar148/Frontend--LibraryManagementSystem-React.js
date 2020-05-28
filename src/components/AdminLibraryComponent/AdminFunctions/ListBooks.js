import React, { Component } from 'react' 
import axios from 'axios'
import './Style.css'
import {toast} from 'react-toastify'
import { AiOutlineFileAdd, AiOutlineDelete } from "react-icons/ai";
import { FaRupeeSign } from 'react-icons/fa'
 
toast.configure()
class ListBooks extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             books:[],
             incrCount:0
        }
    }

    componentDidMount(){
        console.log("reloading book data")
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

    deleteBook = (bookId) =>{
        axios.get('http://localhost:7000/api/deleteBook/'+bookId)
        .then(response =>{
            console.log(response)
            this.componentDidMount()
            toast.success('Book Deleted Successfully!', {position:toast.POSITION.BOTTOM_RIGHT, autoClose:1000})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    changeCountHandler = (event) =>{
        this.setState({
            incrCount:event.target.value
        })
    }

    addBookCount  = (bookId, prevCount)=>{
        
        let data = {
            increment:this.state.incrCount,
            bookId:bookId,
            prevCount:prevCount
        }
        console.log(data)
        axios.post('http://localhost:7000/api/incrementBook',data)
        .then(response =>{
            console.log(response)
            this.componentDidMount()
            toast.success(this.state.incrCount+ ' Books added to library!', {position:toast.POSITION.BOTTOM_RIGHT, autoClose:1000})
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {
        const { books } = this.state

        return (
            <div>
                <h2>Available Books in Library</h2>
                {
                books.length ? 
                books.map(book => 
                <div className="row myListBox">  
                    <div class="card mb-4 cardLift" style={{width: "18rem"}}>
                        <img style={{maxHeight:'200px'}} class="card-img-top" src={"http://localhost:7000/images/"+book.image} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title mb-0">{book.bookName}</h5>
                            written by
                            <h6 className="text-secondary">{book.authorName}</h6>
                            <p className="red">{book.bookCount} books Available  + 
                                <input onChange={this.changeCountHandler} style={{display:'inline'}}  type="number" className="form-control col-4 ml-2" placeholder="0" min="0"></input>
                            </p>
                            <p class="card-text">
                                <h6>Price : <FaRupeeSign style={{position:"relative", top:"1px"}} size="14px"/>{book.price}</h6>
                            </p>
                            <button onClick={()=> this.deleteBook(book.bookId)} class="btn btn-danger mb-2">Delete Book <AiOutlineDelete style={{position:"relative", top:"3px"}}/></button>
                            <br/>
                            <button onClick={()=> this.addBookCount(book.bookId, book.bookCount)} className="btn btn-success">Add <AiOutlineFileAdd style={{position:"relative", top:"3px"}}></AiOutlineFileAdd></button>
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
                <h6>No book Available</h6>
                }
            </div> 
        )
    }
}

export default ListBooks
