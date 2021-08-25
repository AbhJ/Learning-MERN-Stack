/**
 * @class       : posts
 * @author      : abj (abj@abj)
 * @created     : Tuesday Aug 24, 2021 20:00:01 IST
 * @description : posts
 */

//THIS FILE HAS BEEN CREATED AS CONTROLLER TO BE DIRECTED BY ROUTES

export const getPosts = async (req, res) => {
	try{
		//TO MAKE SLOW FUNCTION ASYNCHRONOUS WE ADD await
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	}
	catch(error){
		res.status(404).json(error);
	}
};

export const createPosts = (req, res) => {
	res.send('Post Creation');
	const post = req.body;
	const newPost = new PostMessage(post);
	try{
		await newPost.save();
		res.status(201).json(newPost);
	}
	catch(error){
		res.status(409).json({message: error});
	}
};

