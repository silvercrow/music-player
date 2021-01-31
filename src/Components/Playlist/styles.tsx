import styled from 'styled-components';

export const PlaylistBox = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-top: 20px;
  height: 470px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;
