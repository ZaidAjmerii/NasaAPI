import { useEffect, useState } from 'react';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModel, setShowModel] = useState(false);
  
  function handleSidebar() {
    setShowModel(!showModel);
  }


  
  useEffect(() => {
    
    
    async function fetchData(){
      const api = import.meta.env.VITE_API;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${api}`



      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()




      try {
        const res = await fetch(url)
        const apidata = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apidata)
        console.log('Fetched from API today')

      } catch(err){

        console.log(err.message)
      }
    }
    fetchData()

  }, [])
  





  return (
    <>
     {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel && <Sidebar data={data} handleSidebar={handleSidebar} />}
      {data && (
        <Footer data={data} handleSidebar={handleSidebar} />
      )}
    </>
  );
}

export default App;
