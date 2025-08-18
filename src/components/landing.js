import logo from './images/YN.svg';
import arrowIma from './images/arrow.svg';

export default function Header() {
  return (
    <header className="App-header">


      <a href="#about-me" className="App-start" style={{ position: "relative", display: "inline-block" }}>
        <img
          src={arrowIma}
          className="App-arrow"
          alt="arrow"
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            height: "auto"
          }}
        />
        <img src={logo} className="App-logo" style={{ width: "500px", height: "auto" }} alt="responsive" />
        <p className="Landing-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "auto"
          }}

        >
          Hello, I'm Yen.<br />
          Welcome to my portfolio!
        </p>
      </a>


    </header >
  );
}
