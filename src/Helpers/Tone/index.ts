import * as Tone from 'tone';

export const lowPassFrequency = 1000;
export const highPassFrequency = 4000;
export const bandPassCenter = (highPassFrequency + lowPassFrequency) / 2;
export const bandpassQ = bandPassCenter / (highPassFrequency - lowPassFrequency);

export const audioPlayer = new Tone.Player({
  url: '/audio/titanic.mp3',
  loop: true,
  autostart: false,
}).toDestination();

export const lowpassFilter = new Tone.BiquadFilter({
  type: 'lowpass',
  frequency: 1000,
  gain: 0,
});

export const bandpassFilter = new Tone.BiquadFilter({
  type: 'bandpass',
  frequency: bandPassCenter,
  Q: bandpassQ,
  gain: 0,
});

export const highpassFilter = new Tone.BiquadFilter({
  type: 'highpass',
  frequency: 4000,
  gain: 0,
});

audioPlayer.connect(lowpassFilter).connect(bandpassFilter).connect(highpassFilter);
