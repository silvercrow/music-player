import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 10px 20px;
  border-top: 1px solid #fff;
  cursor: pointer;
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
export const ArtCover = styled.div`
  border-radius: 10px;
  width: 32px;
  height: 32px;
  -o-object-fit: cover;
  object-fit: cover;
  margin-right: 16px;
  box-shadow: inset 1px 1px 5px -4px #ababab, 5px 5px 5px 1px #dddddd;
  -webkit-box-shadow: inset 1px 1px 5px -4px #ababab, 2px 8px 3px 1px #ddd;
  -moz-box-shadow: inset 1px 1px 5px -4px #ababab, 5px 5px 5px 1px #dddddd;
  -o-box-shadow: inset 1px 1px 5px -4px #ababab, 5px 5px 5px 1px #dddddd;
`;
export const ItemInfo = styled.div``;
export const Title = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: #46505f; ;
`;
export const Subtitle = styled.div`
  font-size: 10px;
  color: #59657c;
`;
