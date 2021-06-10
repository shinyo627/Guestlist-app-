import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName('');
  };

  console.log(name);
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => {
          return <li key={guest}>{guest}</li>;
        })}
      </ul>

      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
