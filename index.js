// const path = require("path");
// const fs = require("fs");

// const dirpath = path.join(__dirname, "crud");

// const filepath = `${dirpath}/apple.txt`;


// fs.writeFileSync(filepath, "This is the content of the file");

// console.log("File created successfully at", filepath);
// fs.writeFileSync(filepath, "This is the content of the file);

// fs.readFile(filepath,'utf8',(err, data) => {
//     console.log(data);
// })

// fs.appendFile(filepath,'and file name is apple.txt',(err, data) => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.rename(filepath,`${dirpath}/fruit.txt`,(err, data) =>{
//     if (err) {
//         console.log(err);
//     }
// })

// fs.unlinkSync(`${dirpath}/apple.txt`)


// const express = require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     console.log("data sent by browser",req.query.name);
//     res.send('wellcome :'+req.query.name);
// });

// app.get('/about',(req,res)=>{
//     res.send('about page');
// });

// app.get('/contact',(req,res)=>{
//     res.send('contact page');
// });

// app.listen(3000,()=>{
//     console.log('listening on port 3000');
// });

// const express = require('express');
// const app = express();
// const path= require('path');
// const publicPath=path.join(__dirname, 'public');

// app.use(express.static(publicPath));

// app.listen(3000,()=>{
//     console.log('listening on port 3000');
// })



// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     });
// })
// console.warn(dbConnect());

// const dbConnect = require('./mongodb')

// dbConnect().then((resp) => {
//     resp.find({ name: 'm 40' }).toArray().then((data) => {
//         console.log(data);
//     })
// })

// const main = async () => {

//     let data = await dbConnect();
//     data = await data.find({ name: "m 40" }).toArray();
//     console.warn(data);
// }
// main()