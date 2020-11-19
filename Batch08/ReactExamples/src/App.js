import './App.css';
import React from 'react';
import Friends from './C1.4/Friends';
import HeartButtonClass from './C1.6/HeartButtonClass';
import Gallery1Class from './C1.6/Gallery1Class';
import Gallery2Class from './C1.6/Gallery2Class';
import Gallery1 from './C1.6/Gallery1';
import Gallery2 from './C1.6/Gallery2';
import LikeButtonClass from './C1.5/LikeButtonClass';
import LikeButton from './C1.5/LikeButton';
import TextInput from './C1.7/TextInput';
import SelectInput from './C1.7/SelectInput';
import CheckBox from './C1.7/CheckBox';
import MoreHandleEvent from './C1.7/MoreHandleEvent';

function App() {
  const [state, setState] = React.useState({ visible: true });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Friends></Friends>

      {/* <HeartButtonClass></HeartButtonClass> */}
      {/* <Gallery1Class></Gallery1Class> */}
      {state.visible && <Gallery1Class></Gallery1Class>}
      {/* {state.visible && <Gallery1></Gallery1>} */}
      {/* <Gallery2Class></Gallery2Class> */}
      {/* <Gallery2></Gallery2> */}
      <button
        onClick={() => {
          let newValue = !state.visible;
          setState({ visible: newValue });
        }}
      >
        Click me
      </button>

      <LikeButtonClass
        count={2}
        color='white'
        onClick={() => {
          alert('DONE');
        }}
      ></LikeButtonClass>
      <LikeButton count={4}></LikeButton>

      <TextInput></TextInput>
      <SelectInput></SelectInput>
      <CheckBox></CheckBox>
      <MoreHandleEvent></MoreHandleEvent>
    </div>
  );
}

export default App;
