import React from "react";
import {useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const BookEdit =(props)=>{
    useEffect(()=>{
        document.title='Edit book'
    })

    const history=useNavigate();
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
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !== -1 ? formData.category : props.book.category;
        const author = formData.author !== 0 ? formData.author : props.book.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id,name,category,author,availableCopies);
        history("books")
    }

    return(
        <div className="row mt-5 ml-3" style={{"marginLeft":"50px"}}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChangeEvent}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Book copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.book.availableCopies}
                               onChange={handleChangeEvent}
                               onChange={handleChangeEvent}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control"  onChange={handleChangeEvent}>
                            {props.categories.map((item)=>
                                {
                                    if(props.book.category !== undefined && props.book.category === item)
                                        return <option selected={props.book.category} value={item}>{item}</option>
                                    else
                                        return <option value={item}>{item}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control"  onChange={handleChangeEvent}>
                            {props.authors.map((item)=> {
                                    if (props.book.author !== undefined &&
                                        props.book.author.id === item.id)
                                        return <option selected={props.book.author.id}
                                                       value={item.id}>{item.name}</option>
                                    else
                                        return <option value={item.id}>{item.name}</option>

                                }
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

export default BookEdit;