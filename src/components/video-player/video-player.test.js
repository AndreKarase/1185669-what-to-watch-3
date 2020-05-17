import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';


it(`Should render VideoPlayer`, () => {

  const tree = renderer.create(<VideoPlayer
    isPreview={false}
    isLoading={false}
    title={``}
    progress={30}
    timeLeft={``}
    onFullScreenButtonClick={() => {}}
    onPlayButtonClick={() => {}}
    onCloseButtonClick={() => {}}
  >
    <video/>
  </VideoPlayer>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
