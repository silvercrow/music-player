import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 10px 20px;
  border-top: 1px solid #fff;
  transition: all 0.2s ease-in;
  overflow: auto;
  background-color: #f6f6f6;
  background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);

  &:hover {
    box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    -webkit-box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    -moz-box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    -o-box-shadow: inset 1px 1px 52px -24px #ababab, 5px 5px 5px 1px #dddddd;
    background-color: #d9d9d9;
    background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
  }
`;

export const Info = styled.span`
  margin-left: 30px;
`;
