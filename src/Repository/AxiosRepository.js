import instance from "../CustomAxios/Axios";

const AxiosRepository={
    fetchBooks : () =>{
        return instance.get("/books");
    },
    fetchAuthors : () =>{
        return instance.get("/authors");
    },
    fetchCountries : () =>{
        return instance.get("/countries");
    },
    deleteBook : (id) =>{
        return instance.delete(`/books/delete/${id}`)
    },
    addBook : (name,category,authorId,availableCopies)=>{
        return instance.post("/books/add",{
            "name":name,
            "category":category,
            "authorId":authorId,
            "availableCopies":availableCopies
        })
    },
    editBook : (id,name,category,authorId,availableCopies)=>{
        return instance.put(`/books/edit/${id}`,{
            "id":id,
            "name":name,
            "category":category,
            "authorId":authorId,
            "availableCopies":availableCopies
        })
    },
    getBook : (id)=>{
        return instance.get(`/books/${id}`);
    },
    getCategories: ()=>{
        return instance.get("/books/book-categories");
    },
    markAsTaken: (id)=>{
        return instance.put(`/books/taken/${id}`);
    }
}

export default AxiosRepository;