import { useState } from 'react';

const users = [
  { name: 'Gregg', age: 23 },
  { name: 'Yoseob', age: 30 },
  { name: 'Timothy', age: 33 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [searched, setSearched] =
    useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name[0].toUpperCase() + name.slice(1);
    });
    setSearched(foundUser);

    // users.filter((user) => {
    //   return user.name === name;
    // });
  };

  return (
    <div>
      User Search
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find user</button>
      <div>
        {searched && searched.name}
        {searched && searched.age}
      </div>
    </div>
  );
};

export default UserSearch;
