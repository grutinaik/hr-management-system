import './App.css';
import SideBar from './SideBar.js';
import Header from './Header.js';
import HRDashboard from './HRDashboard.js';
import { useState } from 'react';
import Profile from './Profile.js';
import Settings from './Settings.js';
import Reports from './Reports.js';
import Login from './Login.js';
import Home from './Home.js';
import Features from './Features.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activePage, setActivePage] = useState('dashboard');

  const handleHomeRedirect = () => {
    setCurrentView('home');
  }

  const handleLoginRedirect = () => {
    setCurrentView('login');
  }

  const handleFeaturesRedirect = () => {
    setCurrentView('features');
  }

  const handleAboutRedirect = () => {
    setCurrentView('about');
  }

  const handleContactRedirect = () => {
    setCurrentView('contact');
  }

  const handleLogin = () => {
    setCurrentView('dashboard');
  }

  const handleLogout = () => {
    setCurrentView('home');
    setActivePage('dashboard');
  }

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <HRDashboard />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'reports':
        return <Reports />;
      default:
        return <HRDashboard />;
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onHomeRedirect={handleHomeRedirect} 
          onLoginRedirect={handleLoginRedirect} 
          onFeaturesRedirect={handleFeaturesRedirect} 
          onAboutRedirect={handleAboutRedirect} 
          onContactRedirect={handleContactRedirect} 
          activePage={currentView}/>;
      case 'features':
        return <Features onHomeRedirect={handleHomeRedirect} 
          onLoginRedirect={handleLoginRedirect} 
          onFeaturesRedirect={handleFeaturesRedirect} 
          onAboutRedirect={handleAboutRedirect} 
          onContactRedirect={handleContactRedirect}
          activePage={currentView}/>;
      case 'about':
        return <About onHomeRedirect={handleHomeRedirect}
          onLoginRedirect={handleLoginRedirect}
          onFeaturesRedirect={handleFeaturesRedirect}
          onAboutRedirect={handleAboutRedirect}
          onContactRedirect={handleContactRedirect}
          activePage={currentView}/>
      case 'contact':
        return <Contact onHomeRedirect={handleHomeRedirect} 
          onLoginRedirect={handleLoginRedirect} 
          onFeaturesRedirect={handleFeaturesRedirect} 
          onAboutRedirect={handleAboutRedirect} 
          onContactRedirect={handleContactRedirect}
          activePage={currentView}/>
        case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return (
          <>
            <Header onLogout={handleLogout}/>
            <main className="main-container">
              <SideBar
                setActivePage={setActivePage}
                activePage={activePage}
                onLogout={handleLogout}
              />
              <div className="dashboard-content">
                {renderContent()}
              </div>
            </main>
          </>
        );
      default:
        return <Home onLoginRedirect={handleLoginRedirect} onFeaturesRedirect={handleFeaturesRedirect} onAboutRedirect={handleAboutRedirect} onContactRedirect={handleContactRedirect}/>;
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;
