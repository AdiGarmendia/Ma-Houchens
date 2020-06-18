const remoteURL = "http://localhost:8088";

export default {
	get(id) {
		return fetch(`${remoteURL}/offenders/${id}`).then((result) =>
			result.json()
		);
	},
	getAll() {
		return fetch(`${remoteURL}/offenders`).then((result) => result.json());
	},
	delete(id) {
		return fetch(`${remoteURL}/offenders/${id}`, {
			method: "DELETE",
		}).then((result) => result.json());
	},
	post(newOffender) {
		return fetch(`${remoteURL}/offenders`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newoffender),
		}).then((data) => data.json());
	},
	update(editedOffender) {
		return fetch(`${remoteURL}/offenders/${editedOffender.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editedOffender),
		}).then((data) => data.json());
	},
};
