const numbers = []

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', doAdd)
})

function doAdd() {

	const numberElem = document.getElementById('number')
    const number = parseInt(numberElem.value)
    numbers.push(number)
    numberElem.value = ''

    // Exercise 2 - Array destructuring.
    let [item0, item1, ...itemOthers] = numbers
    setHtml("#item0", item0)
    setHtml("#item1", item1)
    setHtml("#itemOthers", itemOthers.join(", "))

    // Exercise 3 - Object destructuring.
    function stats() {
        let sum = 0
        for (let i in numbers) {
            sum += numbers[i]
        }
        return {sum: sum, average: sum/numbers.length}
    }
    let {sum, average} = stats()
    setHtml("#sum", sum)
    setHtml("#average", average)


    // Exercise 4 - More object destructuring.

}

function setHtml(selector, html) {
	const element = document.querySelector(selector)
	if (element) {
		element.innerHTML = html
	}
}


