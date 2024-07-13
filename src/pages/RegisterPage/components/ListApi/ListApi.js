import './ListApi.css'

<<<<<<< HEAD
function ListApi ({text, name, options, handleChange, value}) {
=======
export default function ListApi ({text, name, options, handleChange, value}) {
>>>>>>> 943d65cd8239aa47ac35482097ae88106e6170a1
    return (
        <div className='list-main'>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}