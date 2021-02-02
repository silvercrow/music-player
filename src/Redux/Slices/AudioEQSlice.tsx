import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { audioPlayer, setGain } from '../../Helpers/Tone';
import { SongData } from '../../Types/Music';
import { AppThunk } from '../store';

export interface AudioEQState {
  currentSong: SongData;
  isModalOpen: boolean;
  isMiniPlayerOpen: boolean;
  isPlayingAudio: boolean;
  lowPassValue: number;
  bandPassValue: number;
  highPassValue: number;
}

const initialState: AudioEQState = {
  currentSong: { title: '', subtitle: '', image: '', audio: '/audio/restaurant.wav' },
  isModalOpen: false,
  isMiniPlayerOpen: false,
  isPlayingAudio: false,
  lowPassValue: 0,
  bandPassValue: 0,
  highPassValue: 0,
};

const AudioEQSlice = createSlice({
  name: 'EQAudioPlayer',
  initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isModalOpen = payload;
    },
    setMiniPlayer: (state, { payload }: PayloadAction<boolean>) => {
      state.isMiniPlayerOpen = payload;
    },
    setPlayingSong: (state, { payload }: PayloadAction<SongData>) => {
      state.currentSong = payload;
    },
    setAudioIsPlaying: (state, { payload }: PayloadAction<boolean>) => {
      state.isPlayingAudio = payload;
    },
    setLowPassValue: (state, { payload }: PayloadAction<number>) => {
      state.lowPassValue = payload;
      setGain(payload, 'lowpass');
    },
    setBandPassValue: (state, { payload }: PayloadAction<number>) => {
      state.bandPassValue = payload;
      setGain(payload, 'bandpass');
    },
    setHighPassValue: (state, { payload }: PayloadAction<number>) => {
      state.highPassValue = payload;
      setGain(payload, 'highpass');
    },
  },
});

export const {
  setModal,
  setMiniPlayer,
  setPlayingSong,
  setAudioIsPlaying,
  setLowPassValue,
  setBandPassValue,
  setHighPassValue,
} = AudioEQSlice.actions;
export default AudioEQSlice.reducer;
export const AudioEQSelector = (state: { AudioEQStore: AudioEQState }) => state.AudioEQStore;

// Player-Controls
export const playSong = (song: SongData): AppThunk => {
  audioPlayer.load(song.audio).then(() => {
    audioPlayer.start();
  });
  return async (dispatch) => {
    dispatch(setPlayingSong(song));
    dispatch(setAudioIsPlaying(true));
    dispatch(setModal(true));
    dispatch(setMiniPlayer(true));
  };
};
export const pauseSong = (): AppThunk => {
  audioPlayer.stop();
  return async (dispatch) => {
    dispatch(setMiniPlayer(false));
    dispatch(setAudioIsPlaying(false));
  };
};
export const changeLowPass = (value: number): AppThunk => {
  return async (dispatch) => {
    dispatch(setLowPassValue(value));
  };
};
export const changeBandPass = (value: number): AppThunk => {
  return async (dispatch) => {
    dispatch(setBandPassValue(value));
  };
};
export const changeHighPass = (value: number): AppThunk => {
  return async (dispatch) => {
    dispatch(setHighPassValue(value));
  };
};
