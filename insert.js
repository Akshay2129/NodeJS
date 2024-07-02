const dbConnect = require('./mongodb');

const insert = async () => {
    const collection = await dbConnect();
    const result = await collection.insertMany([
        {
            name: 'note 5',
            brand: 'vivo',
            price: 45200,
            category: 'mobile'
        }, 
        {
            name: 'max 5',
            brand: 'vivo',
            price: 45200,
            category: 'mobile'
        }, 
        {
            name: 'note 45',
            brand: 'vivo',
            price: 6465465,
            category: 'mobile'
        }, 
        {
            name: 'note 15',
            brand: 'vivo',
            price: 64654,
            category: 'mobile'
        }
    ]);
    if (result.acknowledged) {
        console.log('Documents inserted:', result.insertedCount);
    }
}

insert();
