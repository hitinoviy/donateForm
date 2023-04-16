export class DonateList{
	#donateList
	constructor(donates){
		this.#donateList = donates
	}
	#createDonateItem(donatesWrapper){
		donatesWrapper.innerHTML = ''
		this.#donateList.forEach((item)=>{
			const donateItemHtml = document.createElement('div')
			donateItemHtml.className = 'donate-item'
			donateItemHtml.innerHTML = `${item['date']} - <b>${item['amount']}</b>`
			donatesWrapper.append(donateItemHtml)
		})
		
		return donatesWrapper
	}
	render(){
		const donatesContainer = document.createElement('div');
        donatesContainer.className = 'donates-container';
        const donatesText = document.createElement('h2');
        donatesText.className = 'donates-container__title';
		donatesText.textContent = 'Список донатов'
		const donatesWrapper = document.createElement('div')
		donatesWrapper.className = 'donates-container__donates'
		this.#createDonateItem(donatesWrapper)

		donatesContainer.append(donatesText, donatesWrapper);
		return donatesContainer
	}
}