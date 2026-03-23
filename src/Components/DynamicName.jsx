import { useEffect, useRef } from 'react';

const DynamicName = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.pageX;
            const mouseY = e.pageY;
            const traX = ((4 * mouseX) / 570) + 40;
            const traY = ((4 * mouseY) / 570) + 50;
            if (titleRef.current) {
                titleRef.current.style.backgroundPosition = `${traX}% ${traY}%`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="title" ref={titleRef}>JULIEN NICOLLE</div>
                </div>
            </div>
        </>
    );
};

export default DynamicName;