export const Form = () => {
	const save = (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const phone = event.target.phone.value;

		window.Events.dispatch('SAVE', { name, email, phone });
	}

	return (
		<>
			<form onSubmit={save}>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<label>
					Email:
					<input type="email" name="email" />
				</label>
				<label>
					Number:
					<input type="number" name="phone" />
				</label>
				<button>Save</button>
			</form>
		</>
	);
}
