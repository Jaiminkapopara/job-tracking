const { default: mongoose } = require("mongoose");

let isConnected = false

const connDb = async () => {
    if(isConnected){
        console.log('already conneected');
        return
    }

    try{
        await mongoose.connect(process.env.MONGO_URL)

        isConnected = true
        console.log('connected');
    }catch(e){
        console.log('connection error!');
        console.log(e);
    }
}

export default connDb