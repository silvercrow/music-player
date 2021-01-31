import styled from 'styled-components';

interface MaximazedProps {
  visible: boolean;
}

export const MaximizedBox = styled.div<MaximazedProps>`
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  padding: 20px;
  transition: all 0.4s ease;
  top: 0;
  transform: ${(p) => (p.visible === true ? 'translatey(0)' : 'translatey(100%)')};
  transition: all 0.4s ease;
  background-color: #bdcad9;
  background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 74%);
  border: solid 1px white;
  border-radius: 30px;
`;
export const CloseButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    background-color: #ffcd00;
    transition: all 0.3s ease;
  }
  width: 40px;
  height: 40px;
  background-color: #ffff;
`;

export const Arrow = styled.span`
  position: relative;
  height: 30px;
  width: 30px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23536383' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' class='feather feather-chevron-down' viewBox='0 0 24 24'%3E%3Cdefs/%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
`;
export const Title = styled.div`
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 0px 0px 7px rgba(150, 150, 150, 1);
`;
export const Cover = styled.div`
  margin-top: 15px;
  position: relative;
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Shadow = styled.div`
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-46%);
    filter: blur(50px);
    width: 100%;
    height: 190px;
    z-index: -1;
  }
`;
export const Art = styled.div`
  img {
    margin: 0 auto;
    -o-object-fit: cover;
    object-fit: cover;
    width: 200px;
    height: 270px;
    border: 0;
    border-radius: 20px;
    position: relative;
    z-index: 2;
    box-shadow: 0px 0px 3px #000;
    -moz-box-shadow: 0px 0px 3px #000;
    -webkit-box-shadow: 0px 0px 3px #000;
    -khtml-box-shadow: 0px 0px 3px #000;
  }
`;
export const SongInfo = styled.div`
  text-align: center;
`;
export const SongTitle = styled.div`
  margin-top: 10px;
  color: #000;
  font-weight: 600;
`;
export const SongSubTitle = styled.div`
  color: #59657c;
  font-size: 12px;
`;
export const MaxProgress = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  max-width: 80%;
  display: flex;
  align-items: center;
  padding: 6px 0;
`;
export const CurrentTime = styled.span`
  display: inline-block;
  font-size: 8px;
  line-height: 12px;
  color: #fff;
  color: #59657c;
`;
export const ProgressBar = styled.div`
  height: 2px;
  width: 100%;
  margin: 0 8px;
  background-color: #1f2128;
  border-radius: 2px;
  overflow: hidden;
  border-radius: 6px;
  height: 4px;
  background-color: #323542;
`;
export const ProgressFill = styled.div`
  display: block;
  position: relative;
  width: 40%;
  height: 100%;
  background-color: #ffcd00;
  border-radius: 6px;
`;
export const TimeLeft = styled.span`
  display: inline-block;
  font-size: 8px;
  line-height: 12px;
  color: #fff;
  color: #59657c;
`;
export const ButtonsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;
export const PreviousSong = styled.button`
  width: 24px;
  height: 20px;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23424665' stroke='%23424665' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' class='feather feather-skip-back'%3E%3Cdefs/%3E%3Cpath d='M19 20L9 12l10-8v16zM5 19V5'/%3E%3C/svg%3E");
`;

interface PlayPauseProps {
  isPlaying: boolean;
}

export const PlayButton = styled.button<PlayPauseProps>`
  display: ${(p) => (p.isPlaying === true ? 'none' : 'block')};
  width: 40px;
  height: 40px;
  color: #fff;
  margin: 0 auto;
  background-color: #ffcd00;
  border-radius: 12px;
  padding: 4px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' stroke='%23fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' class='feather feather-play' fill='%23fff'%3E%3Cpath d='M5 3l14 9-14 9V3z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

export const StopButton = styled.button<PlayPauseProps>`
  display: ${(p) => (p.isPlaying === true ? 'block' : 'none')};
  width: 40px;
  height: 40px;
  color: #fff;
  margin: 0 auto;
  background-color: #ffcd00;
  border-radius: 12px;
  padding: 4px;

  background-repeat: no-repeat;
  background-position: center;
`;

export const Square = styled.div`
  margin: 0 auto;
  background-color: #ffff;
  height: 14px;
  width: 14px;
  cursor: pointer;
`;

export const NextSong = styled.button`
  width: 24px;
  height: 20px;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23424665' stroke='%23424665' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' class='feather feather-skip-back'%3E%3Cdefs/%3E%3Cpath d='M19 20L9 12l10-8v16zM5 19V5'/%3E%3C/svg%3E");
  transform: rotate(180deg);
`;
export const VolumeBars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;
export const Volume = styled.div`
  height: 2px;
  width: 100%;
  margin: 0 8px;
  background-color: #1f2128;
  border-radius: 2px;
  overflow: hidden;
  overflow: visible;
  cursor: pointer;
`;
export const VolumeTitle = styled.div`
  color: #59657c;
  font-size: 12px;
`;
export const PercentageFill = styled.div`
  display: block;
  position: relative;
  width: 40%;
  height: 100%;
  background-color: #6343e4;
  border-radius: 6px;

  &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #6343e4;
    right: 0;
    top: 50%;
    transform: translatey(-50%);
  }
`;

export const RangeBar = styled.div`
  margin-top: 20px;
  border: solid 1px #bdcad9;
  border-radius: 10px;
  padding: 10px;
  background-color: #bdcad9;
  background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 64%);
`;
