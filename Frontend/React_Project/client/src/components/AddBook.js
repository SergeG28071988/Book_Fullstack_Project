import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

    const genres = [
        'Триллер',
        'Детектив',
        'Мистика',
        'Ужасы',
        'Фантастика',       
    ]; 

    const [photo, setPhoto] = useState(null); // Изначально пустая строка
    const [name, setName] = useState(''); // Изначально пустая строка
    const [description, setDescription] = useState(''); // Изначально пустая строка    
    const [genre, setGenre] = useState(''); // Изначально пустая строка
    const [price, setPrice] = useState(''); // Изначально пустая строка
    const [author, setAuthor] = useState(''); // Изначально пустая строка   

    const navigate = useNavigate();

    const AddBookInfo = async () => {
        let formfield = new FormData()       
        
        formfield.append('name', name)
        formfield.append('description', description)
        formfield.append('genre', genre)
        formfield.append('price', price)
        formfield.append('author', author)       

        if (photo != null){
            formfield.append('photo', photo)
        }

        try {
            const response = await axios.post('http://localhost:8000/api/books/', formfield);
            console.log(response.data);
            // Add your logic to handle successful order creation
            // For example, you can redirect the user or show a success message
            navigate('/');
        } catch (error) {
            console.error('Error adding order:', error);
            // Handle the error (e.g., display an error message to the user)
        }
    }

    return (
        <div>
            <h1>Добавить книгу</h1>
            <div className='container'>
                <div className='form-group'>
                    <div className='form-control'>     
                        <label>Выберите фото книги</label>                  
                        <input 
                            type='file' 
                            className='form-control form-control-lg'                             
                            name='photo'
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Введите название книги'
                            name='name' value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Введите описание'
                            name='description' value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>                    
                    <div className='form-control'>
                        <select 
                            className='form-control form-control-lg'
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option value="">Выберите жанр</option> 
                            {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                            ))}
                        </select>
                    </div>                   
                    <div className='form-control'>
                        <input
                            type='number' 
                            className='form-control form-control-lg' 
                            placeholder='Цена'
                            name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </div>    
                    <div className='form-control'>
                        <input 
                            type='text' 
                            className='form-control form-control-lg' 
                            placeholder='Введите автора'
                            name='author' value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>                     
                    
                    <button className='btn btn-primary' type="submit" 
                        onClick={AddBookInfo}>Добавить книгу</button>
                </div>
            </div>
        </div>
    );
}

export default AddBook;