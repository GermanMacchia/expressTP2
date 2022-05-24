import mongo from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const mongoClient = mongo.MongoClient
const uri = process.env.MONGO_URI
const client = new mongoClient(uri)

export default async function getConnection(){
	let instance = null

	if(instance == null){
		instance = await client.connect()
	}		
	
	return instance
}
