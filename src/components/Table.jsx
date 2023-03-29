import React from "react";

export const Table = () => {

	const refInput = React.useState(null);

	React.useEffect(() => {
		fetch('./db.json')
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
	}, [])

	const searchValue = () => {
		console.log(refInput.current.value);
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
						<li className="table__item tableContent">
							<span className="table__name">Jane Cooper</span>
							<span className="table__company">Microsoft</span>
							<span className="table__phone">(225) 555-0118</span>
							<span className="table__email">jane@microsoft.com</span>
							<span className="table__country">United States</span>
							<span className="table__status status">Active</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Floyd Miles</span>
							<span className="table__company">Yahoo</span>
							<span className="table__phone">(205) 555-0100</span>
							<span className="table__email">floyd@yahoo.com</span>
							<span className="table__country">Kiribati</span>
							<span className="table__status status inactive">Inactive</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Ronald Richards</span>
							<span className="table__company">Adobe</span>
							<span className="table__phone">(302) 555-0107</span>
							<span className="table__email">ronald@adobe.com</span>
							<span className="table__country">Israel</span>
							<span className="table__status status inactive">Inactive</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Marvin McKinney</span>
							<span className="table__company">Tesla</span>
							<span className="table__phone">(252) 555-0126</span>
							<span className="table__email">marvin@tesla.com</span>
							<span className="table__country">Iran</span>
							<span className="table__status status">Active</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Jerome Bell</span>
							<span className="table__company">Google</span>
							<span className="table__phone">(629) 555-0129</span>
							<span className="table__email">jerome@google.com</span>
							<span className="table__country">Réunion</span>
							<span className="table__status status">Active</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Kathryn Murphy</span>
							<span className="table__company">Microsoft</span>
							<span className="table__phone">(406) 555-0120</span>
							<span className="table__email">kathryn@microsoft.com</span>
							<span className="table__country">Curaçao</span>
							<span className="table__status status">Active</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Jacob Jones</span>
							<span className="table__company">Yahoo</span>
							<span className="table__phone">(208) 555-0112</span>
							<span className="table__email">jacob@yahoo.com</span>
							<span className="table__country">Brazil</span>
							<span className="table__status status">Active</span>
						</li>
						<li className="table__item tableContent">
							<span className="table__name">Kristin Watson</span>
							<span className="table__company">Facebook</span>
							<span className="table__phone">(704) 555-0127</span>
							<span className="table__email">kristin@facebook.com</span>
							<span className="table__country">Åland Islands</span>
							<span className="table__status status inactive">Inactive</span>
						</li>
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