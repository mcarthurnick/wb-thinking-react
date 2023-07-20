import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'


const app = express();

const port = 8000;

let myId = 4;

//set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

ViteExpress.config({printViteDevServerHost: true})

const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];


//////////////      Routes    //////////////  

app.get('/api/invoices', (req, res) => {
    res.json(TEST_DATA)
})

app.post('/api/invoice', (req, res) => {
    console.log('req.body', req)
    const {description} = req.body;
    const newInvoiceRow = {
        id: myId,
        description: description,
        rate: 0,
        hours: 0,
        isEditing: true 
    }

    TEST_DATA.push(newInvoiceRow)
    myId += 1
 
    res.json(newInvoiceRow)
})

app.post('/api/invoice/delete/:id', (req, res) => {
    const {id} = req.params;
    const index = TEST_DATA.findIndex((invoice) => invoice.id === Number(id))  //Can do +id also
    
    if(index === -1){
        res.status(404).json({error: `Item with ID ${id} was not found`})
    } else {
    
        TEST_DATA.splice(index, 1)
        res.json({id: +id})
    }
})

app.post('/api/invoice/:id', (req, res) => {
    const {id} = req.params
    const {description, rate, hours} = req.body
    
    const index = TEST_DATA.findIndex((el) => el.id === +id)

    const item = TEST_DATA[index]

    //use ?? if there is no value to be changed, pass the old value through.

    if(description){
        item.description = description ?? item.description
    }
    if(+rate){
        item.rate = +rate ?? item.rate
    }
    if(+hours){
        item.hours = +hours ?? item.hours
    }

    res.json(item)

})






ViteExpress.listen(app, port, () => console.log(`Server running on http://localhost:${port}`))