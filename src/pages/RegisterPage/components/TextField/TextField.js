import './TextField.css'

export default function TextField (props) {

    const handleChange = (e) => {
        props.dataCollected(e.target.value)
    }
    
    return (
        <div className='input-main'>
            <label>{props.label}</label>
            <input 
                required={props.required}
                value={props.value}
                onChange={handleChange} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}