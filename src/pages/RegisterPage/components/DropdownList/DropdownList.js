import './DropdownList.css'

export default function DropdownList (props) {
    return (
        <div className='dropdownlist-main'>
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.dataCollected(event.target.value)}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}