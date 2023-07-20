import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'


const app = express();

const port = 8000;

//set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

ViteExpress.config({printViteDevServerHost: true})

//////////////      Routes    //////////////  

ViteExpress.listen(app, port, () => console.log(`Server running on http://localhost:${port}`))