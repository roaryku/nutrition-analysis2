
// import { useEffect } from 'react';
import './App.css';

function App() {

  const APP_ID = '4e1c9e3c';
  const APP_KEY = '7f26ffebc9e182eb8ef5e0a528b49ac3';
  const APP_URL = "https://api.edamam.com/api/nutrition-details";

 
  const fetchData = async (ingr) => {
    console.log(ingr)
    const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingr: ingr })
    })
    const data = await response.json();
    console.log(data)
  }
  fetchData()

  

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default App;
