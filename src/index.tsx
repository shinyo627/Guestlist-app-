import ReactDom from 'react-dom';
import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <GuestList />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
