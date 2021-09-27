import { useEffect } from "react";
import './style.scss';

export default function PopBalloons() {

   const colors = ['#FF0066', '#00CCFF', '#FFFF66', '#FF66FF', '#0066FF', '#FF6600', '#00FF33', '#FF3300', '#FF0099', '#00FFCC', '#990099', '#339999', '#00FF66', '#00FFFF', '#FF6600', '#FF00CC', '#00FF99', '#FF0000', '#FF33FF', '#33CC33', '#00CCFF', '#FF6699', '#FF00FF', '#66CC33', '#66CC66', '#9900CC', '#660066', '#FF99CC', '#CC0000', '#33FFCC', '#CC33CC', '#3399FF'];

   const balloons = Array.from({ length: 25 }, (k, i) => i++);
   let popped = 0;
   let circles, gameover;

   useEffect(() => {
      document.querySelectorAll('.circle').forEach((item) => {
         item.addEventListener("mouseover", popBallon, { once: true });
      });
      // eslint-disable-next-line
      circles = document.querySelector('.circles').classList;
      // eslint-disable-next-line
      gameover = document.querySelector('.gameover').classList;
   });

   const popBallon = (e) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.background = "transparent";
      e.target.style.color = color;
      popped++;
      if (popped === balloons.length) {
         circles.remove('d-flex');
         circles.add('d-none');
         gameover.remove('d-none');
      };
   };

   return (
      <div className="pop-balloons py-5">
         <div className="gradient-text">
            <h1 className="header">Pop Balloons!</h1>
            <p className="text-center">Hover over the balloon to pop it</p>
         </div>
         <div className="circles d-flex flex-wrap mx-auto">
            {balloons.map((item, index) => {
               const color = colors[Math.floor(Math.random() * colors.length)];
               return (
                  <div
                     key={index}
                     className="circle rounded-circle centered m-2 fs-3 fw-bold pointer"
                     style={{ background: `radial-gradient(circle at 35px 35px, ${color}, #000)`, color: 'transparent' }}
                  >POP!</div>
               );
            })}
         </div>
         <div className="gameover d-none text-center text-white w-75 mx-auto mt-5">Congratulations! You popped all the balloons!</div>
         <button
            className="btn p-3 mt-5 d-flex mx-auto start-again fs-3 text-white"
            onClick={() => {
               window.location.reload();
            }}
         >Start Again</button>
      </div>
   );
};