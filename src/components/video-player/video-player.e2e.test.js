import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

it(`The video pauses when you click on the play/pause button`, () => {
  const player = mount(<VideoPlayer
    src=""
    poster=""
    isPlaying={false}
    muted={false}
  />);

  window.HTMLMediaElement.prototype.play = () => {};

  const {_videoRef} = player.instance();

  jest.spyOn(_videoRef.current, `play`);

  player.instance().componentDidMount();

  player.find(`.player__play`).simulate(`click`);

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});
