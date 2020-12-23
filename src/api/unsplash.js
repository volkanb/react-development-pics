import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID M33uc8tA-_WEEzUoTF8ztDYpOAbzl80oiy4jUBU5FcI',
	},
});
