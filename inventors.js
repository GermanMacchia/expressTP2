import connection from './connection.js'
import mongo from 'mongodb'

async function getInventors(){
	const clientMongo = await connection()
	const inventors = await clientMongo
				.db('sample_tp2')
				.collection('inventors')
				.find()
				.toArray();
	return inventors;
}

async function getInventor(id){
	const clientMongo = await connection()
	const inventor = await clientMongo
				.db('sample_tp2')
				.collection('inventors')
				.find({_id: new mongo.ObjectId(id)})
				.toArray();
	return inventor
}

async function addInventor(inventor){
	const clientMongo = await connection()
	const result = await clientMongo
				.db('sample_tp2')
				.collection('inventors')
				.insertOne(inventor)
	return result
}


export { getInventors, getInventor, addInventor}
