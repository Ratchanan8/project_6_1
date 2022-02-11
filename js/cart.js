const cart = () => {
    // Get elements from DOM
    const quantityForm = document.querySelector('.quantity')
    const quantityLess = document.querySelector('.quantity__less')
    const quantityMore = document.querySelector('.quantity__more')
    const quantityInput = document.querySelector('.quantity__input')
    const addButton = document.querySelector('.add-to-cart')
    const cartCounter = document.querySelector('.cart__counter')

    // Increase number เพิ่มจำนวน
    const increase = () => {

        // get value from input
        let inputValue = quantityInput.value 
        if (inputValue < 99 ) {
            inputValue++

            // return new value to input field
            quantityInput.value = inputValue
            //console.log(quantityInput.value)
        }
        
    }

    const decrease = () => {
        let inputValue = quantityInput.value 
        if (inputValue > 1 ) {
            inputValue--
            quantityInput.value = inputValue
            //console.log(quantityInput.value)
        }
    }

    // Add to Cart
    const addToCart = () => {
        // Get values from input and counter
        // Get the values as a number literal
        let inputValue = parseInt(quantityInput.value)
        let currentValue = parseInt(cartCounter.innerText)

        // Add the values as a sum
        let sum = inputValue + currentValue

        //console.log(sum)
        // Add the sum to the counter
        cartCounter.innerText = sum

        // Reset input to its starting value
        quantityInput.value = 1
    }

    // Prevent Form from refreshing page when button is clicked
    quantityForm.addEventListener('submit', Event => Event.preventDefault())

    // Button Events
    quantityMore.addEventListener('click', increase)
    quantityLess.addEventListener('click', decrease)
    addButton.addEventListener('click', addToCart)


    
}
cart()