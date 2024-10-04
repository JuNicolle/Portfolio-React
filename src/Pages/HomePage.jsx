import HomeText from "../Components/HomeText";
import NavbarComponent from "../Components/Navbarcomponent";
import GitLogo from "../assets/GitHubLogo.png";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import MessageLogo from "../assets/message.png";





const HomePage = () => {
  return <>
   <div className="bodyCorp">
    <header className='cvReact'>
      <HomeText/>
      <NavbarComponent/>
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
                  <a href="">
                    <img id="gitImg" src={GitLogo} alt="logo github" />
                  </a>
                  </div>

                  <div class="avatar">
                  <a href="">
                    <img id="linkedinImg" src={LinkedinLogo} alt="logo linkedin" />
                  </a>
                  </div>

                  <div class="avatar">
                  <a href="">
                    <img id="linkedinImg" src={MessageLogo} alt="logo linkedin" />
                  </a>
                  </div>
            </div>
            <div id="technosSection">
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
                    <img  src={MessageLogo} alt="" />
            </div>
        </div>
        <div className="rightPart">
            <div id="biographySection">
                <div id="biographyTitleSection">Biographie</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, excepturi? Itaque maiores, minima impedit voluptas ipsum ratione harum, aperiam mollitia hic, ipsam voluptate blanditiis repudiandae voluptatibus? Deserunt obcaecati hic repudiandae.
              Voluptas sint officiis voluptatum! Perferendis unde alias nulla obcaecati mollitia corrupti enim facilis ex, autem illum, atque, ea omnis sequi voluptatem officiis quo et accusamus. Aliquid placeat accusantium praesentium voluptas?
              Quod autem inventore neque architecto eligendi ullam vel dolores quis quia, nobis debitis ipsam aliquam eos reprehenderit enim voluptatibus provident explicabo magni fuga tenetur officiis iusto repudiandae quas! Dignissimos, nisi?
              Sint, aliquid? Molestias et natus ipsum similique error veritatis voluptates provident deserunt quod quos corporis, nostrum cupiditate dignissimos animi praesentium esse modi sed. Ab est quibusdam corrupti laboriosam tempora unde.
              Officiis eos sed aspernatur facere voluptatem nobis dolorem deleniti tempore laudantium labore voluptatum quia qui eum ea quae, sunt, impedit voluptate architecto explicabo, autem quidem. Nostrum libero eligendi temporibus deleniti.
            </div>
        </div>
    </div>    
        <div>
          Side Projects
        </div>
    
    

    
     </>
}

export default HomePage;