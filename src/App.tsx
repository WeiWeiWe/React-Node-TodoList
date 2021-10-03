import React from 'react';

interface IProps {
  test: string;
}

function App(props: IProps) {
  const { test } = props;
  return (
    <div className="App">
      <span>{test}</span>
    </div>
  );
}

export default App;
