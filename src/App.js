import React from 'react';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      minHeight: '100vh', padding: '32px 0', fontFamily: 'Montserrat, Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: 500,
        margin: '32px auto',
        background: '#fffdfa',
        borderRadius: '20px',
        boxShadow: '0 4px 32px #f9c06d99',
        padding: '40px 32px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3em',
          fontWeight: 'bold',
          letterSpacing: '2px',
          color: '#9833fa',
          marginBottom: '0.3em'
        }}>
          Akinmeji Precious
        </h1>
        <h2 style={{
          fontSize: '2em',
          color: '#ffa85c',
          marginBottom: '1em'
        }}>
          Habit Quest 🚀
        </h2>
        <p style={{ fontSize: '1.15em', color: '#555', marginBottom: '2em' }}>
          Welcome to Habit Quest! Track habits, complete missions, and level up your life like an adventure. Ready to begin?
        </p>
        <button
          style={{
            padding: '14px 32px',
            fontSize: '1.2em',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(90deg,#ffa85c 60%, #9833fa 100%)',
            borderRadius: '10px',
            border: 'none',
            boxShadow: '0 2px 8px #d0a4',
            cursor: 'pointer'
          }}
          onClick={() => alert('Next: Profile & Missions coming soon!')}
        >
          Start Your Quest
        </button>
      </div>
    </div>
  );
}

export default App;