//UseEffect é executado quando renderiza o site pela primeira vez ou quando array muda.
//UseState sempre que o valor 2 mudar, o valor 1 tambem mudará.

import React, { useState, useEffect } from "react";
import {
  Button,
  Center,
  Pokedex,
  Sprit,
  Number,
  Wrapper,
  Name,
  Texto,
  Buttonwrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

// Tipagem do pokemon que está sendo buscado pela api
type SearchedPokemon = {
  id?: number;
  name: string;
  image?: string;
};

export const Home = () => {
  const navigate = useNavigate();
  const handleClickVolta = () => {
    navigate("/");
  };




  //Numero do pokemon que está sendo buscado
  const [pokemon, setPokemon] = useState<string>("598");
  //Pokemon que é digitado no input
  const [typedPokemon, setTypedPokemon] = useState<string>("");
  //Quando faz requisição a API o pokemon que é retornado por ela é armazenado aqui
  const [searchedPokemon, setSearchedPokemon] = useState<SearchedPokemon>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Requisição a API
  const fetchPokemon = async (pokemon: string) => {
    try {
      //Diz que ta carregando
      setIsLoading(true);
      const APIResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
      }
    } catch (e) {
      alert(e);
    } finally {
      // Ao final da execução da requisição diz que não ta carregando
      setIsLoading(false);
    }
  };

  // Função que checa se a tecla do input que foi apertada enquanto digitava é ENTER
  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      //Se for enter faz a requisição
      const data = await fetchPokemon(typedPokemon);
      if (data) {
        //Se tem dados na requisição ele armazena os valores que foram recebidos
        setSearchedPokemon({
          id: data.id,
          name: data.name,
          image: data["sprites"]["front_default"],
        });
        // Após apertar enter, diz que o valor do useState de pokemon é igual o que foi buscado após apertar enter
        setPokemon(data.id.toString());
        return;
      }
      //Caso não encontra nada vai mostra um Not found
      setSearchedPokemon({
        name: "Not found :c",
      });
    }
  };

  //Função que renderiza o primeiro pókemon assim que entra no site
  const loadFirstRender = async () => {
    const getPokemon = await fetchPokemon("598");
    if (getPokemon) {
      //Se tem dados na requisição ele armazena os valores que foram recebidos
      setSearchedPokemon({
        id: getPokemon.id,
        name: getPokemon.name,
        image: getPokemon["sprites"]["front_default"],
      });
      return;
    }
    //Caso não encontra nada vai mostra um Not found
    setSearchedPokemon({
      name: "Not found :c",
    });
  };

  // Executa essa função apenas quando entrar a primeira vez no site (quando da reloading cont como a primeira vez tambem)
  useEffect(() => {
    loadFirstRender();
  }, []);

  // Buscar pokemons recebendo valores dos botões
  const onChangeButtons = async (pokemon: string) => {
    const getPokemon = await fetchPokemon(pokemon);
    if (getPokemon) {
      //Se tem dados na requisição ele armazena os valores que foram recebidos
      setSearchedPokemon({
        id: getPokemon.id,
        name: getPokemon.name,
        image: getPokemon["sprites"]["front_default"],
      });
      return;
    }
    //Caso não encontra nada vai mostra um Not found
    setSearchedPokemon({
      name: "Not found :c",
    });
  };

  //Sempre que o pokemon muda, a função que busca por pokemons recebendo o clique dos botões é chamada
  useEffect(() => {
    onChangeButtons(pokemon);
  }, [pokemon]);

  //Botão de Prev, dizendo que o valor a ser buscado vai ser o anterio
  const handleClickPrev = () => {
    // +pokemon transforma o valor de pokemon (vindo do useState) vai ser convertido em um número
    let poke = +pokemon;
    // Pega o valor convertido, diminui 1 e transforma em string denovo.
    setPokemon((poke -= 1).toString());
  };
  //Botão de Next, dizendo que o valor a ser buscado vai ser o posterior
  const handleClickFoward = () => {
    // +pokemon transforma o valor de pokemon (vindo do useState) vai ser convertido em um número
    let poke = +pokemon;
    // Pega o valor convertido, aumenta em 1 e transforma em string denovo.
    setPokemon((poke += 1).toString());
  };

  return (
    <Center>
      <Pokedex>
        <Sprit src={searchedPokemon?.image} />
        <Wrapper>
          <Number>{!isLoading && searchedPokemon?.id} </Number>
          <Name>{isLoading ? "Loading..." : searchedPokemon?.name}</Name>
        </Wrapper>
        <Texto
          placeholder="Name or Number"
          onChange={(e: {
            target: { value: React.SetStateAction<string> };
          }) => {
            setTypedPokemon(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Buttonwrapper>
          <Button variante="button1" onClick={handleClickPrev}>
            Prev &lt;
          </Button>
          <Button variante="button1" onClick={handleClickVolta}>
            Volta
          </Button>
          <Button variante="button1" onClick={handleClickFoward}>
            Next &gt;
          </Button>
        </Buttonwrapper>
      </Pokedex>
    </Center>
  );
};
