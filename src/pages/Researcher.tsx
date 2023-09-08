import { Route, useParams } from 'react-router-dom';
import {ResearcherPage} from '../components/ResearcherPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


function Researcher() {
  const { userId, term } = useParams<{ userId: string, term: string }>();

  console.log(term)

  return (
    <div>
      <div className=''>
        <Header/>
      </div>
      {userId && term !== "" && <ResearcherPage id={userId} term={term} />}
      <Footer/>
    </div>
  );
}


export default Researcher;
