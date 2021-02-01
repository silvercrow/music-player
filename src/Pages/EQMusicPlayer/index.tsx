import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CompactView from '../../Components/CompactView';
import MaximizedView from '../../Components/MaximizedView';
import Playlist from '../../Components/Playlist';
import BasicTemplate from '../../Components/Templates/BasicTemplate';
import AudioData from '../../Helpers/AudioData';
import {
  AudioEQSelector,
  setModal,
  playSong,
  pauseSong,
  changeLowPass,
  changeBandPass,
  changeHighPass,
} from '../../Redux/Slices/AudioEQSlice';
import { MusicBox, MusicPlayer, Queue, PlayTitle } from './styles';

interface SongData {
  title: string;
  subtitle: string;
  image: string;
  audio: string;
}

const EQMusicPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const { isModalOpen, isMiniPlayerOpen, currentSong, isPlayingAudio } = useSelector(AudioEQSelector);

  useEffect(() => {
    return () => {
      dispatch(pauseSong());
    };
  }, []);

  return (
    <BasicTemplate>
      <MusicBox>
        <MusicPlayer>
          <Queue>
            <PlayTitle>Playlist</PlayTitle>
            <Playlist
              playlist={AudioData}
              playSong={(props: SongData) => {
                dispatch(playSong(props));
              }}
            />
          </Queue>
          <CompactView
            showCompact={isMiniPlayerOpen}
            clickMaximize={() => dispatch(setModal(true))}
            clickStopMusic={() => {
              dispatch(pauseSong());
            }}
            song={currentSong}
          />
          <MaximizedView
            showMaximized={isModalOpen}
            clickMimimize={() => dispatch(setModal(false))}
            song={currentSong}
            isPlaying={isPlayingAudio}
            clickPlayMusic={(props: SongData) => dispatch(playSong(props))}
            clickStopMusic={() => dispatch(pauseSong())}
            updateLowPass={(value: number) => dispatch(changeLowPass(value))}
            updateBandPass={(value: number) => dispatch(changeBandPass(value))}
            updateHighPass={(value: number) => dispatch(changeHighPass(value))}
          />
        </MusicPlayer>
      </MusicBox>
    </BasicTemplate>
  );
};

export default EQMusicPlayer;
