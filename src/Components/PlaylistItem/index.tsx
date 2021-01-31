import React from 'react';
import { ListItem, ArtCover, ItemInfo, Title, Subtitle } from './styles';

interface ItemProps {
  title: string;
  subtitle: string;
  image: string;
  audio: string;
  onClick: (e: React.MouseEvent) => void;
}

const PlaylistItem: React.FC<ItemProps> = (props) => {
  return (
    <ListItem onClick={props.onClick}>
      <ArtCover>
        <img src={props.image} alt="Album cover" />
      </ArtCover>
      <ItemInfo>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </ItemInfo>
    </ListItem>
  );
};

export default PlaylistItem;
