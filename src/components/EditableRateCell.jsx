import './InvoiceTable.css';
import formatCurrency from '../utils/formatCurrency'

const EditableRateCell = ({value, isEditing}) => {
    return isEditing ? (
        <td>
            $<input type="text" value={value}/> /hr
        </td>
    ) : (
        <td>
            {formatCurrency(value)}/hr
        </td>
    )
}

export default EditableRateCell