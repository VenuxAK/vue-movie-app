import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovies = defineStore("movieStore", () => {
	// const base_url = "http://localhost:8000/api/v1";
	const base_url = "https://68ca-45-41-105-231.ngrok-free.app/api/v1";
	const getMovies = async (uri, page_no = 1) => {
		try {
			let response = await axios.get(base_url + uri + "?page=" + page_no);
			return response.data;
		} catch (error) {
			// console.log(error.response.data);
			return error.response.data ?? error;
		}
	};

	const getMovieDetail = async (id, image = false, video = false) => {
		try {
			let includeImages = image ? "/images" : "";
			let includeVideos = video ? "/videos" : "";
			let response = await axios.get(
				`${base_url}/movies/${id}/detail${includeImages}${includeVideos}`
			);
			if (!!response && !!response?.status === true) return response.data;
		} catch (error) {
			// console.log(error.response.data ?? error);
			return error.response.data ?? error;
		}
	};

	// movies/{id}/detail/casts
	const getMovieCasts = async (id) => {
		try {
			let response = await axios.get(
				`${base_url}/movies/${id}/detail/casts`
			);
			if (!!response && !!response?.status === true) return response.data;
		} catch (error) {
			// console.log(error.response.data ?? error);
			return error.response.data ?? error;
		}
	};

	// casts
	const getCasts = async (uri) => {
		try {
			let response = await axios.get(`${base_url}${uri}`);
			return response.data;
		} catch (error) {
			console.log(error.response.data);
			return error.response.data ?? error;
		}
	};

	// casts
	const getCastDetail = async (id) => {
		try {
			// /casts/{id}
			let response = await axios.get(`${base_url}/casts/${id}`);
			return response.data;
		} catch (error) {
			console.log(error.response.data);
			return error.response.data ?? error;
		}
	};

	return {
		getMovies,
		getMovieDetail,
		getMovieCasts,
		getCasts,
		getCastDetail,
	};
});
