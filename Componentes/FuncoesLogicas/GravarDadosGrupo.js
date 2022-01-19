import { gravarDado } from "./LerDados";
import verificarGrupo from "./VerificarGrupo";

export default function executar(){
    const data = verificarGrupo();
     gravarDado("titulo", data.titulo);
     gravarDado("conteudo", data.conteudo);
}