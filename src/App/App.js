import './App.css';
import {Component} from "react";
import AxiosRepository from "../Repository/AxiosRepository";
import {Route,BrowserRouter,Routes,Navigate} from "react-router-dom";
import Header from "../Header/Header";
import Countries from "../Countrites/Countries";
import Authors from "../Authors/Authors";
import Books from "../Books/BookList/Books";
import BookAdd from "../Books/AddBook/BookAdd";
import BookEdit from "../Books/EditBook/BookEdit";
import Categories from "../Categories/Categories";

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      books:[],
      authors:[],
      countries:[],
      selectedBook:{},
      categories:[]
    }
  }

  render() {
    return(
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path={"/books"}
            element={
            <Books books={this.state.books}
            onDelete={this.deleteBook}
            onEdit={this.getBook}
            categories={this.state.categories}
            markAsTaken={this.markBookAsTaken}/>
            }
            />
             <Route path={"/books/add"}
             element={
                 <BookAdd
                     categories={this.state.categories}
                     authors={this.state.authors}
                     onAddBook={this.addBook}
                     />
             }
             />
              <Route path={"/books/edit/:id"} element={
                  <BookEdit
                      categories={this.state.categories}
                      authors={this.state.authors}
                      onEditBook={this.editBook}
                      book={this.state.selectedBook}
                  />
              }
              />
            <Route path={"/authors"} element={<Authors authors={this.state.authors}/>}/>
            <Route path={"/countries"} element={<Countries countries={this.state.countries}/>}/>
            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
            <Route path="*" element={<Navigate to={"/books"}/>}/>
          </Routes>
        </BrowserRouter>
    );
  }


  componentDidMount() {
    this.loadCountries();
    this.loadBooks();
    this.loadAuthors();
    this.getCategories();
  }


    loadBooks =()=>{
    AxiosRepository.fetchBooks()
        .then(data=>{
          this.setState({
            books:data.data
          })
        })
  }

  loadAuthors=()=>{
    AxiosRepository.fetchAuthors()
        .then(data=>{
          this.setState({
            authors:data.data
          })
        })
  }

  loadCountries=()=>{
    AxiosRepository.fetchCountries()
        .then(data=>{
          this.setState({
            countries:data.data
          })
        })
  }

  deleteBook=(id)=>{
      AxiosRepository.deleteBook(id)
          .then(()=>{
              this.loadBooks();
          })
  }

  addBook=(name,category,authorId,availableCopies)=>{
      AxiosRepository.addBook(name,category,authorId,availableCopies)
          .then(()=>{
              this.loadBooks();
          })
  }

  editBook=(id,name,category,authorId,availableCopies)=>{
      AxiosRepository.editBook(id,name,category,authorId,availableCopies)
          .then(()=>{
              this.loadBooks();
          })
  }

    getBook = (id) =>{
        AxiosRepository.getBook(id)
            .then((data)=>{
                this.setState({
                    selectedBook :data.data
                })
            })
    }

    getCategories =()=>{
        AxiosRepository.getCategories()
            .then((data)=>{
                this.setState({
                    categories :data.data
                })
            })
    }

    markBookAsTaken=(id)=>{
      AxiosRepository.markAsTaken(id)
          .then(()=>{
              this.loadBooks();
          })
    }
}

export default App;
