import './TextField.css'

export default function TextField (props) {
    return (
        <div className='input-main'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}