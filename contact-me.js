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

    // Create main-contact-me elements
    const mainContactMe = document.createElement('div');
    mainContactMe.className = 'main-contact-me';
    mainContactMe.innerHTML = `
        <div class="main-contact-form">
            <h3 id="">Send Me a Message</h3>
            <form action="https://formspree.io/f/xknarzbq" method="POST" onsubmit="this.submit(); this.reset(); return false;">
                <label for="fname">First name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your Name">
                <label for="fname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your Surname">
                <label for="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="Your email">
                <label for="subject">Subject</label>
                <textarea id="subject" name="message" placeholder="Write something.." style="height:170px"></textarea>
                
                <input type="submit" value="Submit">

            </form>
        </div>
        <div class="contact-details">
            <h3>Contact details</h3>
            <div class="information">
            <img src="./assets/icons/location.png" class="icon" alt="" />
            <p>456 Bush Road, Pretoria 0184</p>
            </div>
            <div class="information">
            <img src="./assets/icons/email.png"class="icon" alt="" />
            <p>sthembiso.ngwenyama@gmail.cm</p>
            </div>
            <div class="information">
                <img src="./assets/icons/phone.png" class="icon" alt="" />
                <p>076 733 9334 | 065 139 7718</p>
            </div>

            <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
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
    document.body.appendChild(mainContactMe);
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
