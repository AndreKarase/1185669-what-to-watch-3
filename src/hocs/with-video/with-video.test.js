import React from 'react';
import renderer from 'react-test-renderer';
import withVideo from './with-video.js';

const MockComponent = () => (<div></div>);
const MockComponentWraped = withVideo(MockComponent);

it(`withVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWraped
      src={``}
      previewImage={``}
      isPlaying={true}
      muted={true}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
