import './App.css';
import React from 'react';
import Friends from './Friends';
import HeartButtonClass from './HeartButtonClass';
import Gallery1Class from './Gallery1Class';
import Gallery2Class from './Gallery2Class';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import LikeButtonClass from './LikeButtonClass';
import LikeButton from './LikeButton';
import TextInput from './C1.7/TextInput';
import SelectInput from './C1.7/SelectInput';
import CheckBox from './C1.7/CheckBox';

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
    </div>
  );
}

export default App;
