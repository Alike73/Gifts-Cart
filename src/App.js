import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [gifts, setGifts] = useState(data);
  const removeGift = (id) => {
    let newGifts = gifts.filter(gift => gift.id !== id);
    setGifts(newGifts);
  }
  return (
    <div>
      <div className="container">
        <h1>Total gifts {gifts.length} in cart</h1>
      </div>
      {gifts.map((element => {
        const {id, gifty, image} = element;
        return (
          <div key={id}>
            <div className="container">
              <h2>{id} &#171;{gifty}&#187;</h2>
            </div>
            <div className="container">
              <img src={image} alt="GiftImage" width="320px" />
            </div>
            <div className="container">
              <button onClick={() => removeGift(id)}>remove</button>
            </div>
          </div>
        )
      }))}
      <div className="container">
        <button onClick={() => setGifts([])}>Clear list</button>
      </div>
    </div>
  );
}

export default App;
