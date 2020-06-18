const remoteURL = "http://localhost:8088";

export default {
	get(id) {
		return fetch(`${remoteURL}/locations/${id}`).then((result) =>
			result.json()
		);
	},
	getAll() {
		return fetch(`${remoteURL}/locations`).then((result) => result.json());
	},
};