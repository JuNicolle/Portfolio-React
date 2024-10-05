import HomeText from "../Components/HomeText";
import NavbarComponent from "../Components/Navbarcomponent";
import GitLogo from "../assets/GitHubLogo.png";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import MessageLogo from "../assets/message.png";
import hackerImg from "../assets/hacker.png";
import ReactLogo from "../assets/ReactLogo.png";
import TechnoCard from "../Components/TechnoCard";
import JavascriptLogo from "../assets/JavascriptLogo.png";





const HomePage = () => {
  return <>
    <div className="bodyCorp">
      <header className='cvReact'>
        <HomeText />
        <NavbarComponent />
      </header>

      <div id="header">
        <div className="container">
          <div className="title">JULIEN NICOLLE</div>
          <div className="subtitle">Open To Work</div>
        </div>
      </div>
    </div>
    <div id="mainHomePage">
      <div className="leftPart">
        <div id="networksSection">
          <div class="avatar">
            <a href="https://github.com/JuNicolle">
              <img id="gitImg" src={GitLogo} alt="logo github" />
            </a>
          </div>

          <div class="avatar">
            <a href="https://www.linkedin.com/in/junicolle/">
              <img id="linkedinImg" src={LinkedinLogo} alt="logo linkedin" />
            </a>
          </div>

          <div class="avatar">
            <a href="tel:0637237419">
              <img id="messageImg" src={MessageLogo} alt="logo linkedin" />
            </a>
          </div>
        </div>
        <div id="technosSection">
          <h2>Ce que j'apprends :</h2>


          <div class="technoCard">
            <div>
              <img src={ReactLogo} alt="" />
            </div>
            <div>
              <div>
                <h3>React</h3>
              </div>
              <div>
                <p>React est un Framework JS.</p>
              </div>
            </div>
          </div>



          <div class="technoCard">
            <div>
              <img src={ReactLogo} alt="" />
            </div>
            <div>
              <div>
                <h3>React</h3>
              </div>
              <div>
                <p>React est un Framework JS.</p>
              </div>
            </div>
          </div>



          <div class="technoCard">
            <div>
              <img src={ReactLogo} alt="" />
            </div>
            <div>
              <div>
                <h3>React</h3>
              </div>
              <div>
                <p>React est un Framework JS.</p>
              </div>
            </div>
          </div>

        <TechnoCard />



        </div>
      </div>
      <div className="rightPart">
        <div id="biographySection">
          <div class="card">
            <div class="tools">
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
            <div class="card_content">
              <img src={hackerImg} id="profilPic" alt="" />
              <p>
                Hi, my name is Julien and i'll be a super developper in few months, motherfuckers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem ex eligendi ad praesentium modi explicabo reprehenderit quam perferendis labore, inventore illum ratione tempora suscipit nesciunt corporis nulla qui hic in a doloribus quaerat! Sint, voluptatum reprehenderit, minima maiores eveniet ipsum voluptas delectus enim quaerat soluta repellat earum eius accusantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="sidesProjectsSection">
      Side Projects

      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
      <TechnoCard></TechnoCard>
    </div>




  </>
}

export default HomePage;