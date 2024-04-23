document.addEventListener('DOMContentLoaded', function() {
    // Create header elements
    const header = document.createElement('header');
    header.className = 'navigationBar';
    header.innerHTML = `
        <div class="navbar">
        <div class="logo"><a href="./index.html"><img src="./assets/img/html5.png" alt=""></a></div>
        <ul class="links">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about-me.html">About Me</a></li>
            <li><a href="./contact-me.html">Contact Me</a></li>
        </ul>
        <div class="toggle_btn">
            <i class="fa-solid fa-bars"></i>
        </div>
        </div>
        <div class="dropdown_menu">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about-me.html">About Me</a></li>
            <li><a href="./contact-me.html">Contact Me</a></li>
        </div>
    `;

    // Create container-3 elements
    const container3 = document.createElement('div');
    container3.className = 'container-3';
    container3.innerHTML = `
        <div class="bio">
            <h3>Prince Sthembiso Ngwenyama</h3>
            <p>
                As A Recent Graduate Of Tshwane University Of Technology’s IT Diploma Program In Multimedia Specialization. 
                I Am Currently Seeking For Opportunities In Front-End Development Roles Or Full Stack Development Roles. 
                I Am Passion About Developing Responsive Web Applications And Plan To Make Myself, My Experiences And
                My Education As Useful To The Organization/Company And Also Keep Clients Happy. I Have Over 1 Year 
                Experience Working As Junior Web Developer And Word-Press Developer At Square Root Creatives. 
                I Have Developed A Strong Research Skills Through My Undergraduate Studies And I Am Comfortable 
                In Coding With HTML, CSS, JavaScript And Java.
            </p>
            <a href="./assets/cv/Prince CV.doc"><button class="btn"> download CV <i class="fas fa-download"></i> </button></a>
        </div>
        <div class="image-2">
            <img src="./assets/img/IMG_20221118_005617_560.jpg" alt="">
        </div>
    `;

    // Create education section elements
    const educationSection = document.createElement('section');
    educationSection.className = 'education';
    educationSection.id = 'education';
    educationSection.innerHTML = `
        <h1 class="heading"> My <span>Education</span> </h1>
            
        <div class="box-container">
        
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2022</span>
                <h3>Diploma in IT (Multimedia)</h3>
                <p>
                    Major in web development and game programming
                </p>
            </div>
        
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2018</span>
                <h3>National Certificate in Engineering N2</h3>
                <p> Engineering Science N2<br>
                    Mathematics N2<br>
                    Electrical Trade Theory N2<br>
                    Industrial Electronics N2
                </p>
            </div>
        
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2010</span>
                <h3>Grade 12</h3>
                <p> English FAL<br>
                    Siswati Home language<br>
                    Mathematics<br>
                    Life Orientation<br>
                    Life Sciences<br>
                    Agricultural Sciences<br>
                    Physical Science
                </p>
            </div>
        
        </div>
    `;

    // Create experience section elements
    const experienceSection = document.createElement('section');
    experienceSection.className = 'experience';
    experienceSection.id = 'experience';
    experienceSection.innerHTML = `
            <h1 class="heading">  <span>My</span> Experience </h1>
                
            <div class="box-container">
            
                <div class="box">
                    <i class="fas fa-briefcase"></i>
                    <span>May 2021 - Mar 2022 </span>
                    <h3>Square Root Creatives | <span>Web Developer</span></h3>
                <p>  Designing and building the website front-end<br>
                        Designing and managing the website back-end including database and server integration<br>
                        Creating the website architecture<br>
                        Assisting the web development team with all aspects of website and application design<br>
                        Assisting with the testing and maintenance of backend and front-end applications<br>
                        Using user feedback to identify and correct problems with a client's website<br>
                </p> 

                </div>
            
            </div>
    `;

    // Create footer elements
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-details">
            <div class="address">
                <a href="https://www.linkedin.com/in/prince-sthembiso-ngwenyama/"><i class="fa-brands fa-linkedin"></i>   LinkedIn Profile</a></br></br>
                <a href="https://github.com/psngwenyama"><i class="fa-brands fa-github"></i>   GitHub Profile</a>
            </div>
            <div class="quicklinks">
                <h3>Quick Links</h3>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about-me.html">About Me</a></li>
                <li><a href="./contact-me.html">Contact Me</a></li>
            </div>
            <div class="footer-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14374.718478070803!2d28.327429367716036!3d-25.748106451838826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955e52c11f695b%3A0xe7b77d0459ef2fa0!2s456%20Bush%20Rd%2C%20Willow%20Park%20Manor%2C%20Pretoria%2C%200184!5e0!3m2!1sen!2sza!4v1676385643539!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
       </div>
    `;

    // Append elements to the body
    document.body.appendChild(header);
    document.body.appendChild(container3);
    document.body.appendChild(educationSection);
    document.body.appendChild(experienceSection);
    document.body.appendChild(footer);

    // Mobile menu functionality
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
});
