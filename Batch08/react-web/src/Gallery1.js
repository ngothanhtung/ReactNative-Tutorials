import React from 'react';

const count = 3;

export default function Gallery1() {
  // State in function
  const [state, setState] = React.useState({ index: 1 });

  const changeImage = () => {
    console.log('tick: ' + new Date());

    let newIndex = state.index + 1;
    if (newIndex > 3) newIndex = 1;
    setState({ index: newIndex });
  };

  React.useEffect(() => {
    let timerID = setInterval(() => changeImage(), 3000);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <img alt='' style={{ width: 600 }} src={'/images/' + state.index + '.jpg'} />
      </div>

      <div>
        <button
          disabled={state.index === 1}
          onClick={() => {
            let newIndex = state.index - 1;
            setState({ index: newIndex });
          }}
        >
          Previous
        </button>
        <span style={{ margin: 8 }}>
          {state.index} / {count}
        </span>
        <button
          disabled={state.index === count}
          onClick={() => {
            let newIndex = state.index + 1;
            setState({ index: newIndex });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
