import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { ArrowCircleDown, Info, Funnel, User, File, Buildings, PaperPlaneTilt, ChartLine, Question, SignIn, ListDashes, UserCirclePlus, UserCircle, BookOpen, Phone, MapPin } from "phosphor-react";

import logo_1 from '../assets/logo_1.png';
import logo_2 from '../assets/logo_2.png';
import logo_3 from '../assets/logo_3.png';
import logo_4 from '../assets/logo_4.png';


type Total = {
  organizations: string,
  publications: string,
  researcher: string
}

import cimatec from '../assets/cimatec.png';

export function Header() {


  return (
    <header className={` z-[9999999] px-6 md:px-16 w-full mb-4 h-20 justify-between items-center flex absolute top-0`}>
      <div className=" w-full flex items-center h-12 ">
      <div className="h-[25px] mr-8"><Logo/></div>

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
  )
}