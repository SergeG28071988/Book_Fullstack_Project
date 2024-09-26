import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowBooks = () => {

    const [books, setBooks] = useState([])

    const [searchQuery, setSearchQuery] = useState(''); // Состояние для поиска

    const getBooks = async () => {
        const response = await axios.get('http://localhost:8000/api/books/') 
        // console.log(response.data)
        setBooks(response.data)
    }

    useEffect(() => {
        getBooks();
    }, [])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBooks = books.filter((book) => {
        return book.name.toString().includes(searchQuery); 
    });

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <div class="row text-center text-dark lh-2">
                 <h4>Список книг в БД</h4>
                 <div className="col-md-4 offset-md-4"> 
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Поиск по названию книги" 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                </div>
            </div>
            <br />
            <button className="btn btn-secondary" onClick={handlePrint}>Печать</button> <br /><br/>
            <table className="table table-hover table-striped table-bordered text-start">
                <thead>
                    <tr>
                        <th>Фото</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Жанр</th>
                        <th>Цена</th>
                        <th>Автор</th>                    
                        <th>Детали</th>
                    </tr>
                </thead>
                <tbody>
                       {filteredBooks.map((book, index) => (
                        <tr key={index}> 
                            <td><img src={book.photo} alt="Book Photo" style={{ maxWidth: '100px' }} /></td> 
                            <td>{book.name}</td>
                            <td>{book.description}</td>
                            <td>{book.genre}</td>
                            <td>{book.price}</td>
                            <td>{book.author}</td>                           
                            <td> 
                                <Link to={`/book/${book.id}`}> 
                                    <button className="btn btn-primary btn-sm">Детали</button> 
                                </Link>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowBooks;