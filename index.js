//                  Add to list
const submitBtn = document.getElementById("submit-btn")
const form = document.addItem

form.addEventListener("submit",  (e) => {
        e.preventDefault()
        console.log(form.title.value)
        const mainList = document.getElementById("list")

        /*  ADD LINE ITEM  */
        const listItem =document.createElement("li")
        mainList.append(listItem)

        /*   ADD NEW li   */
        const liItem = document.createElement("li")
        listItem.append(liItem)
        const liItemValue = form.title.value
        liItem.textContent = liItemValue
        liItem.className = "label"
        form.title.value = ""

        /*   ADD EDIT BTN   */
        const editBtn = document.createElement("button")
        listItem.append(editBtn)
        editBtn.textContent= "EDIT"
        editBtn.className = "submit-btn"

        /*    ADD DONE BTN   */
        const doneBtn = document.createElement("button")
        listItem.append(doneBtn)
        doneBtn.textContent = "DONE"
        doneBtn.style.display = "none"
        doneBtn.className = "submit-btn"

        /*    ADD DELETE BTN   */
        const deleteBtn = document.createElement("button")
        listItem.append(deleteBtn)
        deleteBtn.textContent = "X"
        deleteBtn.className = "submit-btn"

        /*   ADD CLICK FUNCTIONS TO BTNS   */
        deleteBtn.addEventListener("click",  () => {
            liItem.parentElement.remove()
        })
        
        editBtn.addEventListener("click", function() {
            
            liItem.contentEditable = true;
            liItem.focus()
            liItem.style.backgroundColor = "lightgrey"
            
            editBtn.style.display = 'none'
            doneBtn.style.display = 'inline'
            })
        doneBtn.addEventListener("click", function() {
            liItem.contentEditable = false;
            liItem.style.backgroundColor = "white"
            doneBtn.style.display = "none"
            editBtn.style.display = "inline"
        })
    }
)






// an if statement using the true false values to only render the done button when editing. 
//you can change text content of edit button to done for saving. or have 2 buttons and only render one





