import './InvoiceTable.css';
import EditableRowModeButtons from './EditableRowModeButtons';
import EditableDescriptionCell from './EditableDescriptionCell';
import EditableRateCell from './EditableRateCell';
import EditableHoursCell from './EditableHoursCell';
import formatCurrency from '../utils/formatCurrency';

import { useState } from 'react';

const InvoiceTableRow = ({initialInvoiceData, initialIsEditing, onDeleteClick}) => {
    const [isEditing, setIsEditing] = useState(initialIsEditing)
    const [description, setDescription] = useState(initialInvoiceData.description)
    const [rate, setRate] = useState(initialInvoiceData.rate)
    const [hours, setHours] = useState(initialInvoiceData.hours)

    const setEditMode = () => setIsEditing(true)
    const setNormalMode = () => setIsEditing(false)

    return (
        <tr>
            <EditableRowModeButtons isEditing={isEditing} onEditClick={setEditMode} onSaveClick={setNormalMode} deleteClick={onDeleteClick}/>
            <EditableDescriptionCell value={description} isEditing={isEditing} onValueChange={setDescription}/>
            <EditableRateCell value={rate} isEditing={isEditing} onValueChange={setRate}/>
            <EditableHoursCell value={hours} isEditing={isEditing} onValueChange={setHours}/>
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}

export default InvoiceTableRow