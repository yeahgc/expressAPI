const express = require('express') ;
const cors = request('cors') ;
let app = express() ;

app.use(cors());
app.use('/api', apiRouter)



app.listn(3000);