console.log('JS connected!')

let couter = document.querySelector('#counter')

// Step 1: Grab HTML element

// Step 2: Write out function

// Combine steps 1 and 2 using an event listener


// Set up selecter for plus button with query selector

const plusBtn = document.querySelector('#plus-btn')

// Set up counter variable and function to increase plusBtn and console log the change

// DON'T update text content until after setting up each function and console logging the changes

let count = 0

const increase = () => {
    count++
    console.log(count)
    counter.textContent = count
}

// Create event listener for plus button

plusBtn.addEventListener('click', increase)

// Set up selector at top of file for counter and update the textContent in the increase function


// Repeat process for decrease



const minusBtn = document.querySelector('#minus-btn')

const decrease = () => {
    count--
    counter.textContent = count
    console.log(count)
}

minusBtn.addEventListener('click', decrease)


// Finally, select the reset-btn and set count to 0

let resetBtn = document.querySelector('#reset-btn')

const reset = (event) => {
    console.log(event.target.id)
    count = 0
    counter.textContent = count
    console.log(count)
}

resetBtn.addEventListener('click', reset)


// Explain how we can update the actual information inside our HTML elements, 
// either the conent between the opening and closing tags, or  the attributes inside the opening tag

// Add query.selector for counter, and update the textContent of each to be the value of our counter
// Play around with the numbers a bit

// Add an event to the reset function and console.log it to show them just how much information goes into something
// as "simple" as a click event

// Change the log to show the event.target. This will show the element that has been selected. This helps with debugging
// your code. You can use more dot-notation to get even more information! Add a .id to the end to show that 
// we can get the attributes from our element.

// Huzzah! This was a crash code for events in JS

// Next, we need to select all of our theme buttons. Ask them which selector we'd use to SELECT ALL elements of a certain class

// Create variable for themed buttons and select them. Ask them what data type we'll themeButtons will be (a node list aka an array of nodes)

const themeButtons = document.querySelectorAll(".theme-buttons")

// console.log(themeButtons)

// We can now write our function to select our given themes. Add an event param and log the event.target

const selectTheme = (event) => {
    // console.log(event.target)
    console.log(event.target.textContent)
    let theme = event.target.textContent
    document.querySelector("body").className = theme
    document.querySelector("main").className = theme

    const buttons = document.querySelectorAll('button')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}

// Why is nothing happening when I click??????? Add event listener! Now, instead of writing an event listener for each 
// element, we can just loop over our node list (aka array of elements), and add it that way!

// Start by logging themeButtons[i] for each loop, then do an add event listener for each

// Use case: When you have list of elements that you want to do very similar things. Otherwise, you'll need a different
// event listener for each needed function

for(let i = 0; i < themeButtons.length; i++){
    // console.log(themeButtons[i])
    themeButtons[i].addEventListener('click', selectTheme)
    // console.log(themeButtons[i].textContent)
}



// Show how clicking on each button now console.logs the TARGET of each EVENT (aka the element that we click on)

// Add .textContent to selectTheme

// Now create a "theme" variable inside selectTheme and set it to the textContent

// Take quick detour in to the themes.css to show that all of the style choices are based on classes (.twitter, .facebook, etc...)
// Explain how we can update the class of our main and body elements
// Add selectors and className to be the theme

// Finally, loop over all buttons and create selector for each that updates the className = theme

// If there's time, add an input box and show how to get the value with .value

const catPhoto = document.querySelector('img')
catPhoto.src = 'https://cdn.ttgtmedia.com/rms/onlineimages/programming_lifecycle-f_mobile.png'
