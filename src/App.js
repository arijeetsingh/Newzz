import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import NavInshorts from './components/NavInshorts'
import NewsContent from './components/NewsContent/NewsContent'
import apikey from './data/config'
import Footer from './components/Footer/Footer'

function App() {
  const [category, setCategory] = useState('general')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadMore, setLoadMore] = useState(20)

  const newsApi = async () => {
    try {
      const proxyUrl = `https://cors-anywhere.herokuapp.com/`
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&pageSize=${loadMore}&category=${category}`
      )
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(newsArray)
  useEffect(() => {
    newsApi()
  }, [newsResults, loadMore, category])

  return (
    <div className='App'>
      <NavInshorts setCategory={setCategory} />
      <NewsContent
        setLoadMore={setLoadMore}
        loadMore={loadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  )
}

export default App
