import styled from 'styled-components';

export const MusicBox = styled.div`
  font-family: 'DM-sans', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  margin-top: 20px;
`;

export const MusicPlayer = styled.div`
  position: relative;
  width: 320px;
  height: 620px;
  border-radius: 30px;
  box-shadow: 0px 0px 7px 1px rgba(40, 42, 13, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
  border: solid 1px #f6f6f6;
`;

export const Queue = styled.div`
  flex: 1;
  overflow: auto;
  height: calc(100% - 32px);
`;

export const PlayTitle = styled.div`
  padding: 0px 20px 6px 20px;
  display: flex;
  color: #626262;
  font-size: 18px;
  font-weight: bold;
  padding: 30px 20px 0 20px;
  text-shadow: 0px 0px 3px rgba(255, 255, 255, 1);
`;
