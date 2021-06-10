import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      dfadf
    </ChildAsFC>
  );
};

export default Parent;
