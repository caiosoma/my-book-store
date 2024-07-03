import Button from '../Button/Button'
import DropdownList from '../DropdownList/DropdownList'
import TextField from '../TextField/TextField'
import './Forms.css'

export default function Forms () {

    const genres = [
        'Terror',
        'Romance',
        'Ficção',
        'Drama'
    ]

    return (
        <section className='form-main'>
            <form>
                <h2>Cadastre um novo livro</h2>
                <TextField 
                    label='Título do livro'
                    placeholder='digite o nome do livro..'
                />
                <TextField 
                    label='Nome do Autor'
                    placeholder='digite o nome do autor..'
                />
                <DropdownList 
                    label='Selecione o gênero'
                    placeholder='selecione...'
                    itens={genres}
                />
                <Button>
                    Cadastrar
                </Button>
            </form>
        </section>
    )
}