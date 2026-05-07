import styled from 'styled-components';


export const Div = styled.div`
  width: min(600px, 100%);
  height: min(500px, 60vw);

  @media (max-width: 960px) {
    height: min(420px, 70vw);
  }

  @media (max-width: 640px) {
    height: min(320px, 78vw);
  }
`;
