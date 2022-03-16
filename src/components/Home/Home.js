import { useEffect, useState } from 'react';

export const Home = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		window.Events.listen('SAVE', saveContact);
	}, []);

	const saveContact = ({ name, email, phone }) => {
		setContacts((prev) => [...prev, { name, email, phone }]);
	}

	return (
		<>
			{contacts.length <= 0 && `No contacts found`}
			{
				contacts.length > 0 && <table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						{
							contacts.map((contact, index) => (
								<tr key={index}>
									<td>{contact.name}</td>
									<td>{contact.email}</td>
									<td>{contact.phone}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</>
	);
}
