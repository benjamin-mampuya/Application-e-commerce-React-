import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import { FaHome, FaInfoCircle, FaDatabase } from 'react-icons/fa'

function Home() {
  return (
    <div className="text-center">
      <FaHome className="text-6xl text-green-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-green-600">Page d'accueil 🏠</h2>
      <p className="text-gray-600 mt-2">Bienvenue sur notre application React !</p>
    </div>
  )
}

function About() {
  return (
    <div className="text-center">
      <FaInfoCircle className="text-6xl text-blue-600 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-blue-600">À propos 📖</h2>
      <p className="text-gray-600 mt-2">Ceci est une démo utilisant React + Tailwind + FontAwesome.</p>
    </div>
  )
}

function Data() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="p-4 bg-white rounded shadow">
      <FaDatabase className="text-4xl text-purple-600 mb-2" />
      <h2 className="text-xl font-semibold mb-2">Données depuis Axios :</h2>
      {data ? (
        <pre className="bg-gray-100 p-3 rounded shadow">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p className="text-gray-500">Chargement...</p>
      )}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">
        {/* Navigation */}
        <nav className="flex space-x-6 text-lg font-medium">
          <Link
            to="/"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
          >
            <FaInfoCircle /> About
          </Link>
          <Link
            to="/data"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition"
          >
            <FaDatabase /> Data
          </Link>
        </nav>

        {/* Titre principal */}
        <h1 className="text-3xl font-bold text-gray-800">
          Vite + React + Router + Axios + FontAwesome
        </h1>

        {/* Bouton compteur */}
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>

        {/* Routes */}
        <div className="w-full max-w-2xl space-y-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
