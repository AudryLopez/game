import "./header.css";
import title from "../../images/logo.svg"

export default function Header(){
    return (
      <header className="head">
        <img className="image" src={title}/>
        <div className="score-card">
          <header className="header-title">SCORE</header>
          <footer className="scores">11</footer>
        </div>
      </header>
    );
}