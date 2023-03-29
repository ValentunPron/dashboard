import React from "react";
import axios from "axios";
import { tab } from "@testing-library/user-event/dist/tab";

const userAPI = [
	{
		name: "Jane Cooper",
		company: "Microsoft",
		phone: "(225) 555-0118",
		email: "jane@microsoft.com",
		country: "United States",
		status: true
	},
	{
		name: "Floyd Miles",
		company: "Yahoo",
		phone: "(205) 555-0100",
		email: "floyd@yahoo.com",
		country: "Kiribati",
		status: false
	},
	{
		name: "Ronald Richards",
		company: "Adobe",
		phone: "(302) 555-0107",
		email: "ronald@adobe.com",
		country: "Israel",
		status: false
	},
	{
		name: "Marvin McKinney",
		company: "Tesla",
		phone: "(252) 555-0126",
		email: "marvin@tesla.com",
		country: "Iran",
		status: true
	},
	{
		name: "Jerome Bell",
		company: "Google",
		phone: "(629) 555-0129",
		email: "jerome@google.com",
		country: "Réunion",
		status: true
	},
	{
		name: "Kathryn Murphy",
		company: "Microsoft",
		phone: "(406) 555-0120",
		email: "kathryn@microsoft.com",
		country: "Curaçao",
		status: true
	},
	{
		name: "Jacob Jones",
		company: "Yahoo",
		phone: "(208) 555-0112",
		email: "jacob@yahoo.com",
		country: "Brazil",
		status: true
	},
	{
		name: "Kristin Watson",
		company: "Facebook",
		phone: "(704) 555-0127",
		email: "kristin@facebook.com",
		country: "Åland Islands",
		status: false
	},

]

function searchByName(name, contacts) {
	return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
}

function searchByCompany(name, contacts) {
	return contacts.filter(contact => contact.company.toLowerCase().includes(name.toLowerCase()));
}

function searchByNumber(name, contacts) {
	return contacts.filter(contact => contact.phone.toLowerCase().includes(name.toLowerCase()));
}

function searchByEmail(name, contacts) {
	return contacts.filter(contact => contact.email.toLowerCase().includes(name.toLowerCase()));
}


function searchByCountry(name, contacts) {
	return contacts.filter(contact => contact.country.toLowerCase().includes(name.toLowerCase()));
}




export const Table = () => {

	const refInput = React.useState(null);
	const [table, setTable] = React.useState([]);

	React.useEffect(() => {
		setTable(userAPI);
	}, [])

	const searchValue = () => {
		const value = refInput.current.value;
		if (searchByName(value, userAPI).length > 0) {
			setTable(searchByName(value, userAPI));
		} else if (searchByCompany(value, userAPI).length > 0) {
			setTable(searchByCompany(value, userAPI))
		} else if (searchByNumber(value, userAPI).length > 0) {
			setTable(searchByNumber(value, userAPI))
		} else if (searchByEmail(value, userAPI).length > 0) {
			setTable(searchByEmail(value, userAPI))
		} else if (searchByCountry(value, userAPI).length > 0) {
			setTable(searchByCountry(value, userAPI))
		} else {
			setTable([]);
		}
	}

	return (
		<div className="table">
			<div className="table__body">
				<div className="table__top">
					<div className="table__top-text">
						<h3 className="table__top-title">All Customers</h3>
						<span className="table__top-subtitle">Active Members</span>
					</div>
					<div className="table__searh">
						<button className="table__search-button" onClick={searchValue} tabIndex={4}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7E7E7E" xmlns="http://www.w3.org/2000/svg">
								<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<input ref={refInput} className="table__top-input" placeholder="Search" type="text" tabIndex={3} />
					</div>
				</div>
				<div className="table__content">
					<ul className="table__list">
						<li className="table__item top">
							<span className="table__name">Customer Name</span>
							<span className="table__company">Company</span>
							<span className="table__phone">Phone Number</span>
							<span className="table__email">Email</span>
							<span className="table__country">Country</span>
							<span className="table__status">Status</span>
						</li>
						{
							table.length > 1
								? table.map((obj) => (
									<li className="table__item tableContent">
										<span className="table__name">{obj.name}</span>
										<span className="table__company">{obj.company}</span>
										<span className="table__phone">{obj.phone}</span>
										<span className="table__email">{obj.email}</span>
										<span className="table__country">{obj.country}</span>
										{
											obj.status
												? <span className="table__status status">Active</span>
												: <span className="table__status status inactive">Inactive</span>
										}
									</li>
								))
								: <h3 className="table__not-found">User not found</h3>
						}
					</ul>
				</div>
				<div className="table__bottom">
					<span className="table__bottom-text">Showing data 1 to 8 of  256K entries</span>
					<div className="table__action">
						<button className="table__bottom-button" tabIndex={2}>
							<svg width="5" height="7" viewBox="0 0 5 7" fill="#404B52" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z" />
							</svg>
						</button>
						<button className="table__bottom-button active" tabIndex={2}>1</button>
						<button className="table__bottom-button" tabIndex={2}>2</button>
						<button className="table__bottom-button" tabIndex={2}>3</button>
						<button className="table__bottom-button" tabIndex={2}>4</button>
						<span>...</span>
						<button className="table__bottom-button" tabIndex={2}>40</button>
						<button className="table__bottom-button" tabIndex={2}>
							<svg width="5" height="7" viewBox="0 0 5 7" fill="#404B52" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}