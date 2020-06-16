let express = require('express')
var cors = require('cors')
let app = express()

app.use(cors())


const bodyParser = require('body-parser')

require('./configs/database')


app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('/assets',require('./routers/propertyRouter'))



app.listen(8000)