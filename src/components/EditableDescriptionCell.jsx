import './InvoiceTable.css';

const EditableDescriptionCell = ({value, isEditing}) => {
    return isEditing ? (
        <td>
            <input type="text" value={value}/>
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}

export default EditableDescriptionCell