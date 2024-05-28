import styled from 'styled-components';

interface Props {
  fontSize?: number;
  tipo?: 'principal' | 'secundario';
}

const Paragrafo = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282A35' : '#949494')};
  line-height: 20px;
`;

export default Paragrafo;
