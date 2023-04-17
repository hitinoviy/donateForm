import * as Utils from '../core/utils/index'
import {Settings} from '../core/constants/settings'


export class DonateList{
	#donateList
	#donatesWrapper


	constructor(donates){
		this.#donateList = donates
	}
	#createDonateItem(){
		this.#donatesWrapper.innerHTML = ''
		this.#donateList.forEach((item)=>{
			const donateItemHtml = document.createElement('div')
			donateItemHtml.className = 'donate-item'
			donateItemHtml.innerHTML = `${Utils.getFormattedTime(item['date'])} - <b>${item['amount']}${Settings.currency}</b>`
			this.#donatesWrapper.append(donateItemHtml)
		})
		
		return this.#donatesWrapper
	}
	updateDonates(updateDonates){
		this.#donateList = updateDonates
		this.#createDonateItem()
	}
	render(){
		const donatesContainer = document.createElement('div');
        donatesContainer.className = 'donates-container';
        const donatesText = document.createElement('h2');
        donatesText.className = 'donates-container__title';
		donatesText.textContent = 'Список донатов'
		this.#donatesWrapper = document.createElement('div')
		this.#donatesWrapper.className = 'donates-container__donates'
		
		this.#createDonateItem()

		donatesContainer.append(donatesText, this.#donatesWrapper);
		return donatesContainer
	}
}