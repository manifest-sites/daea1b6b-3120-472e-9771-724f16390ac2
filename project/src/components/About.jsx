import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-amber-900 mb-6 text-center">
          📜 Chronicles of the Medieval Kingdom 📜
        </h1>
        
        <div className="space-y-6 text-amber-800">
          <p className="text-xl leading-relaxed text-center bg-amber-50 p-6 rounded-lg border-2 border-amber-300 shadow-lg">
            Welcome, noble visitor, to the ancient chronicles of our medieval realm. 
            Within these digital scrolls lie the tales, wisdom, and lore of a kingdom 
            steeped in honor, chivalry, and timeless adventure.
          </p>
          
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-300 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 flex items-center">
              🏰 The Royal Castle
            </h2>
            <p className="leading-relaxed text-lg">
              Our majestic castle stands as a testament to medieval architecture and engineering. 
              Built with massive stone blocks and defended by towering walls, it serves as the 
              heart of our kingdom where brave knights gather and important decisions are made.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-300 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 flex items-center">
              ⚔️ Knights of the Round Table
            </h2>
            <p className="leading-relaxed text-lg">
              Our noble knights uphold the sacred code of chivalry, protecting the innocent, 
              defending the realm, and living by honor above all else. Each knight has sworn 
              an oath of loyalty to the crown and to the protection of all who dwell within our borders.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-300 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 flex items-center">
              🏘️ Village Life
            </h2>
            <p className="leading-relaxed text-lg">
              In our bustling village square, merchants trade their finest wares, blacksmiths 
              forge mighty swords, and bards tell tales of legendary quests. The village is 
              where the common folk live, work, and celebrate the traditions passed down through generations.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-300 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 flex items-center">
              🔮 Ancient Mysteries
            </h2>
            <p className="leading-relaxed text-lg">
              Deep within our kingdom lie ancient secrets and mystical artifacts from ages long past. 
              Scholars and sages study these mysteries, seeking to understand the magical forces 
              that once shaped our world and may yet play a role in our future.
            </p>
          </div>
          
          <div className="text-center bg-gradient-to-r from-amber-200 to-amber-300 p-8 rounded-lg border-2 border-amber-400 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">
              🌟 Join Our Quest 🌟
            </h2>
            <p className="text-xl leading-relaxed font-medium">
              Every great adventure begins with a single step into the unknown. 
              Whether you seek glory, knowledge, or simply the thrill of exploration, 
              our medieval kingdom welcomes all who approach with courage and honor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About