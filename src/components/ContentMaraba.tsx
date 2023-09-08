import { Header } from "./Header";
import { Logo } from "./Logo";

import backgroundMercado from '../assets/bg_mercado.png';
import maraba from '../assets/maraba.png';
import carnes from '../assets/carnes.png';

import { Element } from "./Elements";
import { Link } from "react-router-dom";
import { CaretDown, ChartLine, Coins, Info, MapPin, Phone, User, WhatsappLogo } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_UNIDADE_QUERY = gql `
query MyQuery {
  unidadesMaraba {
    address
    name
    image {
      url
    }
  }
}
`

interface GetUnidadeQueryResponse {
    unidadesMaraba: {
      address: string
      image: {
        url: string;
      };
      name: string
      data: string
    } []
}

const GET_OFERTA_QUERY = gql `
query MyQuery {
  ofertas {
    name
    image {
      url
    }
    slug
    data
  }
}

`

interface GetOfertaQueryResponse {
  ofertas: {
    slug: string
    image: {
      url: string;
    };
    name: string
  } []
}



export function ContentMaraba() {

  const { data } = useQuery<GetUnidadeQueryResponse>(GET_UNIDADE_QUERY)

  const { data: data2 } = useQuery<GetOfertaQueryResponse>(GET_OFERTA_QUERY)

  const backgroundImages = [
    '/src/assets/homem_1.png',
    '/src/assets/homem_2.png',
    '/src/assets/homem_3.png',
    '/src/assets/woman_maraba.png',
  ];

  const [backgroundImage, setBackgroundImage] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  });

    return  (
        <div className="w-full">

<header className={` z-[9999999] px-6 md:px-16 w-full mb-4 h-20 justify-between items-center flex absolute top-0`}>
      <div className=" w-full flex items-center h-12 ">

        <div className="md:flex h-full hidden bg-white rounded-md ">
          <a href={"https://www.senaicimatec.com.br/"} className="flex items-center h-full pr-12  text-gray-400 text-sm font-bold transition  gap-2"><Info size={16} className="text-gray-400" />Sobre</a>
          
          <Link to={"/terms"} className="flex items-center h-full  pr-12 text-gray-400 text-sm font-bold transition  gap-2"><MapPin size={16} className="text-gray-400" />Unidades</Link>
          <Link to={"/magazine"} className="flex items-center h-full  pr-12  text-gray-400 text-sm font-bold transition  gap-2"><Phone size={16} className="text-gray-400" />Contatos</Link>
          <Link to={"/magazine"} className="flex items-center h-full  pr-12  text-gray-400 text-sm font-bold transition  gap-2"><User size={16} className="text-gray-400" />Vagas</Link>

        </div>
      </div>

      <div className="flex gap-4">
      
        </div>
    </header>

          <div className="w-full min-h-screen grid grid-cols-2">
            <div className="px-6 md:px-16 flex justify-center flex-col z-[999]">

              <div className="h-8 mb-4"><Logo/></div>
              <h1 className="text text-5xl font-bold max-w-[350px] text-green-500">Encontre sempre uma unidade Marabá perto de você</h1>

      
            </div>
            <div className="p-4 h-full w-full">
              <div className="bg-green-400 h-full w-full rounded-md bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundMercado})` }}></div>
            </div>
            
          </div>

          <div>
          <div className="w-full h-screen absolute top-16 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
          
          </div>
          <div className="h-40 top-[-120px] relative z-[-999]"> 
                <Element/>
              </div>

              <div className="h-40 absolute top-0 right-[-100px] mt-40 rotate-90"> 
                <Element/>
              </div>
          </div>

          <div className="px-6 md:px-16 w-full flex gap-4 items-center mb-6">
          <Coins size={16} className="text-gray-400 " /> 
          <p className=" text-gray-400 text-lg ">Aqui é sinônimo de oferta todo dia</p>
          </div>
          

          <div className="px-6 md:px-16 w-full grid grid-cols-3 gap-4">

          {data2?.ofertas.map(unidade => {
                    return (
            <Link to={`oferta/${unidade.slug}`} className="rounded-md h-[260px] w-full bg-blue-100 bg-cover bg-center bg-no-repeat hover:scale-105 transition-all" style={{ backgroundImage: `url(${unidade.image.url})` }}>
             <div className=" w-full h-full bg-[#000000] bg-opacity-30 p-6 items-end flex rounded-md ">
             <h2 className="text-2xl text-white font-bold ">{unidade.name}</h2>
             </div>
             
             
            </Link>
          )
          })}

         
            
          </div>

          <div className="px-6 md:px-16 my-16">
            <div className="h-[300px] bg-green-400 rounded-md justify-center items-center p-12 flex"><h3 className="text-4xl font-bold text-white mb-4">Conheça a nova unidade Marabá </h3></div>
          </div>

          <div className="w-full grid grid-cols-2 px-6 md:px-16 gap-12 items-center py-24">
            <div className="flex-1 h-full flex items-center justify-center "> <img alt="" className="h-full"/> </div>
                <div className="py-12">
                    <h3 className="text-4xl font-bold text-green-500 max-w-[500px] mb-4">Variedade Inigualável </h3>
                    <p className="mb-6 text-gray-400 text-lg ">Explore um catálogo abrangente que engloba desde frutas frescas e vegetais crocantes até cortes selecionados de carnes e peixes. Nossa variedade de produtos é cuidadosamente selecionada para atender aos diferentes gostos e preferências.</p>

                    <Link to={"/indicators"} className="w-fit whitespace-nowrap flex items-center gap-4 bg-green-400 text-white rounded-full px-6 py-2 justify-center hover:bg-green-500  font-medium transition">
                    <CaretDown size={16} className="text-white" /> Saiba mais
                    </Link>
                </div>
            </div>

          <div className=" px-6 md:px-16 gap-12 items-center pt-24">
            <div className="">
                    <h3 className="text-4xl font-bold text-gray-400 max-w-[400px] mb-4">Encontre um Marabá <strong className="bg-red-400 text-white">perto de você</strong></h3>
                    <p className="mb-6 text-gray-400 text-lg max-w-[500px]">Temos 13 unidades espalhadas por Barreiras e Luís Eduardo Magalhães, prontas para te atender</p>
                </div>

                <div className="w-full grid grid-cols-5 gap-4 ">
                  
                {data?.unidadesMaraba.map(unidade => {
                    return (
                  <div className="rounded-md hover:scale-105 transition-all border-[1px] border-gray-300">
                    <div className="w-full rounded-t-md  h-36 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${unidade.image.url})` }}></div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2">{unidade.name}</h4>
                      <div className="flex gap-2  items-center">
                        <MapPin size={16} className="" />
                        <p>{unidade.address}</p>
                      </div>
                    </div>
                  </div>
                     )
                    })}
                </div>
            </div>

          <div className="w-full grid grid-cols-2 px-6 md:px-16 gap-12 items-center py-24">
            <div className="flex-1 h-full flex items-center justify-center "> <img src={maraba} alt="" className="h-full"/> </div>
                <div className="py-12">
                    <h3 className="text-4xl font-bold text-gray-400 max-w-[500px] mb-4">Conheça nossa <strong className="bg-red-400 text-white">história</strong> </h3>
                    <p className="mb-6 text-gray-400 text-lg ">A história do Grupo Marabá começou em 2001, quando um sonhador e visionário, Ondumar Marabá, iniciou sua jornada em Luis Eduardo Magalhães. Observando a dificuldade das famílias devido aos altos preços no mercado local, ele sonhou em montar um comércio que oferecesse produtos básicos a preços mais acessíveis.</p>

                    <Link to={"/indicators"} className="w-fit whitespace-nowrap flex items-center gap-4 bg-green-400 text-white rounded-full px-6 py-2 justify-center hover:bg-blue-500  font-medium transition">
                    <CaretDown size={16} className="text-white" /> Saiba mais
                    </Link>
                </div>
            </div>

            <div className=" px-6 md:px-16 gap-12 items-center">
            <div className="">
                    <h3 className="text-4xl font-bold text-gray-400 max-w-[500px] mb-4">Temos <strong className="bg-red-400 text-white">orgulho</strong> de ter um time completo!</h3>
                    <p className="mb-6 text-gray-400 text-lg max-w-[700px]">Conheça o nosso time de profissionais prontos para te atender</p>
                </div>

                <div className="grid grid-cols-10 gap-4">
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                  <div className="bg-gray-300 w-full h-32 rounded-md"></div>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 px-6 md:px-16 gap-12 items-center py-24">
            <div className="flex-1 h-full flex items-center justify-center "> <img  alt="" className="h-full"/> </div>
                <div className="py-12">
                    <h3 className="text-4xl font-bold text-gray-400  mb-4">Alguma dúvida, sugestão ou comentário <strong className="bg-red-400 text-white">preencha o formulário</strong> </h3>
                    <p className="mb-6 text-gray-400 text-lg ">Estamos comprometidos em proporcionar a melhor experiência possível a todos os nossos clientes.</p>

                      <form action="">
                        <div>
                        <label htmlFor="" className="mb-2 text-gray-400">Seu nome</label>
                        <input type="text" className="w-full p-2 border-[1px] rounded-md border-gray-400"/>
                        </div>

                        <div>
                        <label htmlFor="" className="mb-2 text-gray-400">Seu nome</label>
                        <input type="text" className="w-full p-2 border-[1px] rounded-md border-gray-400"/>
                        </div>
                      </form>

                    <Link to={"/indicators"} className="w-fit whitespace-nowrap flex items-center gap-4 bg-green-400 text-white rounded-full px-6 py-2 justify-center hover:bg-blue-500  font-medium transition">
                    <CaretDown size={16} className="text-white" /> Saiba mais
                    </Link>
                </div>
            </div>

          <Link to={'https://chat.whatsapp.com/GO0jJ55OkW4Bzj1t0N7fYz'} className="w-[56px] h-[56px] bg-green-400 rounded-full cursor-pointer shadow-md fixed right-8 bottom-8 flex items-center justify-center hover:scale-105 transition-all hover:bg-green-500"> <WhatsappLogo size={20} className="text-white" /> </Link>
        </div>
    )
}