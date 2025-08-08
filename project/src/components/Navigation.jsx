import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const handleLogout = async () => {
    try {
      await fetch('https://db.madewithmanifest.com/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
      // Refresh page to trigger re-authentication check
      window.location.reload()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
  
  return (
    <nav className="bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg border-b-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-amber-200 py-4">
              🏰 Medieval Kingdom
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className={`py-4 px-6 border-b-2 transition-colors font-semibold ${
                  location.pathname === '/' 
                    ? 'border-amber-200 text-amber-100' 
                    : 'border-transparent text-amber-300 hover:text-amber-100 hover:border-amber-400'
                }`}
              >
                🏰 Kingdom
              </Link>
              <Link 
                to="/about" 
                className={`py-4 px-6 border-b-2 transition-colors font-semibold ${
                  location.pathname === '/about' 
                    ? 'border-amber-200 text-amber-100' 
                    : 'border-transparent text-amber-300 hover:text-amber-100 hover:border-amber-400'
                }`}
              >
                📜 Chronicles
              </Link>
            </div>
          </div>
          
          <div className="py-4">
            <button 
              onClick={handleLogout}
              className="py-2 px-4 text-amber-300 hover:text-amber-100 transition-colors cursor-pointer font-semibold border border-amber-600 hover:border-amber-400 rounded"
            >
              🚪 Leave Kingdom
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation