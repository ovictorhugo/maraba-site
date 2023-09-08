import { ContentPromo } from "../components/ContentPromo";
import { gql, useQuery } from "@apollo/client";
import { Route, useParams } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Promo() {

  const { userId, term } = useParams<{ userId: string, term: string }>();

    return  (
      <div>
      <div className=''>
        <Header/>
      </div>
      {userId && term !== "" && <ContentPromo id={userId} />}
     
    </div>
    )
}