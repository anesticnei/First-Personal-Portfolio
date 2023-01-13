const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');



navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expender', true )
        document.body.style.overflow = "hidden";
        // primaryNav.classList.toggle('fade');
        
        
    }else if(visibility === 'true'){
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expender', false )
        document.body.style.overflow = "scroll";
        // primaryNav.classList.toggle('fade');
    }
})




const currentProjects = projects;




const projectSection = document.querySelector('.projects-container');

const renderProjects = (items) => {
    for(let i=0; i < items.length; i++){
        if(i === 3)
        break
        else{
        const newProject = document.createElement('div');
        newProject.className = `project-box ${items[i].grid_project_box}`;
        newProject.id = `${items[i].id_box}`;
        newProject.style.backgroundImage = `url(${items[i].image})` ;
        newProject.innerHTML = `
        <div id="${items[i].grid_project_box}" class="project-box-inside ${items[i].class_name_one} ${items[i].class_name_two}">
        <div class="project-text-box">
        <h4 class="the-biggest-text-portfolio text-project-one">${items[i].name}<h4> 
        <h5 class="the-biggest-text-portfolio-sub text-project-two">${items[i].sub_name}</h4>
        </div>
        <span id="${items[i].span_id}" class="small-text-on-dark small-text-project ${items[i].class_text_project}">${items[i].text_project}</span>
        <button id="${items[i].id_name || 'empty'}" class="button button-project ${items[i].class_button_project} ${items[i].btn_for_all}">${items[i].button}</button>
        </div>
        `
        projectSection.appendChild(newProject);
        }
    }
    
};

document.onload = renderProjects(currentProjects);

const buttonProjectLoadMore = document.createElement('button');
buttonProjectLoadMore.className = 'button-on-dark load-more-btn close-project-button';
buttonProjectLoadMore.innerText = 'view more projects';
buttonProjectLoadMore.setAttribute('data-visible', false)
buttonProjectLoadMore.id = 'load-project-btn';

const portfolioContainer = document.querySelector('.portfolio-container');
portfolioContainer.appendChild(buttonProjectLoadMore)

const openBtnProjectContainer = document.querySelector('.close-project-button');

const moreProject = (items) =>{
    for(let i = 3; i < items.length; i++) {
        const newProject = document.createElement('div');
        newProject.className = `project-box ${items[i].grid_project_box} project-container-open`;
        newProject.id = `${items[i].id_box}`;
        newProject.style.backgroundImage = `url(${items[i].image})` ;
        newProject.innerHTML = `
        <div id="${items[i].id_project_container}" class="project-box-inside ${items[i].class_name_one} ${items[i].class_name_two}">
        <div class="project-text-box">
        <h4 class="the-biggest-text-portfolio text-project-one">${items[i].name}<h4> 
        <h5 class="the-biggest-text-portfolio-sub text-project-two">${items[i].sub_name}</h4>
        </div>
        <span id="${items[i].span_id}" class="small-text-on-dark small-text-project ${items[i].class_text_project}">${items[i].text_project}</span>
        <button id="${items[i].id_name || 'empty'}" class="button button-project ${items[i].class_button_project} ${items[i].btn_for_all}">${items[i].button}</button>
        </div>
        `
        projectSection.appendChild(newProject);
    }
};


buttonProjectLoadMore.addEventListener("click", () => {

    const visibleBtn = buttonProjectLoadMore.getAttribute('data-visible');

    if(visibleBtn === 'false'){
        buttonProjectLoadMore.setAttribute('data-visible', true);
        moreProject(currentProjects);
        buttonProjectLoadMore.innerText = 'close here';

    }else if(visibleBtn === 'true'){
        buttonProjectLoadMore.setAttribute('data-visible', false);
        buttonProjectLoadMore.innerText = 'view more projects';
        const openCloseMore = document.querySelectorAll('.project-container-open');
        openCloseMore.forEach(box =>{
            box.remove();
        })
    }
});

// const aboutBtn = document.querySelectorAll('.about-me-btn');
const aboutBtn = document.querySelector('.about-me-btn');

