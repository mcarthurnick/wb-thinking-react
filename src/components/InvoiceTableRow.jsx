import './InvoiceTable.css';
import EditableRowModeButtons from './EditableRowModeButtons';
import EditableDescriptionCell from './EditableDescriptionCell';
import EditableRateCell from './EditableRateCell';
import EditableHoursCell from './EditableHoursCell';
import formatCurrency from '../utils/formatCurrency';

const InvoiceTableRow = ({initialInvoiceData, initialIsEditing}) => {
    const {description, rate, hours} = initialInvoiceData

    return (
        <tr>
            <EditableRowModeButtons isEditing={initialIsEditing}/>
            <EditableDescriptionCell value={description} isEditing={initialIsEditing}/>
            <EditableRateCell value={rate} isEditing={initialIsEditing}/>
            <EditableHoursCell value={hours} isEditing={initialIsEditing}/>
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}

export default InvoiceTableRow