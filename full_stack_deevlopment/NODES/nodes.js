

function collectData() {
    const languageProficiencyEls= document.getElementsByName("languageProficiency")


    console.log(languageProficiencyEls)
    
    for(let i= 0; i<languageProficiencyEls.length;i++)  {
        if(languageProficiencyEls[i].checked) {
            console.log(`Selected language is: ${languageProficiencyEls[i].value}`)
        }
    }
}

// log all element with the name email 

const emailEl = document.getElementsByName("email")

console.log(emailEl)



// Parent and child elements  

// Parent element: parentNode,paretnElement 
// child elements: firstChild, lastChild, firstElementChild,lastElementChild 


// Accessing parent elements 

const parentEl= document.getElementById("parent")

const grandPrentEl = parentEl.parentNode;

// Accessing the child elements 

const firstChildEl = parent.firstChild

const lastChildEl = parent.lastChild

console.log(firstChildEl)

const firstElementChild = parentEl.firstElementChild
const lastElementChild = parentEl/lastElementChild


console.log(firstElementChild)

console.log(lastElementChild)


// Using Data Attributes 

// using getAttributes and setAttributes 

const userCard = document.getElementById('userCard')

const userId = userCard.getAttribute("data-user-id")

const userRole = userCard.getAttribute("data-user-role")

// Modifying data attributes 

userCard.setAttribute("data-user-role","super-admin")
userCard.setAttribute("data-user-position","Engineer")

// Using the datasets 
const userId2 = userCard.dataset.userId
const userRole2 = userCard.dataset.userRole


// Step 1 : Select a list item using the data attribute 


const selectedItemEl =  document.querySelector('[data-item="fruit"]');

// Step 2: Navigate to the parent <ul> element 

const parentListEl =   selectedItemEl.parentNode

// Step 3: Navigate to grandparent 

const gradnParentEl = parentListEl.parentNode

console.log(grandParentEl)

// Step 4: Navigate to the greatgrandparent 

const greatGrandParentEl = grandPrentEl.parentNode


// Using the transverse child nodes 

// Step 1: Select the outer div using its ID 

const outerDiveEl = document.getElementById("outerDiv")

// Step 2: Navigate to the first child, which is a text node 

const firstChildEl1 = outerDiveEl.childNodes[0]

// Step 3: navigate to the second child which is the innerDiv 

const innerDivEl = outerDiveEl.childNodes[1]

// Step 4: select the first child of the inner div 

const innerDivFirstEl = innerDivEl.childNodes[0]

// Step 5: Select the second child of the inner div 
const nestedListEl = document.childNodes[1]


// Using previousSibling 

// Select buttons 
const button1El = document.getElementById("button1")

const button2El = document.getElementById("button2")

const text1El = button1El.previousSibling

const text2El = button2El.previousSibling


// change the text content of the preceding paragraph 

if(text1El.nodeType === 3) {
    text1El.textContent="text 1 has just been updated"
}

if(text2El.nodeType===3) {
    text2El.textContent ="text 2 has just been updated"
}