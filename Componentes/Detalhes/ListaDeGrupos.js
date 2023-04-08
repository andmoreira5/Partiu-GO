import { ScrollView } from "react-native";
import CardHojeTemGrupo from "../Home/CardHojeTemGrupo";
import React, {useContext} from "react";
import { Context } from "../Contexto";

const ListaDeGrupos = () => {
  const { grupos } = useContext(Context);

  return (
    <ScrollView horizontal={true} className="my-5">
      {grupos.map((el, index) => {
        return <CardHojeTemGrupo item={el} key={index} />;
      })}
    </ScrollView>
  );
};

export default ListaDeGrupos;
