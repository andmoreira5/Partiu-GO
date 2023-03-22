//Faz a conexão com o banco de dados local e deixa a conexão disponível no Contexto geral da aplicação
import * as SQLite from "expo-sqlite";
import { useContext, useEffect } from "react";

export default function InicializarBanco () {

  useEffect(()=>{
    const  openDatabase = () => {
      if (Platform.OS === "web") {
        return {
          transaction: () => {
            return {
              executeSql: () => {},
            };
          },
        };
      }
    
      const db = SQLite.openDatabase("db.db");
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists digital (id integer primary key not null, uso int, usuario text, senha text);"
        ); //uso  0 (não usar digital), 1 (usar digital)

          tx.executeSql(
            `create table if not exists dados 
              (id integer primary key not null, 
                data text, 
                detalhesMes text, 
                datasAtualizacoes text, 
                getDisponibilidadeDeCaixa text, 
                somaDisponibilidadeDeCaixa text);`
          ); //essa tabela dados vai armazenar os dados da aplicação para uso offline
        
      });
    
    }


    openDatabase()
  }, [])

  return (<></>)

}
