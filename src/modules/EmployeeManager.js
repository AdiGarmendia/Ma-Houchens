const remoteURL = "http://localhost:8088";

export default {
	getEmployee(email) {
		return fetch(`${remoteURL}/employees/${email}`).then((result) =>
			result.json()
		);
	},
	getAll() {
		return fetch(`${remoteURL}/employees/`).then((result) => result.json());
	},
	post(newEmployee) {
		return fetch(`${remoteURL}/employees`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newEmployee),
		}).then((data) => data.json());
	},
	delete(id) {
		return fetch(`${remoteURL}/employees/${id}`, {
			method: "DELETE",
		}).then((result) => result.json());
	},
};
