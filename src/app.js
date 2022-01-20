import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './style.scss';

export default function PopBalloons() {

   const colors = ['#FF0066', '#00CCFF', '#FFFF66', '#FF66FF', '#0066FF', '#FF6600', '#00FF33', '#FF3300', '#FF0099', '#00FFCC', '#990099', '#339999', '#00FF66', '#00FFFF', '#FF6600', '#FF00CC', '#00FF99', '#FF0000', '#FF33FF', '#33CC33', '#00CCFF', '#FF6699', '#FF00FF', '#66CC33', '#66CC66', '#9900CC', '#660066', '#FF99CC', '#CC0000', '#33FFCC', '#CC33CC', '#3399FF'];

   const balloons = Array.from({ length: 24 }, (k, i) => i++);
   let popped = 0;

   let [gameOver, setGameOver] = useState(false);

   useEffect(() => {
      document.querySelectorAll('.circle').forEach((item) => {
         item.addEventListener("mouseover", popBallon, { once: true });
         item.style.height = item.clientWidth + "px"
      });
   });

   const popBallon = e => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.background = "transparent";
      e.target.style.color = color;
      popped++;
      popped === balloons.length && setGameOver(true);
   };

   return (
      <div className="pop-balloons py-5">
         <div className="gradient-text text-center text-white mb-5">
            <h1>Pop Balloons!</h1>
            <p>Hover over the balloon to pop it</p>
         </div>
         <Row className={"circles row mx-auto justify-content-center " + (gameOver ? "d-none" : "d-flex")}>
            {balloons.map((item, index) => {
               const color = colors[Math.floor(Math.random() * colors.length)];
               return (
                  <Col xs={3} md={2} key={index} className="p-2">
                     <div
                        className="circle rounded-circle centered fs-3 fw-bold pointer"
                        style={{ background: `radial-gradient(circle at 35px 35px, ${color}, #000)`, color: 'transparent' }}
                     >POP!</div>
                  </Col>
               );
            })}
         </Row>
         <div className={"gameover text-center text-white w-100 mt-5 " + (gameOver ? "d-block" : "d-none")}>Congratulations! You popped all the balloons!</div>
         <button
            className="btn p-3 mt-5 d-flex mx-auto start-again fs-3 text-white"
            onClick={() => window.location.reload()}
         >Start Again</button>
      </div>
   );
};