import Header from "../../components/app-header/app-header";

import background from '../../images/second-background.png'

const BeansPage = () => {
  const title = 'Our coffee';
  return (
    <div>
      <Header 
      title={title}
      background={background}/>
    </div>
  );
}

export default BeansPage;