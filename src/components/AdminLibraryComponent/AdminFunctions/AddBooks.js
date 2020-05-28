import React, { Component } from 'react'
import defaultCover from '../../../assets/no-cover.gif'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
export class AddBooks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bookName:'',
             authorName:'',
             publisher:'',
             language:'',
             description:'',
             price:'',
             image:defaultCover,
             imageForMulter:'',
             displayFeedback:''
        }
        console.log("def" + defaultCover)
    }
    


    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            console.log("img")
            console.log(event.target.files[0])
            this.setState({
                imageForMulter:event.target.files[0]
            })
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    bookNameHandeler = (event)=>{
        this.setState({
            bookName:event.target.value
            
        })
        // console.log(event)
    }

    authorNameHandeler = (event)=>{
        this.setState({
            authorName:event.target.value
        })
    }

    publisherHandeler = (event)=>{
        this.setState({
            publisher:event.target.value
        })
    }

    languageHandeler = (event)=>{
        this.setState({
            language:event.target.value
        })
    }

    descriptionHandeler = (event)=>{
        this.setState({
            description:event.target.value
        })
    }

    priceHandeler = (event)=>{
        this.setState({
            price:event.target.value
        })
    }

    onSubmitHandeler = (event) =>{

        if(this.state.bookName === '' || this.state.authorName==='' || this.state.publisher==='' || this.state.language==='' ||
          this.state.description==='' || this.state.price==='' || this.state.imageForMulter==='' ){
              toast.error("Warning : All fields are mandatory",{position:toast.POSITION.BOTTOM_RIGHT})
          } 
        else{  
            let bookData = new FormData();
            bookData.append('Image', this.state.imageForMulter)
            bookData.append('bookName', this.state.bookName)
            bookData.append('authorName', this.state.authorName)
            bookData.append('publisher', this.state.publisher)
            bookData.append('language', this.state.language)
            bookData.append('description', this.state.description)
            bookData.append('bookCount', 3)
            bookData.append('bookId', Date.now().toString())
            bookData.append('price', this.state.price)

            console.log(bookData)
            console.log("submitting data")
            axios.post('http://localhost:7000/api/addBook',bookData)
            .then( response => {
                console.log(response)
                if(!response.data.msg.err)
                {
                    toast.success('Book Succesfully Added',{position:toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
                    
                }
                else{
                    toast.error('Err in Adding book',{position:toast.POSITION.BOTTOM_RIGHT, autoClose:2000})
                }
            })
            .catch(err => {
                console.warn(err)
            })
        }

        event.preventDefault()
        
        
        
    }

    

    render() {
        return (
            <div>
                <h2>Add Books</h2>
                <div className="row">
                    <div className="col-8 formTop"  >
                        <form onSubmit={this.onSubmitHandeler}> 
                            <div className="form-group"> 
                                <label>Book Name</label>
                                <input type="text" className="form-control" onChange={this.bookNameHandeler}></input>
                            </div>
                            <div className="form-group">
                                <label>Author Name</label>
                                <input type="text" className="form-control" onChange={this.authorNameHandeler}></input>
                            </div>
                            <div className="form-group">
                                <label>Publisher</label>
                                <input type="text" className="form-control" onChange={this.publisherHandeler}></input>
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <input type="text" className="form-control" onChange={this.languageHandeler}></input>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" onChange={this.descriptionHandeler}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="number" className="form-control" onChange={this.priceHandeler}></input>
                            </div>
                            <div className="from-group">
                                <label>Select Book Cover</label>
                                <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" className="form-control"/>
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-success">Add Book To Library</button>
                            <br></br>
                            <br></br>
                        </form>
                    </div>

                    {/* Display image */}
                    <div className="col-4">
                        <div style={{marginTop:"370px"}}>
                            <img height="250px"   src={this.state.image} />
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default AddBooks
