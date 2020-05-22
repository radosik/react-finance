import React, { useState } from 'react'; // removed useContext
import { db } from '../firebase'; // add

const ShopForm = () => {

  const [shop, setShop] = useState({
    name: '',
      description: '',
      info: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('shops').add(shop); // update
    setShop({
      name: '',
      description: '',
      info: ''
    });
  };

  const handleChange = e => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };

  return (
  <div className='section'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='name'
              name='name'
              value={shop.name}
              onChange={handleChange}
              placeholder='Name of the Shop'
              className='validate'
              required
            />
            <label className='active' htmlFor='name'>
              Shop Name
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='description'
              name='description'
              value={shop.description}
              onChange={handleChange}
              placeholder='Some description'
              className='validate'
              required
            />
            <label className='active' htmlFor='description'>
              Description
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='info'
              name='info'
              value={shop.info}
              onChange={handleChange}
              placeholder='Some info'
              className='validate'
              required
            />
            <label className='active' htmlFor='info'>
              Info
            </label>
          </div>
          <div className='input-field center'>
            <button
              type='submit'
              className="btn btn-dark"
            >
              <i className='material-icons right'>add_circle</i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopForm;