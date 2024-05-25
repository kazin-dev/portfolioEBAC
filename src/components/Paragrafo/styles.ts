import styled from 'styled-components';
import { Props } from './index';

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282A35' : '#949494')} ;
  line-height: 20px;
`;

export default P;



