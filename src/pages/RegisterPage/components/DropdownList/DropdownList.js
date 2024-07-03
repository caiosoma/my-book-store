import './DropdownList.css'

export default function DropdownList (props) {
    return (
        <div className='dropdownlist-main'>
            <label>{props.label}</label>
            <select>
                <option disabled selected>selecione o gênero..</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}