import './home-description.sass'

import beansLogoBlack from "../../../../images/beans-logo-black.svg"

const HomeDescription = () => {
  return (
    <section className='home-description'>
      <h3 className='home-description__title'>About Us</h3>
      <img className='home-description__image' src={beansLogoBlack} alt="Beans logo" />
      <div className="home-description__description">
        <p className="home-description__description-item">
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
        </p>
        <p className="home-description__description-item">
          Now residence dashwoods she excellent you. Shade being under his bed her, Much
          read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
          horrible but confined day end marriage. Eagerness furniture set preserved far
          recommend. Did even but nor are most gave hope. Secure active living depend son
          repair day ladies now.
        </p>
      </div>
    </section>
  );
}

export default HomeDescription;