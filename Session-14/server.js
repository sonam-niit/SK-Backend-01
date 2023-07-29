const express= require('express');
const connectDB = require('./config');
const cookieParser= require('cookie-parser')
const userModel= require('./models/user')

const app = express();
//Express JSON for Body Parser
app.use(express.json());
app.use(cookieParser())
connectDB();


app.use("/api/auth",require('./routes/auth_route'))
app.use("/api/user",require('./routes/user_route'))
//start server on portNo 5000
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
