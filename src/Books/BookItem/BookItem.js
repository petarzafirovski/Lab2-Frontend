import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

const BookItem =(props)=>{

    const markBookAsTaken=()=>{
            props.markAsTaken(props.book.id);
            if(props.book.availableCopies===0){
                alertUser();
            }
    }

    const alertUser=()=>{
        alert("Book is already taken!")
    }
    const deleteBook =()=>{
        props.onDelete(props.book.id);
    }

    return(
        <tr>
            <td>{props.book.name}</td>
            <td>{props.book.category.toString()}</td>
            <td>{props.book.author.name}</td>
            <td>{props.book.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={deleteBook}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={()=> {
                          props.onEdit(props.book.id)
                      }}
                      to={`/books/edit/${props.book.id}`}>Edit
                </Link>
                <Link className={"btn btn-success ml-2"}
                      onClick={ markBookAsTaken }
                      to={`/books/taken/${props.book.id}`}>Mark as taken
                </Link>
            </td>
        </tr>
    );
}

export default BookItem;