import React, { useEffect, useRef } from 'react';

const DynamicName = () => {
    const titleRef = useRef(null); // Utilise useRef pour accéder à l'élément du DOM

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.pageX;
            const mouseY = e.pageY;
            const ww = window.innerWidth;
            const wh = window.innerHeight;
            const traX = ((4 * mouseX) / 570) + 40;
            const traY = ((4 * mouseY) / 570) + 50;
            console.log(traX);
            if (titleRef.current) {
                titleRef.current.style.backgroundPosition = `${traX}% ${traY}%`;
            }
        };

        // Ajoute l'écouteur d'événements
        document.addEventListener("mousemove", handleMouseMove);

        // Nettoie l'écouteur d'événements lors du démontage du composant
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Le tableau vide assure que l'effet s'exécute une seule fois après le premier rendu

    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="title" ref={titleRef}>JULIEN NICOLLE</div>
                    <div className="subtitle">Open To Work</div>
                </div>
            </div>
        </>
    );
};

export default DynamicName;