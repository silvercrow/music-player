import React from 'react';
import { SongData } from '../../Types/Music';
import {
  CompactBox,
  ExtendButton,
  Content,
  ArtCover,
  InfoWrapper,
  Title,
  Subtitle,
  ButtonsWrapper,
  StopButton,
  Arrow,
} from './styles';

interface CompactViewProps {
  showCompact: boolean;
  clickMaximize: (e: React.MouseEvent) => void;
  clickStopMusic: (e: React.MouseEvent) => void;
  song: SongData;
}

const CompactView: React.FC<CompactViewProps> = (props) => {
  return (
    <CompactBox visible={props.showCompact}>
      <ExtendButton onClick={props.clickMaximize}>
        <Arrow />
      </ExtendButton>
      <Content>
        <ArtCover>
          <img src={props.song.image} alt="Album cover" />
        </ArtCover>
        <InfoWrapper>
          <Title>{props.song.title}</Title>
          <Subtitle>{props.song.subtitle}</Subtitle>
        </InfoWrapper>
        <ButtonsWrapper>
          <StopButton onClick={props.clickStopMusic} />
        </ButtonsWrapper>
      </Content>
    </CompactBox>
  );
};

export default CompactView;
