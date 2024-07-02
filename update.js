const dbConnect = require("./mongodb");

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        { name: "i phone" },
        { $set: { name: "max pro 5",price:550 } } 
    );
    console.warn(result);
}

updateData();
