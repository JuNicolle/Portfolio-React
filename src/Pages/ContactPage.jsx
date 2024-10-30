import HomeText from "../Components/HomeText";
import NavbarComponent from "../Components/Navbarcomponent";


const ContactPage = () => {
    return <>
    <header className='cvReact'>
        <HomeText />
        <NavbarComponent />
    </header>
    <main>
    <div className="mainContactPage">
        <h2>Punaise, si vous êtes sur cette page, c'est que c'est plutôt positif ! </h2>
        <h3>Pour me contacter, vous avez mes reseaux ou le formulaire ci-dessous </h3>
    </div>
    <div class="whitecard">
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
    <div class="cardContent">
        <form className="formContact" action="">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom"></input>
            <label for="name">Société</label>
            <input type="text" id="name" name="name" placeholder="Votre boite"></input>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email"></input>
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message"></textarea>
            <button type="submit">Envoyer</button>

        </form>

    </div>
</div>


</main>






    </>
}
 
export default ContactPage;