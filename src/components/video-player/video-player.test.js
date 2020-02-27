import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

const mock = {
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Should render VideoPlayer`, () => {
  const {preview, poster} = mock;

  const tree = renderer.create(<VideoPlayer
    src={preview}
    poster={poster}
    isPlaying={false}
    muted={false}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
