import "./rules.css"
import paper from '../../images/icon-paper.svg'
import rock from '../../images/icon-rock.svg'
import scissors from '../../images/icon-scissors.svg'
import rules from '../../images/image-rules.svg'

export default function Rules(){
    return(
      <section className="card">
        <header className="title">RULES</header>
        <div className="rules">
          <img className="rules" src={rules}></img>
        </div>
      </section>
    )
}