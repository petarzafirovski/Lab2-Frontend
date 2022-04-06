import React from "react";
import {useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const BookAdd =(props)=>{
    useEffect(() => {
        document.title = `Add book`;
    });

    const history=useNavigate();
    const [category,setCategory] = useState(true);
    const [author,setAuthor] = useState(true);
    const [formData,updateFormData] = useState({
        name : "",
        category : -1,
        author : 0,
        availableCopies : 0
    })

    const handleChangeEvent=(event)=>{
        updateFormData({
            ...formData,
            [event.target.name] : event.target.value.trim()
        })
    }

    const onFormSubmit =(event)=>{
        event.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        if(author===0 || formData.author===0) {
            setAuthor(false);
        }else setAuthor(true);

        if(category===-1 || formData.category===-1){
            setCategory(false);
        }else setCategory(true)

        if(!author || !category){
            return;
        }

        props.onAddBook(name,category,author,availableCopies);
        history("books")
    }

    return(
        <div className="row mt-5 ml-3" style={{"marginLeft":"50px"}}>

            <div className="col-md-5">
                {
                    !category ? (
                        <div className={"col-md-5 alert-danger"}>Please select a category!</div>
                    )
                        :
                        ""
                }
                {
                    !author ? (
                        <div className={"col-md-5 alert-danger"}>Please select an author!</div>
                    )
                        :
                        ""

                }
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter product name"
                               onChange={handleChangeEvent}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Book copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Copies"
                               required
                               onChange={handleChangeEvent}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select  name="category" className="form-control"  onChange={handleChangeEvent}>
                            <option value={"-1"}>Select a category</option>
                            {props.categories.map((item)=>
                                <option value={item}>{item}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control"  onChange={handleChangeEvent}>
                            <option value={"0"}>Select an author</option>
                            {props.authors.map((item)=>
                                <option value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                    <div className={"col mb-3"}>
                        <div className={"row"}>
                            <div className={"col-sm-12 col-md-12"}>
                                <Link className={"btn btn-block btn-dark"} to={"/books"}>Back</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    );
}

export default BookAdd;