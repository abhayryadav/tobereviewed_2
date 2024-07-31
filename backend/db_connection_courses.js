const {MongoClient}=require('mongodb')
//or
//const MongoClient=require('mongodb').MongoClient
const url='mongodb://localhost:27017'
const client  =new MongoClient(url)
 
async function getConnect_courses(){
    let connection = await client.connect();
    let connected_db=connection.db("web2")
    let connected_collection=connected_db.collection("queries")
    connected_collection.find({}).toArray().then((data)=>{
        console.log(data)
    }) 
    return connected_collection
    
}
module.exports = getConnect_courses;