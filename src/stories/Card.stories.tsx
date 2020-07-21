import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Card from '../components/Card';
import Background from '../components/Background';

export default {
  title: 'Card',
  decorators: [withKnobs],
};

// Knobs for React props
export const withoutBackground: React.SFC = () => (
  <Card
    image={text(
      'Image Url',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
    )}
    title={text('Title', 'Wear a facemask')}
    decription={text(
      'Decription',
      'You should wear facemask when you are around other people'
    )}
    discussionNumber={number('Discussion Number', 153)}
  />
);

export const withBackground: React.SFC = () => (
  <Background>
    <Card
      image={text(
        'Image Url',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
      )}
      title={text('Title', 'Wear a facemask')}
      decription={text(
        'Decription',
        'You should wear facemask when you are around other people'
      )}
      discussionNumber={number('Discussion Number', 153)}
    />
  </Background>
);
