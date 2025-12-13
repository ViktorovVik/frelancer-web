import './Footer.scss';
import { Button } from "../../shared/ui/Button";
import {Socials} from "../../shared/ui/Socials";


export const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="contacts-title">
      <div className="footer__inner container">
        <div className="footer__title">
          <h2 className="h2" id="contacts-title">Contacts</h2>
        </div>
        <p className="footer__text">Want to know more or just chat?
          You are welcome!</p>
        <Button className="footer__button" variant={"primary"}>Send message</Button>
        <Socials className="footer__socials" />
          <p className="footer__cta">
            <span className="footer__cta-text">Like me on</span> LinkedIn, Instagram, Behance, Dribble
          </p>
      </div>
    </footer>
  )
}