import styled from 'styled-components';

export const GuestlistBox = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-top: 20px;
  height: 450px;
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

export const Table = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
`;
export const Thead = styled.thead`
  font-family: OpenSans-Regular;
  font-size: 18px;
  color: #000;
  line-height: 1.2;
  font-weight: unset;
`;
export const TR = styled.tr`
  height: 60px;
  background-color: #ffff;
  height: 50px;
  &:hover {
    -webkit-box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    -moz-box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    -o-box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    background-color: #bdcad9;
    background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 74%);
    
`;
export const TH = styled.th`
  padding-left: 8px;
  text-align: left;
`;
export const Tbody = styled.tbody``;
export const TD = styled.td`
  padding-left: 8px;
  text-align: left;
  border-bottom: solid 1px #bdcad9;
`;
