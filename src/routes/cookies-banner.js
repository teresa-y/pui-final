export default function CookiesBanner() {
    return (

        <div className="project-content">
            <div className = "row">
                <div className="project-page-img">
                <img className="img-fluid" src="../images/cookies-banner-projectpage.png" alt = "internet cookies banner"/>
                </div>
            </div>
            <h2>Re-designed Internet Cookies Banner</h2>
        <div className="project-desc">
            <p>Spring 2022 <br/>
            Team Members: Nora Wai, Nicole Korber, Nish Nilakantan, Andres del Cid <br/>
            Technologies: Figma<br/>
            <a href="#final-cookie" className ="btn btn-outline-primary">Jump to Final Product</a>
        </p>
            <h3>
                Problem
            </h3>
            <p>Internet cookies banners are a common form of deceptive shopping practices. 
                Many websites display a pop-up asking you to accept cookies to use the site, which enable tracking of your 
                own personal data. 
                These are often difficult to deny or know where your data is going, and influences heavily targeted ads. 
            </p>
            <h3>Research</h3>
                <p>We conducted research through collecting examples of cookies banners ourselves, learning about what exactly cookies do through secondary research, and
                held three interviews to understand the general public's knowledge of and feelings about these banners.<br/>
                These were our main takeaways:<br/>
            <ul>
                <li>Some cookies are used to store login information, help websites run, and gather feedback for site troubleshooting</li>
                <li>Many cookies allow cross-media tracking of users’ activity, which can be sold</li>
                <li>Pop-ups with lots of texts is unappealing and annoying</li>
                <li>Users are not sure how they can change their preferences</li>
                <li>Banners are often filled with confusing and unintuitive jargon</li>
            </ul>
            </p>
            <h3>Synthesis</h3>
            <p>We created an affinity diagram to synthesize our research and discover user pain points as well as opportunities.</p>
            <img className="img-fluid" src = "../images/synthesis.png" alt = "screenshot of affinity diagramming"/>
            <h3>Storyboarding</h3>
            <p>We brainstormed scenarios users might be interacting with cookies, 
                and how our redesigned cookie interaction might aim to help them. We
            focused on:</p>
            <ul>
                <li>
                    How might we make cookie options more obvious?
                </li>
                <li>
                    How might we make cookie banners more informative?
                </li>
                <li>
                    How might we make cookie banners easy to read?
                </li>
            </ul>
            <p>From this, we created a storyboard to guide our design decisions. We wanted to focus on ease of understanding cookie banners.</p>
            <img className="img-fluid" src = "../images/final-storyboard.jpg" alt = "final storyboard"/>
            <h3>Lo-fi Prototypes</h3>
            <p>As we created wireframes and lo-fi prototypes, we wanted to focus on enabling the user to customize what cookies they could use, 
                having brief explanations of cookies, and having equal emphasis on all accept/decline buttons.  
            </p>
            <img className="img-fluid" src="../images/wireframe.png" alt = "cookies banner wireframe"/>
            <img className="img-fluid" src="../images/lofi.png" alt = "cookies banner lofi prototype"/>
            <h3>Mid-fi Prototypes</h3>
            <p>A problem with our lo-fi prototype was that there was still too much text that the user would
                need to parse through, so when creating our mid-fi prototype, we completely shifted our focus to a more visual way of displaying information. 
                We represented cookies with icons that were colored depending on their category: necessary, functional, performance, and advertising. 
                We allowed for customization by the user disabling certain categories, and the respective icons would show up based on what the user chose.
            </p>
            <img className="img-fluid" src="../images/hifi.png" alt="cookies banner hifi prototype"/>
            <h3 id="final-cookie">Final Product</h3>
            <p>
            Building off our mid-fi prototype, we also added descriptions of what the cookies did when the user hovered over an
                icon in the case the user wanted to be more informed about their decisions. We made the default option to "accept necessary cookies," and ensured
                each option was given equal emphasis.<br/>
            <a href="https://www.figma.com/proto/qar8jSQTeEF0osshZVBnFJ/Mid-Fi-%2B-High-Fi-Prototype?node-id=101%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=101%3A4&show-proto-sidebar=1" className ="btn btn-outline-primary">Try it Out!</a><br/>
            </p>
            <img className="img-fluid" src="../images/necessary.png" alt="necessary cookies screen"/>
            <img className="img-fluid" src="../images/all.png" alt="all cookies screen"/>
            <img className="img-fluid" src="../images/customize.png" alt="customize cookies screen"/>
            <img className="img-fluid" src="../images/decline.png" alt="decline cookies screen"/>
        </div>
        </div>

    );
}
