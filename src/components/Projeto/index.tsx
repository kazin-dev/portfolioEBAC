import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo/titulo";
import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo valor='Projeto de lista de tarefas' />
    <Paragrafo tipo="secundario">
      Lista de Tarefas feita com vue.js
    </Paragrafo>
    <LinkBotao href='#'>Vizualizar</LinkBotao>{/* Adicionado atributo href */}
  </Card>
);

export default Projeto;
