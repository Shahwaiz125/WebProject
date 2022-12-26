import mongoose from "mongoose";
import  express  from "express";

const apiKey = "mongodb+srv://Shahwaiz:03208055486@sp21.zvxtsyo.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery'=true);
mongoose.connect(apiKey, 
    {useNewUrlParser : true,
     useUnifiedTopology: true}
).then(() => console.log("Connected to the database."));
const app = express();
app.listen(3200, ()=> console.log("Server is running..."));