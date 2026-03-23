import HomeText from "../Components/HomeText";
import NavbarComponent from "../Components/Navbarcomponent";

const ContactPage = () => {
  return (
    <>
      <header className="cvReact">
        <HomeText />
        <NavbarComponent />
      </header>
      <main>
        <div className="mainContactPage">
          <h2>Punaise, si vous êtes sur cette page, c'est que c'est plutôt positif !</h2>
          <h3>Pour me contacter, vous avez mes reseaux ou le formulaire ci-dessous</h3>
        </div>
        <div className="whitecard">
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
          <div className="cardContent">
            <form className="formContact" action="">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" placeholder="Votre nom" />
              <label htmlFor="company">Société</label>
              <input type="text" id="company" name="company" placeholder="Votre boite" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Votre email" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Votre message"></textarea>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
