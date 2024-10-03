import { useState } from "react";

const HomeText = () => {
    
    
  const [text, setText] = useState('JULIEN');
  const words = ['JULIEN', 'CODEUR','DEVWEB','BACKEND','REACT','JAVASCRIPT'];
    
    return <>
      
    <div className="hackerText">
          <span>Hi, I'm </span>     
    </div>



      </>
};
 
export default HomeText;