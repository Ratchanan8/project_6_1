const colorSwatch = () => {
    // Get element from DOM
    const colorButtons = document.querySelectorAll('.colors__button')
    const colorItems = document.querySelectorAll('.colors__item')

    // Change current color
    const currentColor = (event) => {

        // Remove current class from all Items
        colorItems.forEach(item => {
            item.classList.remove('colors__item--current')
        })
        //console.log(Event)
        // Add current class on parent of clicked button
        event.target.parentNode.classList.add('colors__item--current')
    }

    // Foreach button add an event listener
    colorButtons.forEach(button => button.addEventListener('click', currentColor))

    //colorButtons.forEach(button => { 
       // button.addEventListener('click', currentColor)
   // })  // ฟังชันก์บรรทัดที่ 19 มีความหมายเหมือนกัน ทำให้สั้นลงเฉยๆ
}

colorSwatch()