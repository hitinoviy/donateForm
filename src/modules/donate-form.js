import {Settings} from '../core/constants/settings'
export class DonateForm {
	#totalAmount
	#createNewDonate
	#donateForm

	constructor(totalAmount, createNewDonate){
		this.#totalAmount = totalAmount
		this.#createNewDonate = createNewDonate
	}
	updateTotalAmount(newAmount){
		const title = document.querySelector('#total-amount')
		title.innerHTML = `${newAmount}${Settings.currency}`
	}
	#onCreateNewDonateSubmit(event){
		event.preventDefault();
		const newDonateValue = Number(event.target.amount.value);
        if (newDonateValue && this.#createNewDonate) {
            const newDonate = {
                date: new Date(),
                amount: newDonateValue,
            };
            this.#createNewDonate(newDonate);
            event.target.amount.value = '';
        }
	}
	render(){
		this.#donateForm =  document.createElement('form')
		this.#donateForm.className = 'donate-form'
		this.#donateForm.addEventListener('submit', this.#onCreateNewDonateSubmit.bind(this))

		const title = document.createElement('h1')
		title.id = 'total-amount';
		title.textContent = `${this.#totalAmount}${Settings.currency}`

		const label = document.createElement('label')
		label.className = 'donate-form__input-label'
		label.textContent = `Введите сумму в ${Settings.currency}`

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
		this.#donateForm.append(title, label, button)

		return this.#donateForm
	}
}