

export default function Cards (id, capa, titulo) {
    return (
        <section className='card-main'>
            <div className='card-registered'>
                <img src={capa} alt='capa do livro' />
                <h2>{titulo}</h2>
                <button>Comprar</button>
            </div>
        </section>
    )
}