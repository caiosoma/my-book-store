import './TextField.css'

export default function TextField (props) {

    const handleChange = (e) => {
        console.log(e.target.value)
    }
    
    return (
        <div className='input-main'>
            <label>{props.label}</label>
            <input onChange={handleChange} placeholder={props.placeholder} />
        </div>
    )
}