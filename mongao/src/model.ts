import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;
export const ContactSchema = new Schema({
 title: {
 type: String,
 required : 'Titulo'
 },
 subtitle: {
    type: String
 },
 url: {
     type: String
 },
 author:{
    type : String,
 },
 comments: {
     type: Array
 },
 likes : {
     type : Number
 },
 name : { type : String},
 description : { type : String }
})