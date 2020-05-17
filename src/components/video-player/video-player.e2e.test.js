import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

it(`Click by play button calls callback`, () => {
  const handlePlayButtonClick = jest.fn();
  const wrapper = shallow(
      <VideoPlayer
        isPreview={false}
        isLoading={false}
        title={``}
        progress={30}
        timeLeft={``}
        onFullScreenButtonClick={() => {}}
        onPlayButtonClick={handlePlayButtonClick}
        onCloseButtonClick={() => {}}
      >
        <video/>
      </VideoPlayer>
  );

  wrapper.find(`.player__play`).simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});

it(`Click by fullscreen button calls callback`, () => {
  const handleFullScreenButtonClick = jest.fn();
  const wrapper = shallow(
      <VideoPlayer
        isPreview={false}
        isLoading={false}
        title={``}
        progress={30}
        timeLeft={``}
        onFullScreenButtonClick={handleFullScreenButtonClick}
        onPlayButtonClick={() => {}}
        onCloseButtonClick={() => {}}
      >
        <video/>
      </VideoPlayer>
  );

  wrapper.find(`.player__full-screen`).simulate(`click`);
  expect(handleFullScreenButtonClick).toHaveBeenCalledTimes(1);
});
