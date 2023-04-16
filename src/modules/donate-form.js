export class DonateForm {
	render(){
		const form = document.createElement('form')
		form.className = 'donate-form'

		const title = document.createElement('h1')
		title.id = 'total-amount';
		title.textContent = '28$'
		form.append(title);

		const label = document.createElement('label')
		label.className = 'donate-form__input-label'
		label.textContent = 'Введите сумму в $'
		form.append(label)

		const input = document.createElement('input')
		input.classList = 'donate-form__donate-input'
		input.setAttribute('type', 'number')
		input.setAttribute('max', '100')
		input.setAttribute('min', '1')
		input.setAttribute('name', 'amount')
		input.setAttribute('required', '')
		label.append(input);

		const button = document.createElement('button')
		button.className = 'donate-form__submit-button'
		button.setAttribute('type', 'submit')
		button.textContent = 'Задонатить'
		form.append(button)

		return form
	}
}