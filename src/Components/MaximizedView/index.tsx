import React from 'react';
import RangeSlider from '../RangeSlider';
import {
  MaximizedBox,
  CloseButton,
  Cover,
  Shadow,
  Art,
  SongInfo,
  SongTitle,
  SongSubTitle,
  ButtonsBar,
  PlayButton,
  StopButton,
  VolumeTitle,
  RangeBar,
  Square,
  CloseButtonBox,
  Arrow,
} from './styles';

interface SongData {
  title: string;
  subtitle: string;
  image: string;
  audio: string;
}

interface MaximizedViewProps {
  showMaximized: boolean;
  clickMimimize: (e: React.MouseEvent) => void;
  clickStopMusic: (e: React.MouseEvent) => void;
  song: SongData;
  isPlaying: boolean;
  clickPlayMusic: (song: SongData) => void;
  updateLowPass: (value: number) => void;
  updateBandPass: (value: number) => void;
  updateHighPass: (value: number) => void;
}
const MaximizedView: React.FC<MaximizedViewProps> = (props) => {
  return (
    <MaximizedBox visible={props.showMaximized}>
      <CloseButtonBox>
        <CloseButton onClick={props.clickMimimize}>
          <Arrow />
        </CloseButton>
      </CloseButtonBox>
      <Cover>
        <Shadow>
          <img src={props.song.image} alt="Album cover" />
        </Shadow>
        <Art>
          <img src={props.song.image} alt="Album cover" />
        </Art>
      </Cover>
      <SongInfo>
        <SongTitle>{props.song.title}</SongTitle>
        <SongSubTitle>{props.song.subtitle}</SongSubTitle>
      </SongInfo>
      <ButtonsBar>
        <PlayButton isPlaying={props.isPlaying} onClick={() => props.clickPlayMusic(props.song)} />
        <StopButton isPlaying={props.isPlaying} onClick={props.clickStopMusic}>
          <Square />
        </StopButton>
      </ButtonsBar>

      <RangeBar>
        <VolumeTitle>low-pass</VolumeTitle>
        <RangeSlider updateValue={props.updateLowPass} />
        <VolumeTitle>band-pass</VolumeTitle>
        <RangeSlider updateValue={props.updateBandPass} />
        <VolumeTitle>high-pass</VolumeTitle>
        <RangeSlider updateValue={props.updateHighPass} />
      </RangeBar>
    </MaximizedBox>
  );
};

export default MaximizedView;
