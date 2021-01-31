import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
`;

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
`;

export const Loader = styled.div`
  font-size: 10px;
`;
