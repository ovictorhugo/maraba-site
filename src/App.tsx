import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  { UserContext }  from '../src/contexts/context'
import { useState, useContext, useEffect } from 'react';


import { client } from './lib/apollo'
import { ApolloProvider } from "@apollo/client"

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { auth } from './lib/firebase';
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth'
import { Maraba } from './pages/Maraba';
import { Promo } from './pages/Promo';




//rotas protegidas


export const App = () => {
  const [urlTermExport, setUrlTermExport] = useState('');
  const [valoresSelecionadosExport, setValoresSelecionadosExport] = useState('');

  const [totalPublicacoes, setTotalPublicacoes] = useState('');
  const [totalPesquisadores, setTotalPesquisadores] = useState('');
  const [totalInstituicoes, setTotalInstituicoes] = useState('');

  const [distinct, setDistinct] = useState(false)

  const [valorDigitadoPesquisaDireta, setValorDigitadoPesquisaDireta] = useState('');

  const [botaoPesquisadoresClicado, setBotaoPesquisadoresClicado] = useState(false);
  const [botaoTermosClicado, setBotaoTermosClicado] = useState(true);
  const [botaoResumoClicado, setBotaoResumoClicado] = useState(false);
  const [botaoAreasClicado, setBotaoAreasClicado] = useState(false);
  
  const [urlGeral, setUrlGeral] = useState('http://172.25.0.83:5001/');
  const [pesquisadoresSelecionadosGroup, setPesquisadoresSelecionadosGroups] = useState('');
  const [user, setUser] = useState<User>({} as User)
  const [isOn, setIsOn] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [intituicoesSelecionadasCheckbox, setIntituicoesSelecionadasCheckbox] = useState('');
  const [areasSelecionadasCheckbox, setAreasSelecionadasCheckbox] = useState('');

  const [valoresSelecionadosPopUp, setValoresSelecionadosPopUp] = useState('');
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const [idGraduateProgram, setIdGraduateProgram] = useState('1');

  useEffect(() => {
  setValoresSelecionadosPopUp(valoresSelecionadosExport)
}, [valoresSelecionadosExport]);




  return (
    <ApolloProvider client={client}>
      <Router>
        <UserContext.Provider  
        value={{
          urlTermExport, setUrlTermExport, 
          valoresSelecionadosExport, setValoresSelecionadosExport, 
          totalPublicacoes, setTotalPublicacoes, totalPesquisadores, 
          setTotalPesquisadores, totalInstituicoes, setTotalInstituicoes, 
          valorDigitadoPesquisaDireta, setValorDigitadoPesquisaDireta,
          botaoPesquisadoresClicado, setBotaoPesquisadoresClicado,
          botaoTermosClicado, setBotaoTermosClicado,
          botaoResumoClicado, setBotaoResumoClicado,
          botaoAreasClicado, setBotaoAreasClicado,
          urlGeral, setUrlGeral,
          pesquisadoresSelecionadosGroup, setPesquisadoresSelecionadosGroups,
          user, setUser,
          isOn, setIsOn,
          enabled, setEnabled,
          intituicoesSelecionadasCheckbox, setIntituicoesSelecionadasCheckbox,
          areasSelecionadasCheckbox, setAreasSelecionadasCheckbox,

          valoresSelecionadosPopUp, setValoresSelecionadosPopUp,
          isPopUpVisible, setIsPopUpVisible,
          distinct, setDistinct,


          idGraduateProgram, setIdGraduateProgram
          }}>
          <Routes>
            <Route path='/' >
            <Route path=':userId?' element={<Maraba/>}/>
            </Route>
          

            <Route path='/maraba' element={<Maraba/>}/>

    

            <Route path='oferta'>
              <Route path=':userId/:term?' element={<Promo/>}/>
            </Route>


         
          </Routes>
        </UserContext.Provider>
      </Router>
    </ApolloProvider>
  )
}

export default App