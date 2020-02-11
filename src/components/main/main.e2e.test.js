import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const main = shallow(
      <Main
        title = {`The Grand Budapest Hotel`}
        genre = {`Drama`}
        releaseDate = {`2014`}
        titles = {[
          `Fantastic Beasts: The Crimes of Grindelwald`,
          `Bohemian Rhapsody`,
          `Macbeth`
        ]}
        onHeaderClick = {onHeaderClick}
      />
  );

  const header = main.find(`header`);
  header.props().onClick();

  expect(onHeaderClick.mock.calls.length).toBe(1);
});
