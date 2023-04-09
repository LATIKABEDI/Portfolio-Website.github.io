console.log("Hello");

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const skillsContent = document.getElementsByClassName('skill_content'),    //to get the main skill heading
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++)
    {
        skillsContent[i].className = 'skill_content skills_close'
    }
    if(itemClass === 'skill_content skills_close')
    {
        this.parentNode.className = 'skill_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})




const modalViews = document.querySelectorAll('.services_modal'),
      modalbuttons = document.querySelectorAll('.services_button'),      //view more wale buttons milenge
      modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')       //whenever a particular modal is clicked, it becomes active
}

modalbuttons.forEach((modalbuttons, i) => {
    modalbuttons.addEventListener('click', () =>{
        modal(i)                //this will open the particular modal
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})



