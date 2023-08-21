import axios from "axios";

// const base_url = "http://localhost:3000";
const base_url = "https://d6b7-45-41-105-225.ngrok-free.app";

const getMovies = async (uri) => {
	try {
		// await new Promise((resolve, reject) => {
		// 	setTimeout(resolve, 3000);
		// });
		let response = await axios.get(base_url + uri);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};

const getSeries = async () => {
	try {
		// await new Promise((resolve, reject) => {
		// 	setTimeout(resolve, 3000);
		// });
		let response = await axios.get(base_url + "/series");
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};

const getCasts = async () => {
	try {
		// await new Promise((resolve, reject) => {
		// 	setTimeout(resolve, 3000);
		// });
		let response = await axios.get(base_url + "/casts");
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
	}
};

export default () => {
	return {
		getMovies,
		getSeries,
		getCasts,
	};
};
