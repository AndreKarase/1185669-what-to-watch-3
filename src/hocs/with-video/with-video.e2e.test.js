import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video.js';

configure({adapter: new Adapter()});

const Player = ({onPlayButtonClick, onFullScreenButtonClick, children}) => {
  return (
    <div>
      <button className="button-play" onClick={onPlayButtonClick} />
      <button className="button-fullscreen" onClick={onFullScreenButtonClick} />
      {children}
    </div>
  );
};

Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

it(`Checks that HOC's callback turn on video (play)`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(<PlayerWrapped
    src={``}
    poster={``}
    muted={false}
  />);

  window.HTMLMediaElement.prototype.play = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `play`);

  wrapper.instance().componentDidMount();

  wrapper.find(`.button-play`).simulate(`click`);
  wrapper.find(`.button-play`).simulate(`click`);

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn on video (pause)`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(<PlayerWrapped
    src={``}
    poster={``}
    muted={false}
  />);

  window.HTMLMediaElement.prototype.pause = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `pause`);

  wrapper.instance().componentDidMount();

  wrapper.find(`.button-play`).simulate(`click`);

  expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn on video (fullscreen)`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(<PlayerWrapped
    src={``}
    poster={``}
    muted={false}
  />);

  window.HTMLMediaElement.prototype.requestFullscreen = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `requestFullscreen`);

  wrapper.instance().componentDidMount();

  wrapper.find(`.button-fullscreen`).simulate(`click`);

  expect(_videoRef.current.requestFullscreen).toHaveBeenCalledTimes(1);
});
