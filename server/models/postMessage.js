/**
 * @class       : postMessage
 * @author      : abj (abj@abj)
 * @created     : Tuesday Aug 24, 2021 23:29:56 IST
 * @description : postMessage
 */

import mongoose from 'mongoose';

//TYPESCRIPT:JAVASCRIPT == MONGOOSE:MONGODB

const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likeCount: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const PostMessage = mongoose.model('PostMessage', postSchema);

//THIS WILL ENABLE US TO USE REST QUERIES ON DATA IN MONGODB

export default PostMessage;
