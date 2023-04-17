import moment from "moment/moment";

export function calculateSumOfNumbers (numbers) {
	let result = 0
	numbers.forEach((number)=>{
		result+=number
	})
	return result;
}
export function getFormattedTime(date){
	return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}