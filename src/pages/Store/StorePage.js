import Cards from './components/Cards/Cards'
import './StorePage.css'
import books from './json/db.json'

export default function StorePage () {
    return (
        <section>
            <div>
                {books.map((book) => {
                    return <Cards {...book} key={book.id} />
                })}
            </div>
        </section>
    )
}