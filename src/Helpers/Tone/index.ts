import * as Tone from 'tone';

const lowPassFrequency = 1000;
const highPassFrequency = 4000;
const bandPassCenter = (highPassFrequency + lowPassFrequency) / 2;
const bandpassQ = bandPassCenter / (highPassFrequency - lowPassFrequency);

const lowPassGain = new Tone.Gain();
const bandPassGain = new Tone.Gain();
const highPassGain = new Tone.Gain();

export const audioPlayer = new Tone.Player({
  url: '/audio/titanic.mp3',
  loop: true,
  autostart: false,
}).toDestination();

const lowpassFilter = new Tone.BiquadFilter({
  type: 'lowpass',
  frequency: 1000,
  gain: 0,
});

const bandpassFilter = new Tone.BiquadFilter({
  type: 'bandpass',
  frequency: bandPassCenter,
  Q: bandpassQ,
  gain: 0,
});

const highpassFilter = new Tone.BiquadFilter({
  type: 'highpass',
  frequency: 4000,
  gain: 0,
});

export const setGain = (value: number, type: string) => {
  switch (type) {
    case 'lowpass':
      lowPassGain.gain.setValueAtTime(value, Tone.Transport.now());
      audioPlayer.chain(lowpassFilter, lowPassGain, Tone.Destination);
      break;
    case 'bandpass':
      bandPassGain.gain.setValueAtTime(value, Tone.Transport.now());
      audioPlayer.chain(bandpassFilter, bandPassGain, Tone.Destination);
      break;
    case 'highpass':
      highPassGain.gain.setValueAtTime(value, Tone.Transport.now());
      audioPlayer.chain(highpassFilter, highPassGain, Tone.Destination);
      break;
  }
};
