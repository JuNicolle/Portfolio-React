const TechnoCard = ({ logo, name, description }) => {
  return (
    <div className="technoCard">
      <div>
        <img src={logo} alt={name} />
      </div>
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnoCard;
