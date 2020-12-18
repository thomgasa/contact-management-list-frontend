const BASE_URL = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			getContacts: () => {
				fetch(BASE_URL + "agenda/Thomas_Gamboa")
					.then(response => response.json())
					.then(contactList =>
						setStore({
							contacts: contactList
						})
					);
			}
			deleteContact: () => {
				fetch((BASE_URL + "id"), {
					method: "DELETE",
					headers:{'Content-Type': 'application/json'}
				})
				.then(response => response.json())
				.then(contactList =>
					
					)
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
