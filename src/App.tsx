import React from 'react';

export interface AppIProps {
  test: string;
}

function App(props: AppIProps) {
  const { test } = props;
  return (
    <div className="App">
      <span>{test}</span>
    </div>
  );
}

export default App;
