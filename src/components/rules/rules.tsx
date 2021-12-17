import "./rules.css"
import close from '../../images/icon-close.svg'
import rock from '../../images/icon-rock.svg'
import scissors from '../../images/icon-scissors.svg'
import rules from '../../images/image-rules.svg'

export default function Rules(){
    return(
      <section className="card">
        <header className="header">
          <h1 className="title">RULES</h1>
          <img className="icon" src={close}></img>
        </header>
        <div className="rules">
          <img className="img" src={rules}></img>
        </div>
      </section>
    )
}