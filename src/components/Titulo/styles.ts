import styled from 'styled-components';

export type Props = {
  fontSize?: number;
  children: string;
}

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px
`;

export default Titulo;



