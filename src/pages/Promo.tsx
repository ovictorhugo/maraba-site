import { ContentPromo } from "../components/ContentPromo";
import { gql, useQuery } from "@apollo/client";
import { Route, useParams } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Promo() {

  const { userId, term } = useParams<{ userId: string, term: string }>();

   // Provide default values for userId and term if they are undefined
  const userIdOrDefault = userId || '';
  const termOrDefault = term || '';

  return (
    <div>
      <div className=''>
        <Header />
      </div>
      {userId !== undefined && term !== undefined && term !== "" && (
        <ContentPromo id={userIdOrDefault} term={termOrDefault} />
      )}
    </div>
  );
}