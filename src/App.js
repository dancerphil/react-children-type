import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const factory = (targetComponent, targetName) => {
  const Display = ({children}) => (
    <Fragment>
      <div>{`children.type === ${targetName}: ${children.type === targetComponent}`}</div>
      <div>{`children.type.name === '${targetName}': ${children.type.name === targetName}`}</div>
      <div>{`children.type.displayName === '${targetName}': ${children.type.displayName === targetName}`}</div>
    </Fragment>
  );
  return Display;
}

class ClassComponent extends Component {}
ClassComponent.displayName = 'ClassComponent';

const FunctionalComponent = () => null;
FunctionalComponent.displayName = 'FunctionalComponent';

const IsMyChildClassComponent = factory(ClassComponent, 'ClassComponent')
const IsMyChildFunctionalComponent = factory(FunctionalComponent, 'FunctionalComponent')

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>ClassComponent</div>
      <IsMyChildClassComponent>
        <ClassComponent />
      </IsMyChildClassComponent>
      <div>------</div>
      <div>FunctionalComponent</div>
      <IsMyChildFunctionalComponent>
        <FunctionalComponent />
      </IsMyChildFunctionalComponent>
    </header>
  </div>
);

export default App;
