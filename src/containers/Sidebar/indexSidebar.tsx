import Titulo from "../../components/Titulo/titulo";
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";

import { Descricao, BotaoTema} from "./styles";

const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20} valor="Kauã Salviano" />
    <Paragrafo tipo="secundario" fontSize={16}>Kazin-dev</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
      Engenheiro Front-end
    </Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
  </aside>
);

export default Sidebar;
