const mongoose = require("mongoose");

if(process.env?.mongostring) {
    mongoose.connect(process.env.mongostring,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('🌐 Connected to mongoose'))
    .catch(err => console.log(`⭕ Mongoose Connection Error:\n ${err}`));
} else {
    console.log("▶ No Mongoose string provided.");
}
