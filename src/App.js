import logo from './logo.svg';
import './App.css';
import * as React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button className="btn-skill" data-poolname="Chupai" bindtap="tapxushaoActive">
          <img
            className="icon"
            src="style/images/xushao.jpg"
            mode="aspectFit"
            alt="出牌阶段"
          />
          <span className="skill-display">出牌阶段</span>
        </button>
      </div>
    );
  }
}
export default App;
