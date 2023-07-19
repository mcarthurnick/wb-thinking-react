import './InvoiceTable.css';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableAddButton from './InvoiceTableAddButton'
import InvoiceTableRow from './InvoiceTableRow'

const InvoiceTable = ({initialInvoiceData}) => {

    const rows = initialInvoiceData.map((invoiceItem) => {
        const {id, description, rate, hours} = invoiceItem;
        return (
            <InvoiceTableRow
                    key={id}
                    initialIsEditing={false}
                    initialInvoiceData={{description, rate, hours}}
                />
        )
    })

    return (
        <table>
            <thead>
                <InvoiceTableHeader />
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <InvoiceTableAddButton />
            </tfoot>
        </table>
    )
}

export default InvoiceTable