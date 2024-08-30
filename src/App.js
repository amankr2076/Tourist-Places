import './App.css';
import data from './data'
import Tour from './components/Tour';
import { useState } from 'react';

function App() {

  const [tours,setData]=useState(data);

  function remove_element(id)
  {
    const newtours=tours.filter(function(tour)
    {
       return tour.id!==id;
    })

    setData(newtours);
  }

  function refreshHandler()
  {
    setData(data);
  }

  function addcards(obj)
  {
    console.log(obj);
    let new_obj=[obj,...tours]
    console.log(new_obj);
    setData(new_obj);
  }

  function undo_element(id)
  {
    let element=data.find(function(obj)
    {
      return obj.id===id;
    })

    let new_data=[element,...tours];
    setData(new_data);
  }



  if(tours.length===0)
    {
      return(
        <div className='refresh-div'>
          <p className='no-left'>No destination Left</p>
          <button className='refresh-btn' onClick={refreshHandler}>Refresh</button>
        </div>
      )
    }



  return (
    <div className='parent'>
      <Tour tours={tours} remove_element={remove_element} addcards={addcards} undo_element={undo_element}></Tour>
    </div>
  );
}

export default App;
