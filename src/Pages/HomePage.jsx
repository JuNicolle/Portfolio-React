import HomeText from "../Components/HomeText";
import NavbarComponent from "../Components/Navbarcomponent";
import GitLogo from "../assets/pngegg-2.png";
import LinkedinLogo from "../assets/linkedincircle.png";
import MessageLogo from "../assets/PhoneCircle.png";
import hackerImg from "../assets/hacker.png";
import ReactLogo from "../assets/ReactLogo.png";
import JavascriptLogo from "../assets/JavascriptLogo.png";
import DynamicName from "../Components/DynamicName";






const HomePage = () => {
  return <>
    <div className="bodyCorp">
      <header className='cvReact'>
        <HomeText />
        <NavbarComponent />
      </header>
        <DynamicName />
    </div>
    <div id="mainHomePage">
      <div className="leftPart">
        <div id="networksSection">
          <div className="avatar">
            <a href="https://github.com/JuNicolle">
              <img id="gitImg" src={GitLogo} alt="logo github" />
            </a>
          </div>

          <div className="avatar">
            <a href="https://www.linkedin.com/in/junicolle/">
              <img id="linkedinImg" src={LinkedinLogo} alt="logo linkedin" />
            </a>
          </div>

          <div className="avatar">
            <a href="tel:0637237419">
              <img id="messageImg" src={MessageLogo} alt="logo linkedin" />
            </a>
          </div>
        </div>

        <div id="technosSection">
          <h2>Ce que j'apprends :</h2>


          <div className="technoCard">
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

          <div className="technoCard">
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

          <div className="technoCard">
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

        </div>
      </div>

      <div className="rightPart">
        <div id="biographySection">
          <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="card_content">
              <img src={hackerImg} id="profilPic" alt="" />
              <p>
                Hi, my name is Julien and i'll be a super developper in few months, motherfuckers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem ex eligendi ad praesentium modi explicabo reprehenderit quam perferendis labore, inventore illum ratione tempora suscipit nesciunt corporis nulla qui hic in a doloribus quaerat! Sint, voluptatum reprehenderit, minima maiores eveniet ipsum voluptas delectus enim quaerat soluta repellat earum eius accusantium.
              </p>
            </div>
          </div>
        </div>

        <div id="biographySection">
          <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="card_content">
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

  
    </div>




  </>
}

export default HomePage;