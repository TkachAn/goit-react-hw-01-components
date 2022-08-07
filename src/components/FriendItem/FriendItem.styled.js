import styled from 'styled-components';
export const Online = styled.span`
  width: 25px;
  height: 25px;
  background-color: isOnline?green:red;
  border-radius: 50%;
  ${'' /* display: flex; */}
  ${'' /* align-items: center; */}
  ${'' /* gap: 8px; */}
  ${'' /* max-width: 480px; */}
  ${'' /* text-align: center; */}
`;
