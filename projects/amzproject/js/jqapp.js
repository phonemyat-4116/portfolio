$(document).ready(function(){
// Start Navbar 
$('.navbuttons').click(function(){
    // console.log('i am working');
    $('.navbuttons').toggleClass('changes')
})

// for navbar 
$(window).scroll(function(){
    let getscroll = $(this).scrollTop();

    if(getscroll >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
})

// End Navbar 


// Start Mission 
$(window).scroll(function(){
    let getscroll = $(this).scrollTop();

    if(getscroll >= 650){
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fr0mlefts');
        $('.missiontexts').removeClass('fromrights');
    }
})
// End Mission 

        
// Start Gallery Section 
$('.gallerylists').click(function(){
    
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);

    if(datafilter === 'all'){
        $('.filters').show();

    }else{
        $('.filters').not('.'+datafilter).hide();

        $('.filters').filter('.'+datafilter).show();
    }
})
// remove current active item 
$('.gallerylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
})

// End Gallery Section 


// Start Pricing Section 
$(window).scroll(function(){
    let getscroll =  $(this).scrollTop();

    if(getscroll >= 4300){
        $('.cardones').addClass('movefromlefts')
        $('.cardtwos').addClass('movefrombottoms')
        $('.cardthrees').addClass('movefromrights')
    }else{
        $('.cardones').removeClass('movefromlefts')
        $('.cardtwos').removeClass('movefrombottoms')
        $('.cardthrees').removeClass('movefromrights')
    }
})
// End Pricing Section 


// Start Footer Section 

// End Footer Section 
})