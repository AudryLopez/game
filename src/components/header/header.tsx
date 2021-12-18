import "./header.css";
import title from "../../images/logo.svg"

export default function Header(){
    return (
      <header className="header">
        <img className="image" src={title}/>
        <div className="score-card">
          <header className="title"></header>
          <footer className="score"></footer>
        </div>
      </header>
    );
}