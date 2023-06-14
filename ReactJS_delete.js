// App.js
import React, { useState } from 'react';

function App() {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/data/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.text())
      .then(data => console.log(data));
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
