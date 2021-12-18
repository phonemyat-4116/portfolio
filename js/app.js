//start autocount 
const counter = document.querySelector('.counter');

counter.innerText = '0';

function updatecounter(){

    const ctr = Number(counter.innerText);

    const target = Number(counter.getAttribute('data-target'));

    const increment = target/23;


    if(ctr < target){
        counter.innerText = `${Math.floor(ctr + increment)}`;
        setTimeout(updatecounter,80)
    }

    // console.log(increment)
}

updatecounter();
//end autocount 


// START PROJECT SECTION
const projectlists = document.querySelectorAll('.projectlists');

const projectcssn = document.querySelectorAll('.projects.css');
const projectjsn = document.querySelectorAll('.projects.js');
const projecttempn = document.querySelectorAll('.projects.temp');

// console.log(projectcss)

projectlists.forEach(projectlist=>{
    // console.log(projectlist)
    
    let datafilter = projectlist.getAttribute('data-filter');

    // console.log(datafilter)

    projectlist.addEventListener('click',(e)=>{

        if(datafilter === 'all'){
            removeactiveitems();
            e.target.classList.add('activeitems')

            projectcssn.forEach(projectcss=>{
                projectcss.style.display = 'block'
            })

            projectjsn.forEach(projectjs=>{
                projectjs.style.display = 'block'
            })

            projecttempn.forEach(projecttemp=>{
                projecttemp.style.display = 'block'
            })

        }else if(datafilter === 'js'){
            removeactiveitems()
            e.target.classList.add('activeitems')

            projectcssn.forEach(projectcss=>{
                projectcss.style.display = 'none'
            })

            projectjsn.forEach(projectjs=>{
                projectjs.style.display = 'block'
            })

            projecttempn.forEach(projecttemp=>{
                projecttemp.style.display = 'none'
            })

        }else if(datafilter === 'css'){
            removeactiveitems()
            e.target.classList.add('activeitems')

            projectcssn.forEach(projectcss=>{
                projectcss.style.display = 'block'
            })

            projectjsn.forEach(projectjs=>{
                projectjs.style.display = 'none'
            })

            projecttempn.forEach(projecttemp=>{
                projecttemp.style.display = 'none'
            })

        }else if(datafilter === 'web'){
            removeactiveitems()
            e.target.classList.add('activeitems')

            projectcssn.forEach(projectcss=>{
                projectcss.style.display = 'none'
            })

            projectjsn.forEach(projectjs=>{
                projectjs.style.display = 'none'
            })

            projecttempn.forEach(projecttemp=>{
                projecttemp.style.display = 'block'
            })
        }

    })
})

function removeactiveitems(){
    projectlists.forEach(projectlist=>{
        projectlist.classList.remove('activeitems');
    })
}
// END PROJECT SECTION