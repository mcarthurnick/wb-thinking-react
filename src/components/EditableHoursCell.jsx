import './InvoiceTable.css';

const EditableHoursCell = ({value, isEditing}) => {
    return isEditing ? (
        <td>
            $<input type="text" value={value}/> /hr
        </td>
    ) : (
        <td>
            {value}
        </td>
    )
}

export default EditableHoursCell