import './Hero.scss'
import heroDesktop from '../../assets/hero.png'
import heroMobile from '../../assets/hero-mobile.png'

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <h1 className="visually-hidden" id="hero-title">Portfolio and my brand</h1>
        <p className="hero__name">Kelvin Kramer <strong className="hero__position">Designer & Developer</strong></p>
        <p className="hero__text">
          I&rsquo;m a&nbsp;portrait, fashion and lifestyle photographer living
          In&nbsp;New York City. During my&nbsp;thirteen year tenure here.
        </p>
        <picture className="hero__picture">
          <source
            media="(max-width: 767px)"
            srcSet={heroMobile}
          />
          <source
            media="(min-width: 768px)"
            srcSet={heroDesktop}
          />
          <img
            src={heroDesktop}
            alt="Kelvin Kramer Designer & Developer"
            width="494"
            height="613"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  )
}