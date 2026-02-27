const inputEl = document.querySelector('input[type=text]')
const items = document.querySelector('.list-group')
const btnEl = document.querySelector('input[type=submit]')

const renderListItem = function(e){
    e.preventDefault()

    // Guard clause to prebvent submitting empty form
    if(!inputEl.value) return
   //create li element
   const li = document.createElement('li') 
   // attach to the dom
   items.appendChild(li)
   // bind the input value to the list text content
li.textContent = inputEl.value

   // add css styling 
   li.classList.add("list-group-item")
   //clear input field
   inputEl.value = ''
}

btnEl.addEventListener('click', renderListItem)

// to do:
// conditional rendering such that initially no hhobby is displayed.
// add the submited hobby.