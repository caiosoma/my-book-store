import './ListApi.css'

export default function ListApi ({text, name, options, handleChange, value}) {
    return (
        <div className='list-main'>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.genre}
                    </option>
                ))}
            </select>
        </div>
    )
}