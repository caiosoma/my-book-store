import './TextField.css'

export default function TextField (props) {

    const handleChange = (e) => {
        props.dataCollected(e.target.value)
    }
    
    return (
        <div className='input-main'>
            <label>{props.label}</label>
            <input 
                value={props.value}
                onChange={handleChange} 
                placeholder={props.placeholder} 
            />
        </div>
    )
}