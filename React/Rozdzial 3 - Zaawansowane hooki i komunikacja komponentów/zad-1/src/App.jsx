import UseApiData from '../components/UseApiData/UseApiData'
import './App.css'

function App() {

  const {isLoading, data} = UseApiData('https://jsonplaceholder.typicode.com/posts')


  return (
    <>
    <div>
            {isLoading ? (
                <p>Ładowanie...</p>
            ) : data ? (
                <div>
                    <h2>{data[0].title}</h2>
                    <p>{data[0].body}</p>
                </div>
            ) : (
                <p>Nie udało się załadować danych</p>
            )}
        </div>
    </>
  )
}

export default App
