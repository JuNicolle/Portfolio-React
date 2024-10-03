import HomeText from "../Components/HomeText";
import NavbarComponent from "../Components/Navbarcomponent";


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
    {/* Fin de la div BodyCorp */}
    <div>
      Mes Reseaux
    </div>
    <div>
      Mes Technos
    </div>
    <div>
      Petite bio
    </div>
    

    
     </>
}

export default HomePage;