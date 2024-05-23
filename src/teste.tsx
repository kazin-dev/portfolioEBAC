import styled from 'styled-components';

type BotaoProps = {
  principal : boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? ' #6200ea' : 'red')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3700b3;
  }
`;

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Cancelar</Botao>
    </>
  );
}

export default Teste;

