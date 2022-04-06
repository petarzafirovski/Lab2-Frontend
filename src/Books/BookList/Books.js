import React, {Component} from "react";
import {Link} from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import ReactPaginate from "react-paginate";

class Books extends Component{
    constructor(props) {
        super(props);
        this.state={
            page:0,
            size:5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getRenderedBooks(offset,nextPageOffset);

        return(
            <div className={"container mm-4 mt-5"}>
                {/*<button onClick={this.show}>click</button>*/}
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available copies</th>
                            </tr>
                            </thead>
                            <tbody>
                                {books}
                            </tbody>
                        </table>
                    </div>

                    <ReactPaginate previousLabel={"Back"}
                                   nextLabel={"Next"}
                                   breakLabel={<a href="/#">...</a>}
                                   breakClassName={"break-me"}
                                   pageClassName={"ml-1"}
                                   pageCount={pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination m-4 justify-content-center"}
                                   activeClassName={"active"}
                                   pageLinkClassName={"m-2"}
                    />

                    <div className={"col mb-3"}>
                        <div className={"row"}>
                            <div className={"col-sm-12 col-md-12"}>
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.title='Home-Books'
    }

    show=()=>{
        console.log(this.props.categories)
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        //console.log(data)
        this.setState({
            page: selected
        })
    }


    getRenderedBooks = (offset, nextPageOffset) => {
        return this.props.books.map((item,index) => {
            return (
                <BookItem book={item} onDelete={this.props.onDelete} onEdit={this.props.onEdit} markAsTaken={this.props.markAsTaken}/>
            );
        }).filter((book,index)=>{
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Books