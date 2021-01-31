import styled from 'styled-components';

interface Props {
  visible: boolean;
}

export const CompactBox = styled.div<Props>`
  display: ${(p) => (p.visible === true ? 'block' : 'none')};
  position: relative;
  width: 100%;
  height: 76px;
  bottom: 0;
  background-color: #3c4553;
  padding: 16px 20px;
  margin-top: auto;
  background-color: #5b6467;
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
  border-radius: 10px;
`;
export const ExtendButton = styled.button`
  position: absolute;
  left: 42%;
  top: -20px;
  padding: 12px 0;
  border-radius: 50%;

  background-color: #5b6467;

  transition: all 0.3s ease;
  &:hover {
    top: -30px;
    transition: all 0.3s ease;
  }
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  background-color: #ffcd00;
`;
export const Arrow = styled.span`
  position: absolute;
  left: 12%;
  top: 5px;
  height: 30px;
  width: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' class='feather feather-chevron-up' width='' viewBox='0 0 24 24'%3E%3Cdefs/%3E%3Cpath d='M18 15l-6-6-6 6'/%3E%3C/svg%3E");
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
export const ArtCover = styled.div`
  img {
    border-radius: 10px;
    width: 32px;
    height: 32px;
    -o-object-fit: cover;
    object-fit: cover;
    margin-right: 16px;
  }
`;
export const InfoWrapper = styled.div``;
export const Title = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 800;
  color: #fff;
`;
export const Subtitle = styled.div`
  font-size: 10px;
  color: #fff;
`;
export const ButtonsWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;
export const StopButton = styled.button`
  background-color: #ffff;
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin-right: 24px;
`;
export const NextButton = styled.div`
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Progress = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
`;
export const CurrentTime = styled.div`
  display: inline-block;
  font-size: 8px;
  line-height: 12px;
  color: #fff;
`;
export const ProgressBar = styled.div`
  height: 2px;
  width: 100%;
  margin: 0 8px;
  background-color: #1f2128;
  border-radius: 2px;
  overflow: hidden;
`;
export const ProgressFill = styled.div`
  display: block;
  position: relative;
  width: 40%;
  height: 100%;
  background-color: #ffcd00;
  border-radius: 6px;
`;
export const TimeLeft = styled.div`
  display: inline-block;
  font-size: 8px;
  line-height: 12px;
  color: #fff;
`;
