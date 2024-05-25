import Titulo from "../../components/Titulo/titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16} valor="Sobre mim" />
      <Paragrafo tipo="secundario">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis nihil inventore eaque assumenda earum voluptatem perspiciatis magnam, doloribus, quaerat magni exercitationem, rem mollitia voluptatum hic at laboriosam aspernatur. Laborum!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=kazin-dev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="teste"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kazin-dev&layout=compact&langs_count=7&theme=dracula" alt="teste"/>
      </GithubSecao>
    </section>
  );
}

export default Sobre;
