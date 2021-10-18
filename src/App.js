import styles from './App.module.css';
// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

// class App extends Component {
//   state = {
//     count: 0,
//     color: '',
//   };

//   componentDidMount() {
//     document.title = `Вы нажали ${this.state.count} раз`;
//     this.setState({ color: 'blue' });
//   }
//   componentDidUpdate(prevProps, prevStates) {
//     document.title = `Вы нажали ${this.state.count} раз`;
//     if (prevStates.count === 2) {
//       this.setState({ color: 'green' });
//     }
//     if (prevStates.count === 5) {
//       this.setState({ color: 'red' });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <p className={styles[this.state.color]}>
//           Вы нажали {this.state.count} раз
//         </p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Нажми на меня
//         </button>
//       </div>
//     );
//   }
// }

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
    if (count === 2) {
      setColor('green');
    }
    if (count === 5) {
      setColor('red');
    }
  }, [count]);

  return (
    <div>
      <p className={styles[color]}>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
export default App;
