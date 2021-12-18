import "./header.css";

export default function Header(){
    return (
      <header className="main header">
        <div className="image"></div>
        <div className="score-card">
          <header className="title"></header>
          <footer className="score"></footer>
        </div>
      </header>
    );
}