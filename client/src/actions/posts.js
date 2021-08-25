import { async } from 'regenerator-runtime';
import * as api from '../api';

// ACTION CREATORS ARE FUNCTIONS THAT RETURN AN ACTION
// ACTION IS OBJECT HAVING TYPE AND PAYLOAD

const getPosts = () => async (dispatch) => {
	try
	{
		const {data} = await api.fetchPosts();
		dispatch({type: 'FETCH_ALL', payload: data});
	}
	catch (error)
	{
		console.error(error);
	}
	return action;
};