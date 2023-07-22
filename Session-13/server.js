const express= require('express');
const connectDB = require('./config');

const app = express();
//Express JSON for Body Parser
app.use(express.json());
connectDB();

app.use("/api/auth",require('./routes/auth_route'))
//start server on portNo 5000
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
