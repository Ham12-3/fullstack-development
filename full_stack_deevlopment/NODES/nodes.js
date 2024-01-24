

function collectData() {
    const languageProficiencyEls= document.getElementsByName("languageProficiency")


    console.log(languageProficiencyEls)
    
    for(let i= 0; i<languageProficiencyEls.length;i++)  {
        if(languageProficiencyEls[i].checked) {
            console.log(`Selected language is: ${languageProficiencyEls[i].value}`)
        }
    }
}