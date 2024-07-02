const dbConnect=require('./mongodb')

const deleteDatabase= async()=>{
    console.log('deleteDatabase');
    let data =await dbConnect();
    let result = await data.deleteMany({name:"note 5"});
    console.warn(result)
    if (result.acknowledged) {
        console.log("record deleted");
    }
}

deleteDatabase();