aboutBtn.addEventListener("click", () =>{
    const visibleAboutBtn = aboutBtn.getAttribute('data-visible');
    
    if(visibleAboutBtn === 'false'){
        aboutBtn.setAttribute('data-visible', true);
        aboutBtn.innerText = 'close here';

        const aboutTextContainer = document.querySelector('.text-container-all');
        const extraAbout = document.createElement('div');
        extraAbout.className = 'about-me-extra-info';
        aboutTextContainer.appendChild(extraAbout);
        // aboutBtn.before(extraAbout);
        
        const spanTextAbout = document.createElement('span');
        spanTextAbout.className = 'regular-text';
        spanTextAbout.innerText = "About my life";
        extraAbout.appendChild(spanTextAbout);
        
        // const paragraphAbout = document.createElement('p');
        const paragraphAbout = document.createElement('p');
        paragraphAbout.className = 'small-text';
        extraAbout.appendChild(paragraphAbout);
        paragraphAbout.innerText = "Hello, My name is Damian, i am a Frontend Developer from Cracow,Poland. My journey with coding starts, after few months spended on UI/UX, where i find out from the US content creator and worker in UI/UX that in most of new jobs we need to have knoledge about coding. So i started my journey with coding, and i like it.";

        // const videoContainer = document.querySelector('.about-container-video');
        // videoContainer.parent(aboutTextContainer);

    }else if(visibleAboutBtn === 'true'){
        aboutBtn.setAttribute('data-visible', false);
        aboutBtn.innerText = 'more about me';
        // const aboutTextContainer = document.querySelectorAll('about-me-extra-info');
        const extraAbout = document.querySelector('.about-me-extra-info');
        extraAbout.remove();
        
    }
})





const homeBtn = document.getElementById('home-btn');
const skillBtn = document.getElementById('skill-btn');
// const aboutBtn = document.getElementById('about-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const contactBtn = document.getElementById('contact-btn');

const heroSection = document.getElementById('hero-section');
const skillSection = document.getElementById('skill-section');
const aboutSection = document.getElementById('about-section');
const portfolioSection = document.getElementById('portfolio-section');
const contactSection = document.getElementById('contact-section');



