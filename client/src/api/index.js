/**
 * @class       : index
 * @author      : abj (abj@abj)
 * @created     : Wednesday Aug 25, 2021 18:52:12 IST
 * @description : index
 */

import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

