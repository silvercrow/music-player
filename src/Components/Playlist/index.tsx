import React from 'react';
import { SongData } from '../../Types/Music';
import PlaylistItem from '../PlaylistItem';
import { PlaylistBox } from './styles';

interface PlaylistProps {
  playlist: SongData[];
  playSong: (song: SongData) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, playSong }: PlaylistProps) => {
  return (
    <PlaylistBox>
      {playlist.map((item, index: number) => {
        return (
          <PlaylistItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            audio={item.audio}
            onClick={() => playSong(item)}
          ></PlaylistItem>
        );
      })}
    </PlaylistBox>
  );
};

export default Playlist;
