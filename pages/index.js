export default function Home() {
  return (
    <div style={{ 
      padding: 20, 
      fontFamily: '-apple-system, sans-serif',
      background: '#f0f9f4',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#059669', fontSize: 32, marginTop: 50 }}>
        🌿 Conscious Habitat
      </h1>
      <p style={{ color: '#4b5563', fontSize: 18 }}>
        Zero-Cost Sustainable Home Business
      </p>
      
      <div style={{ 
        background: 'white', 
        padding: 30, 
        borderRadius: 16,
        margin: '40px auto',
        maxWidth: 400,
        boxShadow: '0 4px 20px rgba(0,100,80,0.1)'
      }}>
        <h2 style={{ color: '#1f2937' }}>💰 Revenue Streams</h2>
        <div style={{ textAlign: 'left', margin: '20px 0' }}>
          <p>✅ $150 per audit</p>
          <p>✅ $3-5 affiliate commissions</p>
          <p>✅ $29 digital plans</p>
          <p>✅ $199 courses</p>
        </div>
        <button style={{
          background: '#059669',
          color: 'white',
          padding: '14px 28px',
          borderRadius: 10,
          border: 'none',
          fontSize: 16,
          fontWeight: 'bold',
          width: '100%',
          marginTop: 10
        }}>
          Launch Business
        </button>
      </div>
      
      <p style={{ color: '#6b7280', marginTop: 40 }}>
        Next: Deploy to Vercel for free hosting
      </p>
    </div>
  );
}