document.querySelectorAll('nav li').forEach(function(listitem){
    listitem.addEventListener("click", () => {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expender', false );
        document.body.style.overflow = "scroll";
        const topPosition = document.getElementById(listitem.dataset.page).offsetTop - 80;
        window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: 'smooth',

        

        });
    });
});

        const topNaviByLogo = document.querySelector('.logo-container');
        topNaviByLogo.addEventListener("click", () =>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
                });
        });




















        // const buttonForTest = document.querySelectorAll('.button-project');

        // // buttonForTest.addEventListener("click", () =>{
        // //     const modal = document.querySelector('.active-grid');

        // // })

        // buttonForTest.forEach((btn) => btn.addEventListener("click", () =>{
        //         const modal = document.querySelector('.active-grid');
        //             modal.classList.remove('active-grid');
        //         const modalDwa = document.querySelector('.active-project-one');
        //         modalDwa.classList.remove('active-project-one');    
        //     }))




        // const btnProjectOne = document.getElementById('project-1');
        // const btnProjectTwo = document.getElementById('project-2');
        // const btnProjectThree = document.getElementById('project-3');
        // const btnProjectFour = document.getElementById('project-4');
        // const btnProjectFive = document.getElementById('project-5');
        // const btnProjectSix = document.getElementById('project-6');
        // const btnProjectSeven = document.getElementById('project-7');
        // const btnProjectEight = document.getElementById('project-8');


        // const boxProjectOne = document.getElementById('project-box-id-1');
        // const boxProjectTwo = document.getElementById('project-box-id-2');
        // const boxProjectThree = document.getElementById('project-box-id-3');
        // const boxProjectFour = document.getElementById('project-box-id-4');
        // const boxProjectFive = document.getElementById('project-box-id-5');
        // const boxProjectSix = document.getElementById('project-box-id-6');
        // const boxProjectSeven = document.getElementById('project-box-id-7');
        // const boxProjectEight = document.getElementById('project-box-id-8');

        // const projectBoxForAll = document.querySelector('.project-box');
        // const projectConainerForAll = document.querySelector('.projects-container');
        // const imgProjectOne = document.querySelector('.img-1');
        // const imgProjectTwo = document.querySelector('.img-2');

        // // const spanProjectOne = document.getElementById('span-project-1');
        // // const spanProjectTwo = document.getElementById('span-project-2');
        // // const spanProjectThree = document.getElementById('span-project-3');
        // const spanProjectFour = document.getElementById('span-project-4');
        // const spanProjectFive = document.getElementById('span-project-5');
        // const spanProjectSix = document.getElementById('span-project-6');
        // const spanProjectSeven = document.getElementById('span-project-7');
        // const spanProjectEight = document.getElementById('span-project-8');

        // const projectGridOpen = document.querySelector('.project-container-grid');
        // const projectGridClosed = document.querySelector('.project-container-grid');
        // projectGridOpen.style.gridTemplateColumns = "repeat(4, 1fr)";
        // projectGridClosed.style.gridTemplateColumns = "repeat(3, 1fr)";

        // const renderGridProject = (items) => {
        //     for(let i=0; i < items.length; i++){
        //         const newProject = document.createElement('div');
        //         newProject.className = `project-box ${items[i].grid_project_box}`;
        //         newProject.id = `${items[i].id_box}`;
        //         newProject.style.backgroundImage = `url(${items[i].image})` ;
        //         newProject.innerHTML = `
        //         <div id="${items[i].grid_project_box}" class="project-box-inside ${items[i].class_name_one} ${items[i].class_name_two}">
        //         <div class="project-text-box">
        //         <h4 class="the-biggest-text-portfolio text-project-one">${items[i].name}<h4> 
        //         <h5 class="the-biggest-text-portfolio-sub text-project-two">${items[i].sub_name}</h4>
        //         </div>
        //         <img class="${items[i].class_img}" src="${items[i].image}" alt=""></img>
        //         <span id="${items[i].span_id}" class="small-text-on-dark small-text-project ${items[i].class_text_project}">${items[i].text_project_open}</span>
        //         <button id="${items[i].id_name || 'empty'}" class="button button-project ${items[i].class_button_project} ${items[i].btn_for_all}">${items[i].button_open}</button>
        //         </div>
        //         `
        //         projectSection.appendChild(newProject);
        //         }
        //     };
            
        // };


        // btnProjectOne.addEventListener("click", () =>{
        //         const gridOne = document.getElementById('project-box-id-1');
        //         gridOne.remove();


        //         const siemka = currentProjects[0];           
        //         console.log(siemka);

        //                 const newProject = document.createElement('div');
        //                 newProject.className = `project-box ${siemka.grid_project_box}`;
        //                 newProject.id = `${siemka.id_box}`;
        //                 newProject.style.backgroundImage = `url(${siemka.image})` ;
        //                 newProject.innerHTML = `
        //                 <div id="${siemka.grid_project_box}" class="project-box-inside ${siemka.class_name_one} ${siemka.class_name_two}">
        //                 <div class="project-text-box">
        //                 <h4 class="the-biggest-text-portfolio text-project-one">${siemka.name}<h4> 
        //                 <h5 class="the-biggest-text-portfolio-sub text-project-two">${siemka.sub_name}</h4>
        //                 </div>
        //                 <img class="${siemka.class_img}" src="${currentProjects[0].image}" alt=""></img>
        //                 <span id="${siemka.span_id}" class="small-text-on-dark small-text-project ${siemka.class_text_project}">${siemka.text_project_open}</span>
        //                 <button id="${siemka.id_name || 'empty'}" class="button button-project ${siemka.class_button_project} ${siemka.btn_for_all}">${siemka.button_open}</button>
        //                 </div>
        //                 `
        //                 projectSection.appendChild(newProject);
        //                 const gridTwo = document.getElementById('project-box-id-2')
        //                 gridTwo.before(newProject);
        //                 })






                    // });
                //     renderGridProject();

            // if(boxProjectOne.classList.contains('active-grid')){
            //     boxProjectOne.classList.remove('active-grid');
            //     boxProjectTwo.classList.remove('active-grid');


                
            //     projectGridClosed.style.gridTemplateColumns = "repeat(3, 1fr)";

            //     spanProjectOne.innerText = "to get more info about this project";
            //     btnProjectOne.innerText = 'click here';
            //     const imgProjectOne = document.querySelector('.img-1');
            //     imgProjectOne.remove();
            // }
            // else  {
            //     const imgProjectOne = document.createElement('img');
            //     imgProjectOne.className = 'open-project-img img-1';
            //     imgProjectOne.src = "/images/music-img.png";
            //     imgProjectOne.alt = "First Project Picture";
            //     boxProjectOne.appendChild(imgProjectOne)
            //     spanProjectOne.before(imgProjectOne);
            //     spanProjectOne.innerText = "PIERWSZA RZECZCos wiecej w temacie muzyki, ze wzgledu na moje zamilowanie do muzyki, stworzylem strone glowne poswieconej mojej osbie ";
            //     btnProjectOne.innerText = 'close here';
            //     projectGridOpen.style.gridTemplateColumns = "repeat(4, 1fr)";
            //     boxProjectOne.classList.add("active-grid");
            // }
 


        // btnProjectTwo.addEventListener("click", () =>{
        //     const delateAll = document.querySelectorAll('.active-grid');
        //     delateAll.forEach(box =>{
        //         box.remove();
        //     });
        //     if(boxProjectTwo.classList.contains('active-grid')){
        //         boxProjectOne.classList.remove('active-grid');
        //         boxProjectTwo.classList.remove('active-grid');
        //         projectGridClosed.style.gridTemplateColumns = "repeat(3, 1fr)";
        //         spanProjectTwo.innerText = "to get more info about this project";
        //         btnProjectTwo.innerText = 'click here';
        //         const imgProjectTwo = document.querySelector('.img-2');
        //         imgProjectTwo.remove();


        //         // boxProjectOne.classList.remove('active-grid');
        //     }
        //     else  {
        //         const imgProjectTwo = document.createElement('img');
        //         imgProjectTwo.className = 'open-project-img img-2';
        //         imgProjectTwo.src = "/images/photography-img.jpg";
        //         imgProjectTwo.alt = "Secound Project Picture";
        //         boxProjectTwo.appendChild(imgProjectTwo)
        //         spanProjectTwo.before(imgProjectTwo);
        //         spanProjectTwo.innerText = "DRUGA RZECZ Cos wiecej w temacie muzyki, ze wzgledu na moje zamilowanie do muzyki, stworzylem strone glowne poswieconej mojej osbie ";
        //         btnProjectTwo.innerText = 'close here';
        //         projectGridOpen.style.gridTemplateColumns = "repeat(4, 1fr)";
        //         boxProjectTwo.classList.add("active-grid");
        //     }
        // });





        // btnProjectOne.addEventListener("click", () =>{});
        // btnProjectOne.addEventListener("click", () =>{});
        // btnProjectOne.addEventListener("click", () =>{});
        // btnProjectOne.addEventListener("click", () =>{});
        // btnProjectOne.addEventListener("click", () =>{});
        // btnProjectOne.addEventListener("click", () =>{});
        // btnProjectOne.addEventListener("click", () =>{});




        // const projectBtn = document.querySelectorAll('.btn-for-all');
        // // const projectBox = document.querySelectorAll('.project-box');
        // const projectBox = document.getElementById("project-box-id");
        // // gridProjectOne.classList.add("active-grid");

        // projectBtn.forEach((btn) => btn.addEventListener("click", () =>{
        //     // projectBox.classList.remove('active-grid');
        //     if(projectBox.classList.contains('active-grid')){


        //         const projectGrid = document.querySelector('.project-container-grid');
        //         projectGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
        //             projectBox.classList.remove('active-grid');
        //     }

        //     // else if (projectBox.classList.contains('active-grid')){
        //     //     projectBox.classList.remove('active-grid');
        //     else{
        //         console.log("Siemka");
        //         const projectGrid = document.querySelector('.project-container-grid');
        //         projectGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
        //         projectBox.classList.add('active-grid');
        //     }

        // }));

    function init() {
        const query = window.matchMedia("(min-width: 1000px)");

        if(query.matches){
            console.log("JEST 100%");
        }else {
            console.log("NIE MA MNIE");
        }
    }

        // open(query)



    const spanProjectOne = document.getElementById('span-project-1');
    const buttonProjectOne = document.getElementById('project-1');
    const projectOneContainer = document.querySelector('.project-one-box-class-one');    

    buttonProjectOne.addEventListener("click", () => {
        if(projectOneContainer.classList.contains('project-one-box-class-one')){
            const imgProjectOne = document.createElement('img');
            imgProjectOne.className = 'open-project-img img-one';
            imgProjectOne.src = "/images/music-img.png";
            imgProjectOne.alt = "First Project Picture";
            projectOneContainer.appendChild(imgProjectOne)
            spanProjectOne.before(imgProjectOne);
            spanProjectOne.innerText = "PIERWSZA RZECZCos wiecej w temacie muzyki, ze wzgledu na moje zamilowanie do muzyki, stworzylem strone glowne poswieconej mojej osbie ";
            buttonProjectOne.innerText = 'close here';

            

            


            projectOneContainer.classList.remove('project-one-box-class-one')
            const projectBox = document.querySelector('.project-one-box-class-two');
            projectBox.classList.add('active-project-one');
            
//tutaj zrobic sekcje dodania buttonow 

            const linkDivProjectOne = document.createElement('div');
            linkDivProjectOne.className = 'project-links-container project-links-container-one';
            projectBox.appendChild(linkDivProjectOne);
            buttonProjectOne.before(linkDivProjectOne);

            const gitLink = document.createElement('a');
            gitLink.className = 'git-link link button project-link-buttons';
            gitLink.innerText = 'Github';
            gitLink.href = "https://www.google.com/";
            gitLink.target = '_blank';
            const webLink = document.createElement('a');
            webLink.className = 'web-link link button project-link-buttons';
            webLink.innerText = 'Website';
            webLink.target = '_blank';
            webLink.href = "https://www.google.com/";

            linkDivProjectOne.appendChild(gitLink);
            linkDivProjectOne.appendChild(webLink);

            //KONIEC

            const projectGrid = document.querySelector('.project-container-grid');
            projectGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
            
            const gridProjectOne = document.querySelector('.grid-project-box-one');
            gridProjectOne.classList.add("active-grid");



            const parent = document.querySelector('.project-container-grid');
            const child = document.querySelector('.grid-project-box-one');
            parent.insertAdjacentElement('afterbegin',child);

            
            if(projectTwoContainer.classList.contains('active-project-two')){
                const projectBox = document.querySelector('.project-two-box-class-two');
                projectBox.classList.remove('active-project-two');
                const imgProjectTwo = document.querySelector('.img-two');
                imgProjectTwo.remove();
                spanProjectTwo.innerText ="to get more info about this project";
                buttonProjectTwo.innerText = 'click here';
                projectTwoContainer.classList.add('project-two-box-class-one');
                
                const gridProjectTwo = document.querySelector('.grid-project-box-two');
                gridProjectTwo.classList.remove("active-grid");

                const linkDivProjectTwo = document.querySelector('.project-links-container-two');
                linkDivProjectTwo.remove();

            }else if (projectThreeContainer.classList.contains('active-project-three')){
                const projectBox = document.querySelector('.project-three-box-class-two');
                projectBox.classList.remove('active-project-three');
                const imgProjectThree = document.querySelector('.img-three');
                imgProjectThree.remove();
                spanProjectThree.innerText ="to get more info about this project";
                buttonProjectThree.innerText = 'click here';
                projectThreeContainer.classList.add('project-three-box-class-one');


                const gridProjectThree = document.querySelector('.grid-project-box-three');
                gridProjectThree.classList.remove("active-grid");

                const linkDivProjectThree = document.querySelector('.project-links-container-three');
                linkDivProjectThree.remove();
            }

        }else{
            const projectBox = document.querySelector('.project-one-box-class-two');
            projectBox.classList.remove('active-project-one');
            const imgProjectOpen = document.querySelector('.img-one');
            imgProjectOpen.remove();
            spanProjectOne.innerText ="to get more info about this project";
            buttonProjectOne.innerText = 'click here';
            projectOneContainer.classList.add('project-one-box-class-one');
            const linkDivProjectOne = document.querySelector('.project-links-container');
            linkDivProjectOne.remove();

            const projectGrid = document.querySelector('.project-container-grid');
            projectGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
            const gridProjectOne = document.querySelector('.grid-project-box-one');
            gridProjectOne.classList.remove("active-grid");
        }
    })

    const spanProjectTwo = document.getElementById('span-project-2');
    const buttonProjectTwo = document.getElementById('project-2');
    const projectTwoContainer = document.querySelector('.project-two-box-class-one');    

    buttonProjectTwo.addEventListener("click", () => {
        if(projectTwoContainer.classList.contains('project-two-box-class-one')){            
            const imgProjectTwo = document.createElement('img');
            imgProjectTwo.className = 'open-project-img img-two';
            imgProjectTwo.src = "/images/photography-img.jpg";
            imgProjectTwo.alt = "Secound Project Picture";
            projectTwoContainer.appendChild(imgProjectTwo)
            spanProjectTwo.before(imgProjectTwo);
            spanProjectTwo.innerText = "DRUGA RZECZ Cos wiecej w temacie muzyki, ze wzgledu na moje zamilowanie do muzyki, stworzylem strone glowne poswieconej mojej osbie ";
            buttonProjectTwo.innerText = 'close here';
            projectTwoContainer.classList.remove('project-two-box-class-one')
            const projectBox = document.querySelector('.project-two-box-class-two');
            projectBox.classList.add('active-project-two');

            const linkDivProjectTwo = document.createElement('div');
            linkDivProjectTwo.className = 'project-links-container project-links-container-two';
            projectBox.appendChild(linkDivProjectTwo);
            buttonProjectTwo.before(linkDivProjectTwo);

            const gitLink = document.createElement('a');
            gitLink.className = 'git-link link button project-link-buttons';
            gitLink.innerText = 'Github'
            gitLink.href = "https://www.google.com/";
            gitLink.target = '_blank';
            const webLink = document.createElement('a');
            webLink.className = 'web-link link button project-link-buttons';
            webLink.innerText = 'Website';
            webLink.target = '_blank';
            webLink.href = "https://www.google.com/";

            linkDivProjectTwo.appendChild(gitLink);
            linkDivProjectTwo.appendChild(webLink);
            
            const projectGrid = document.querySelector('.project-container-grid');
            projectGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
            
            const gridProjectTwo = document.querySelector('.grid-project-box-two');
            gridProjectTwo.classList.add("active-grid");


            const parent = document.querySelector('.project-container-grid');
            const child = document.querySelector('.grid-project-box-two');
            parent.insertAdjacentElement('afterbegin',child);
            
            if(projectOneContainer.classList.contains('active-project-one')){
                const projectBox = document.querySelector('.project-one-box-class-two');
                
                            const linkDivProjectOne = document.querySelector('.project-links-container-one');
                            linkDivProjectOne.remove();

                            projectBox.classList.remove('active-project-one');
                            const imgProjectOpen = document.querySelector('.img-one');
                            imgProjectOpen.remove();
                            spanProjectOne.innerText ="to get more info about this project";
                            buttonProjectOne.innerText = 'click here';
                            projectOneContainer.classList.add('project-one-box-class-one');

                            const gridProjectOne = document.querySelector('.grid-project-box-one');
                            gridProjectOne.classList.remove("active-grid");
            
                        }else if(projectThreeContainer.classList.contains('active-project-three')){

                            const linkDivProjectThree = document.querySelector('.project-links-container-three');
                            linkDivProjectThree.remove();

                            const projectBox = document.querySelector('.project-three-box-class-two');
                            projectBox.classList.remove('active-project-three');
                            const imgProjectOpen = document.querySelector('.img-three');
                            imgProjectOpen.remove();
                            spanProjectThree.innerText ="to get more info about this project";
                            buttonProjectThree.innerText = 'click here';
                            projectThreeContainer.classList.add('project-three-box-class-one');

                            const gridProjectThree = document.querySelector('.grid-project-box-three');
                            gridProjectThree.classList.remove("active-grid");
                        }



        }else {
            const projectBox = document.querySelector('.project-two-box-class-two');
            projectBox.classList.remove('active-project-two');
            imgProjectOpen = document.querySelector('.img-two');
            imgProjectOpen.remove();
            spanProjectTwo.innerText ="to get more info about this project";
            buttonProjectTwo.innerText = 'click here';
            projectTwoContainer.classList.add('project-two-box-class-one');

            const projectGrid = document.querySelector('.project-container-grid');
            projectGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
            const gridProjectTwo = document.querySelector('.grid-project-box-two');
            gridProjectTwo.classList.remove("active-grid");

            const linkDivProjectTwo = document.querySelector('.project-links-container');
            linkDivProjectTwo.remove();

            ;
        }
        
    });














    const spanProjectThree = document.getElementById('span-project-3');
    const buttonProjectThree = document.getElementById('project-3');
    const projectThreeContainer = document.querySelector('.project-three-box-class-one');    

    buttonProjectThree.addEventListener("click", () => {
        if(projectThreeContainer.classList.contains('project-three-box-class-one')){

            
            const imgProjectThree = document.createElement('img');
            imgProjectThree.className = 'open-project-img img-three';
            imgProjectThree.src = "/images/project_3.jpg";
            imgProjectThree.alt = "Third Project Picture";
            projectThreeContainer.appendChild(imgProjectThree)
            spanProjectThree.before(imgProjectThree);
            // spanProjectThree.innerText = `${items[2].open_project_text}`;
            spanProjectThree.innerText = " TRZECIA RZECZCos wiecej w temacie muzyki, ze wzgledu na moje zamilowanie do muzyki, stworzylem strone glowne poswieconej mojej osbie ";
            buttonProjectThree.innerText = 'close here';
            projectThreeContainer.classList.remove('project-three-box-class-one')
            const projectBox = document.querySelector('.project-three-box-class-two');
            projectBox.classList.add('active-project-three');
            

            
            const linkDivProjectThree = document.createElement('div');
            linkDivProjectThree.className = 'project-links-container project-links-container-three';
            projectBox.appendChild(linkDivProjectThree);
            buttonProjectThree.before(linkDivProjectThree);
            
            const gitLink = document.createElement('a');
            gitLink.className = 'git-link link button project-link-buttons';
            gitLink.innerText = 'Github'
            
            // gitLink = window.open("https://www.google.com/")

            gitLink.href = "https://www.google.com/";
            gitLink.target = '_blank';
            const webLink = document.createElement('a');
            webLink.className = 'web-link link button project-link-buttons';
            webLink.innerText = 'Website'
            webLink.target = '_blank';
            webLink.href = "https://www.google.com/";

            linkDivProjectThree.appendChild(gitLink);
            linkDivProjectThree.appendChild(webLink);
            
            const projectGrid = document.querySelector('.project-container-grid');
            projectGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
            
            const gridProjectThree = document.querySelector('.grid-project-box-three');
            gridProjectThree.classList.add("active-grid");

            const parent = document.querySelector('.project-container-grid');
            const child = document.querySelector('.grid-project-box-three');
            parent.insertAdjacentElement('afterbegin',child);
            
            if(projectOneContainer.classList.contains('active-project-one')){
                const linkDivProjectOne = document.querySelector('.project-links-container-one');
                linkDivProjectOne.remove();

                const projectBox = document.querySelector('.project-one-box-class-two');
                projectBox.classList.remove('active-project-one');
                imgProjectOpen = document.querySelector('.img-one');
                imgProjectOpen.remove();
                spanProjectOne.innerText ="to get more info about this project";
                buttonProjectOne.innerText = 'click here';
                projectOneContainer.classList.add('project-one-box-class-one');

                const gridProjectOne = document.querySelector('.grid-project-box-one');
                gridProjectOne.classList.remove("active-grid");
            
            }else if (projectThreeContainer.classList.contains('active-project-three')){

                const linkDivProjectTwo = document.querySelector('.project-links-container-two');
                linkDivProjectTwo.remove();

                const projectBox = document.querySelector('.project-two-box-class-two');
                projectBox.classList.remove('active-project-two');
                imgProjectOpen = document.querySelector('.img-two');
                imgProjectOpen.remove();
                spanProjectTwo.innerText ="to get more info about this project";
                buttonProjectTwo.innerText = 'click here';
                projectTwoContainer.classList.add('project-two-box-class-one')

                const gridProjectTwo = document.querySelector('.grid-project-box-two');
                gridProjectTwo.classList.remove("active-grid");
            }

            


        }else{
            const projectBox = document.querySelector('.project-three-box-class-two');
            projectBox.classList.remove('active-project-three');
            imgProjectOpen = document.querySelector('.img-three');
            imgProjectOpen.remove();
            spanProjectThree.innerText ="to get more info about this project";
            buttonProjectThree.innerText = 'click here';
            projectThreeContainer.classList.add('project-three-box-class-one');

            const projectGrid = document.querySelector('.project-container-grid');
            projectGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
            const gridProjectThree = document.querySelector('.grid-project-box-three');
            gridProjectThree.classList.remove("active-grid");

            const linkDivProjectThree = document.querySelector('.project-links-container');
            linkDivProjectThree.remove();
        }
    })

