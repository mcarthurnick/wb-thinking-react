import './InvoiceTable.css';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableAddButton from './InvoiceTableAddButton'
import InvoiceTableRow from './InvoiceTableRow'
import { useState } from 'react'
import axios from 'axios'

let myId = 4

const InvoiceTable = ({initialInvoiceData}) => {
    const [invoiceList, setInvoiceList] = useState(initialInvoiceData)
    const [total, setTotal] = useState(0)

    console.log('invoiceList', invoiceList);

    const addInvoiceRow = async () => {

       const {data} = await axios.post('/api/invoice', {description: 'Description'})

       const newInvoice = {...data}

       setInvoiceList([...invoiceList, newInvoice])


        //set a base value of our current invoice list
        //create a new object that holds vales for new row
        //push that object into base value of invoice list
        //set our state invoice list to match the base 

       // const newInvoiceList = [...invoiceList]
        
        // const newInvoiceRow = {
        //     id: myId,
        //     description: 'Description',
        //     rate: '',
        //     hours: '',
        //     isEditing: true 
        // }

        // newInvoiceList.push(newInvoiceRow)

        // setInvoiceList(newInvoiceList)
        // myId += 1
    }

    const deleteInvoiceRow = async (id) => {

        const {data} = await axios.post(`/api/invoice/delete/${id}`)

        if(!data.error){
            const newInvoiceList = [...invoiceList]

        const index = newInvoiceList.findIndex((invoice) => invoice.id === id)
        newInvoiceList.splice(index, 1)
        setInvoiceList(newInvoiceList)
        }
    }   

    const rows = invoiceList.map((invoiceItem) => {
        const {id, description, rate, hours, isEditing} = invoiceItem;
        return (
            <InvoiceTableRow
                    key={id}
                    id={id}
                    initialIsEditing={isEditing}
                    initialInvoiceData={{description, rate, hours}}
                    onDeleteClick={() => deleteInvoiceRow(id)}
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
                <InvoiceTableAddButton onAddClick={addInvoiceRow}/>
            </tfoot>
        </table>
    )
}

export default InvoiceTable