import Forms from "./components/Forms/Forms";

export default function RegisterPage () {

    const bookRegistered = (book) => {
        console.log(book)
    }
    return (
        <div>
            <Forms newBookToSell={bookRegistered}/>
        </div>
    )
}