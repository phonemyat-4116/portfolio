// Start Navbar 
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

// for navbar 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getscroll = window.scrollY;
    // console.log(getscroll);

    if(getscroll >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
})

// End Navbar 


// Start Gallery Section 
const gallerylists = document.querySelectorAll('.gallerylists');

const filternews = document.querySelectorAll('.filters.new'),
        filterpros = document.querySelectorAll('.filters.pro'),
        filterfrees = document.querySelectorAll('.filters.free');

        
gallerylists.forEach((gallerylist)=>{
    // console.log(gallerylist);  
    
    let datafilter = gallerylist.getAttribute('data-filter');

    gallerylist.addEventListener('click',(e)=>{
        // console.log(datafilter);

        if(datafilter === "all"){
            removeactiveitem()
            e.target.classList.add('activeitems');

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = 'inline-block';
            })

            filternews.forEach(filternew=>{
                filternew.style.display = 'inline-block';
            })

            filterpros.forEach(filterpro=>{
                filterpro.style.display = 'inline-block';
            })
        }else if(datafilter === "new"){
            removeactiveitem()
            e.target.classList.add('activeitems');

            filternews.forEach(filternew=>{
                filternew.style.display = 'inline-block';
            })

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = 'none';
            })

            filterpros.forEach(filterpro=>{
                filterpro.style.display = 'none';
            })


        }else if(datafilter === "free"){
            removeactiveitem()
            e.target.classList.add('activeitems');

            filterfrees.forEach(filterfree=>{
                filterfree.style.display = 'inline-block';
            })

            filternews.forEach(filternew=>{
                filternew.style.display = 'none';
            })

            filterpros.forEach(filterpro=>{
                filterpro.style.display = 'none';
            })
        }else{
            removeactiveitem()
            e.target.classList.add('activeitems');

            filterpros.forEach(filterpro=>{
                filterpro.style.display = 'inline-block';
            })
            
            filterfrees.forEach(filterfree=>{
                filterfree.style.display = 'none';
            })

            filternews.forEach(filternew=>{
                filternew.style.display = 'none';
            })
        }
        
        
    })
})

// remove current active item 
function removeactiveitem(){
    gallerylists.forEach(gallerylist=>{
        gallerylist.classList.remove('activeitems');
    });
};

// End Gallery Section 


// Start Footer Section 
const showyear = document.getElementById('showyear');

const getfullyear = new Date().getFullYear();

showyear.textContent = getfullyear;
// End Footer Section 