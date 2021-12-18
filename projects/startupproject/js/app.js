// Start Pricing Section 
const movefromleft = document.querySelector('.movefromlefts'),
      movefrombottom = document.querySelector('.movefrombottoms'),
      movefromright = document.querySelector('.movefromrights');
    
// console.log(movefromright)

window.addEventListener('scroll',(e)=>{
    const getscroll = window.scrollY;
    // console.log(getscroll)

    removescroll()

    if(getscroll > 1800){
        
        movefromleft.classList.add('pricingscrolls')
        movefrombottom.classList.add('pricingscrolls')
        movefromright.classList.add('pricingscrolls')
    }
})

function removescroll(){
    movefromleft.classList.remove('pricingscrolls')
    movefrombottom.classList.remove('pricingscrolls')
    movefromright.classList.remove('pricingscrolls')
}
// End Pricing Section 


// Start FAQ Section 
const faqs = document.querySelectorAll('.faqs');
const faqtoggles = document.querySelectorAll('.faqtoggles');
const faqtitles = document.querySelectorAll('.faqtitles');

// console.log(faqtoggles)

faqtoggles.forEach(faqtoggle=>{

    // console.log(faqtoggle)

    faqtoggle.addEventListener('click',()=>{
        
        if(faqtoggle.parentElement.classList.contains('active')){
            faqtoggle.parentElement.classList.remove('active')
        }else{
            faqtoggle.parentElement.classList.add('active')
        }
    })

})

faqtitles.forEach(faqtitle=>{

    faqtitle.addEventListener('click',()=>{
        if(faqtitle.parentElement.classList.contains('active')){
            faqtitle.parentElement.classList.remove('active')
        }else{
            faqtitle.parentElement.classList.add('active')
        }
    })
})


// End FAQ Section 