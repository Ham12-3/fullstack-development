

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
