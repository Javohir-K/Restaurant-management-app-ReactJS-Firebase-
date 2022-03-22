import React, {useState} from "react";
import "./Scroll.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollButton() {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  

 
  return (
    <div className="slide-wrap" id="myBtn" style={{display: visible ? 'inline' : 'none'}}>
      <button onClick={scrollToTop} id="myBtn" className="slide-wrap slide-top-button">
        <ArrowUpwardIcon/>
      </button>
    </div>
  );
}

export default ScrollButton;
