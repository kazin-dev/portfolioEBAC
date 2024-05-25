import { Titulo as TituloEstilo } from "./styles";

export type Props = {
  valor: string;
  fontSize?: number;
}

const Titulo = (props: Props) =>
  <TituloEstilo fontSize={props.fontSize}>{props.valor}</TituloEstilo>;

export default Titulo;
