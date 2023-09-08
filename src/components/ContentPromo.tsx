import { gql, useQuery } from "@apollo/client";
import { MapPin, ShoppingCart } from "phosphor-react";


interface Props {
    id: string,
    term: string
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
    data: string
  } []
}

const GET_PRODUTO_QUERY = gql `
query MyQuery {
  produtos {
    limite
    nomeProduto
    promocao
    produtoUrl
    image {
      url
    }
  }
}

`

interface GetProdutoQueryResponse {
  produtos: {
    limite: string
    image: {
      url: string;
    };
    produtoUrl: string
    promocao: string
    nomeProduto: string
  } []
}

export function ContentPromo(props: Props) {
    const { data: data2 } = useQuery<GetOfertaQueryResponse>(GET_OFERTA_QUERY)
    const { data } = useQuery<GetProdutoQueryResponse>(GET_PRODUTO_QUERY)

    return  (
        <div className=" px-6 md:px-16">
         

         {data2?.ofertas.map(unidade => {
            if (props.id === unidade.slug) {
                return (
                    <div className="rounded-lg bg-cover bg-center bg-no-repeat min-h-[350px] mt-20" style={{ backgroundImage: `url(${unidade.image.url})` }}>
                        <div className="bg-[#000000]  flex-col bg-opacity-10 backdrop-blur-sm rounded-lg min-h-[350px] p-12 flex justify-center">
                            <h1 className="z-10 text-white lg:leading-[3.5rem] max-w-[700px] font-bold text-5xl mb-2">{unidade.name}</h1>
                            <p className="text-white text-lg">Promoção válida de <strong className="bg-red-400">{unidade.data}</strong></p>
                        </div>
                    </div>
                );
            }
            return null; // Renderiza nada se a condição não for atendida
        })}

        <div className="grid grid-cols-4 mt-4 gap-4">
        {data?.produtos.map(unidade => {
                    return (
                  <div className="rounded-md hover:scale-105 transition-all border-[1px] border-gray-300">
                    <div className="p-6"><div className="w-full rounded-t-md  h-44 bg-contain p-6  bg-center bg-no-repeat" style={{ backgroundImage: `url(${unidade.image.url})` }}></div></div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-2">{unidade.nomeProduto}</h4>
                      <div className="flex gap-2  items-center">
                        <MapPin size={16} className="" />
                        <p className="text-gray-400 text-sm">{unidade.limite}</p>

                        
                      </div>
                      <div className="w-full mt-12 whitespace-nowrap flex items-center gap-4 bg-green-400 text-white rounded-full px-6 py-2 justify-center hover:bg-blue-500  font-medium transition">
                    <ShoppingCart size={16} className="text-white" /> R$ {unidade.promocao}
                    </div>
                    </div>
                  </div>
                     )
                    })}
        </div>

          
        </div>
    )
}