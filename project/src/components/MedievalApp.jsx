import React from 'react'
import { Card, Button, Row, Col } from 'antd'

function MedievalApp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            🏰 Ye Olde Medieval Kingdom 🏰
          </h1>
          <p className="text-xl text-amber-800">
            Welcome to a realm of knights, castles, and ancient wisdom
          </p>
        </div>

        {/* Main Content Grid */}
        <Row gutter={[24, 24]} className="mb-8">
          {/* Castle Card */}
          <Col xs={24} md={8}>
            <Card 
              title="🏰 Royal Castle" 
              className="h-full shadow-lg border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-amber-100"
              headStyle={{ backgroundColor: '#92400e', color: 'white', borderBottom: '2px solid #78350f' }}
            >
              <p className="text-amber-800 mb-4">
                Behold the magnificent castle where the royal court convenes. 
                Within these stone walls lie treasures and secrets of ages past.
              </p>
              <Button 
                type="primary" 
                className="bg-amber-700 border-amber-800 hover:bg-amber-800"
                block
              >
                Enter the Castle
              </Button>
            </Card>
          </Col>

          {/* Knights Card */}
          <Col xs={24} md={8}>
            <Card 
              title="⚔️ Knights of the Realm" 
              className="h-full shadow-lg border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-amber-100"
              headStyle={{ backgroundColor: '#92400e', color: 'white', borderBottom: '2px solid #78350f' }}
            >
              <p className="text-amber-800 mb-4">
                Noble warriors who defend the kingdom with honor and valor. 
                Their courage knows no bounds in the face of danger.
              </p>
              <Button 
                type="primary" 
                className="bg-amber-700 border-amber-800 hover:bg-amber-800"
                block
              >
                Join the Knights
              </Button>
            </Card>
          </Col>

          {/* Village Card */}
          <Col xs={24} md={8}>
            <Card 
              title="🏘️ Village Square" 
              className="h-full shadow-lg border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-amber-100"
              headStyle={{ backgroundColor: '#92400e', color: 'white', borderBottom: '2px solid #78350f' }}
            >
              <p className="text-amber-800 mb-4">
                The heart of medieval life where merchants, craftsmen, and 
                common folk gather to trade tales and goods.
              </p>
              <Button 
                type="primary" 
                className="bg-amber-700 border-amber-800 hover:bg-amber-800"
                block
              >
                Visit the Village
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Features Section */}
        <Row gutter={[16, 16]} className="mb-8">
          <Col xs={24} md={12}>
            <Card 
              title="📜 Ancient Chronicles" 
              className="shadow-lg border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-amber-100"
              headStyle={{ backgroundColor: '#92400e', color: 'white', borderBottom: '2px solid #78350f' }}
            >
              <div className="text-amber-800">
                <p className="mb-2">🗡️ Epic quests and adventures</p>
                <p className="mb-2">👑 Royal decrees and proclamations</p>
                <p className="mb-2">🏆 Legendary tales of heroism</p>
                <p>🎭 Medieval festivals and celebrations</p>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              title="🛡️ Kingdom Resources" 
              className="shadow-lg border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-amber-100"
              headStyle={{ backgroundColor: '#92400e', color: 'white', borderBottom: '2px solid #78350f' }}
            >
              <div className="text-amber-800">
                <p className="mb-2">💰 Treasury and gold reserves</p>
                <p className="mb-2">🏹 Armory and weapons</p>
                <p className="mb-2">🌾 Agricultural lands</p>
                <p>🔮 Mystical artifacts</p>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg p-8 shadow-lg border-2 border-amber-400">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            🌟 Begin Your Medieval Journey 🌟
          </h2>
          <p className="text-lg text-amber-800 mb-6">
            Step into a world of adventure, honor, and medieval splendor. 
            Your destiny awaits in this ancient realm!
          </p>
          <Button 
            size="large"
            type="primary" 
            className="bg-amber-700 border-amber-800 hover:bg-amber-800 px-8 py-3 text-lg font-semibold"
          >
            🚪 Enter the Kingdom
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MedievalApp