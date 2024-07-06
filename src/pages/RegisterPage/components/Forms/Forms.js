import { useState } from 'react'
import Button from '../Button/Button'
import DropdownList from '../DropdownList/DropdownList'
import TextField from '../TextField/TextField'
import './Forms.css'

export default function Forms (props) {

    const [book, setBook] = useState('')
    const [autor, setAutor] = useState('')
    const [genre, setGenre] = useState('')

    const genres = [
        'Terror',
        'Romance',
        'Ficção',
        'Drama',
        'Poesia'
    ]

    function newBook (e) {
        e.preventDefault()
        props.newBookToSell({
            Livro: book,
            Autor: autor,
            Gênero: genre,
        })
    }

    return (
        <section className='form-main'>
            <form onSubmit={newBook}>
                <h2>Cadastre um novo livro</h2>
                <TextField 
                    required={true}
                    label='Título do livro'
                    placeholder='digite o nome do livro..'
                    value={book}
                    dataCollected={setBook}
                />
                <TextField 
                    required={true}
                    label='Nome do Autor'
                    placeholder='digite o nome do autor..'
                    value={autor}
                    dataCollected={setAutor}
                />
                <DropdownList 
                    required={true}
                    label='Selecione o gênero'
                    placeholder='selecione...'
                    itens={genres}
                    value={genre}
                    dataCollected={setGenre}
                />
                <Button>
                    Cadastrar
                </Button>
            </form>
        </section>
    )
}