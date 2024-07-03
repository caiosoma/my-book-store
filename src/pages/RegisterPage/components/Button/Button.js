import './Button.css'

export default function Button (props) {
    return (
        <button className='button-main'>
            {props.children}
        </button>
    )
}