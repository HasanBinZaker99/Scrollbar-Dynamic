
const section = document.querySelectorAll('section');
// console.log(section);
const navLi = document.querySelectorAll('nav .container ul li');
// console.log(navLi);
window.addEventListener('scroll',()=>{
    let current = '';
    //console.log(pageYOffset);
    
    section.forEach(section =>{

        var b = section.scrollHeight + section.clientHeight;
        console.log(b);
        const sectionTop = section.offsetTop;
        //console.log(pageYOffset);
         //console.log(sectionTop);
        const sectionHeight = section.clientHeight;
         //console.log(sectionHeight);
        if(Math.ceil(pageYOffset) >= (sectionTop - sectionHeight /2 ) ){
            current = section.getAttribute('id');
        }
    })
     //console.log(current);
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            current.pageYOffset = 100;
            li.classList.add('active');
        }


    })
})