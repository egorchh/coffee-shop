import './page-description.sass';

import line from '../../images/line.svg'

const PageDescription = ({descriptionImage, title, logo}) => {
  return (
    <section className="page-description">
      <div className="page-description__wrapper">
        <img className="page-description__image" src={descriptionImage} alt="Woman with cup of coffee" />
        <div className="page-description__content">
          <h3 className="page-description__content-title">{title}</h3>
          <img className="page-description__content-logo" src={logo} alt="Beans logo" />
          <div className="page-description__content-container">
            <p className='page-description__content-text'>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            </p>
            <p className='page-description__content-text'>
              Afraid at highly months do things on at. Situation <br></br> recommend objection do intention <br></br>
              so questions. <br></br> As greatly removed calling pleased improve an. <br></br> Last ask him cold feel <br></br>
              met spot shy want. Children me laughing we <br></br> prospect answered followed. At it went <br></br>
              is song that held help face.
            </p>
          </div>   
        </div>
      </div>
      <img className="line" src={line} alt="line" />
    </section>
  );
}

export default PageDescription;