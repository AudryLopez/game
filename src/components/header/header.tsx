import "./header.css";
import title from "../../images/logo.svg"

export default function Header(){
    return (
      <header className="header">
        <img className="image" src={title}/>
        <div className="score-card">
          <header className="title">SCORE</header>
          <footer className="scores">11</footer>
        </div>
      </header>
    );
}