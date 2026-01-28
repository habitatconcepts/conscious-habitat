import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll email your free audit plan to ${email}`);
    setEmail('');
  };

  return (
    <div style={{ 
      padding: 20, 
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      background: 'linear-gradient(135deg, #f0f9f4 0%, #e6f7f0 100%)',
      minHeight: '100vh',
      paddingBottom: 80
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        boxShadow: '0 4px 20px rgba(0,100,80,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36,
            height: 36,
            background: '#059669',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 20
          }}>🌿</div>
          <h1 style={{ fontSize: 20, fontWeight: 'bold', color: '#065f46' }}>
            Conscious Habitat
          </h1>
        </div>
        <button style={{
          background: '#059669',
          color: 'white',
          padding: '10px 16px',
          borderRadius: 8,
          border: 'none',
          fontWeight: 600
        }}>
          Free Guide
        </button>
      </div>

      {/* Hero Section */}
      <div style={{
        background: 'white',
        borderRadius: 16,
        padding: 30,
        marginBottom: 20,
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,100,80,0.1)'
      }}>
        <h2 style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: 10
        }}>
          Your Sustainable Home Business
        </h2>
        <p style={{
          color: '#6b7280',
          fontSize: 16,
          marginBottom: 30
        }}>
          Start making $150 per client with zero upfront cost
        </p>
        
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('audit')}
            style={{
              background: '#059669',
              color: 'white',
              padding: '14px 24px',
              borderRadius: 10,
              border: 'none',
              fontWeight: 600,
              fontSize: 16
            }}
          >
            Start Free Audit
          </button>
          <button 
            onClick={() => setActiveTab('book')}
            style={{
              background: 'white',
              color: '#059669',
              padding: '14px 24px',
              borderRadius: 10,
              border: '2px solid #059669',
              fontWeight: 600,
              fontSize: 16
            }}
          >
            Book ($150)
          </button>
        </div>
      </div>

      {/* Revenue Dashboard */}
      <div style={{
        background: 'white',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        boxShadow: '0 4px 20px rgba(0,100,80,0.1)'
      }}>
        <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>
          💰 Revenue Streams
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ textAlign: 'center', padding: 15, background: '#d1fae5', borderRadius: 10 }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#065f46' }}>$150</div>
            <div style={{ fontSize: 12, color: '#065f46' }}>Per Audit</div>
          </div>
          <div style={{ textAlign: 'center', padding: 15, background: '#dbeafe', borderRadius: 10 }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#1e40af' }}>$4.23</div>
            <div style={{ fontSize: 12, color: '#1e40af' }}>Avg Commission</div>
          </div>
          <div style={{ textAlign: 'center', padding: 15, background: '#ede9fe', borderRadius: 10 }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#5b21b6' }}>$29</div>
            <div style={{ fontSize: 12, color: '#5b21b6' }}>Digital Plan</div>
          </div>
          <div style={{ textAlign: 'center', padding: 15, background: '#fef3c7', borderRadius: 10 }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: '#92400e' }}>$199</div>
            <div style={{ fontSize: 12, color: '#92400e' }}>Course</div>
          </div>
        </div>
      </div>

      {/* Audit Form */}
      {activeTab === 'audit' && (
        <div style={{
          background: 'white',
          borderRadius: 16,
          padding: 25,
          marginBottom: 20,
          boxShadow: '0 4px 20px rgba(0,100,80,0.1)'
        }}>
          <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>
            📝 Free Sustainability Audit
          </h3>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: 14,
              border: '1px solid #d1d5db',
              borderRadius: 10,
              fontSize: 16,
              marginBottom: 15
            }}
          />
          <button 
            onClick={handleSubmit}
            style={{
              width: '100%',
              background: '#059669',
              color: 'white',
              padding: 16,
              borderRadius: 10,
              border: 'none',
              fontWeight: 600,
              fontSize: 16
            }}
          >
            Generate Free Plan
          </button>
          <p style={{ fontSize: 12, color: '#6b7280', marginTop: 10, textAlign: 'center' }}>
            We'll email your personalized roadmap
          </p>
        </div>
      )}

      {/* Email Capture */}
      <div style={{
        background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
        borderRadius: 16,
        padding: 25,
        marginBottom: 20,
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
          📬 Get Free Sustainability Tips
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 15 }}>
          Join 5,000+ homeowners
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: 14,
              border: 'none',
              borderRadius: 10,
              fontSize: 16
            }}
          />
          <button 
            onClick={handleSubmit}
            style={{
              background: '#1f2937',
              color: 'white',
              padding: '14px 20px',
              borderRadius: 10,
              border: 'none',
              fontWeight: 600
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        color: '#6b7280',
        fontSize: 12,
        padding: 20
      }}>
        <p>© {new Date().getFullYear()} Conscious Habitat</p>
        <p>Built on Next.js + Supabase - $0 to start</p>
        <p style={{ marginTop: 10 }}>
          <strong>Next Step:</strong> Deploy to Vercel for free hosting
        </p>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '15px 0',
        borderTop: '1px solid #e5e7eb'
      }}>
        {['🏠', '📝', '💰', '🛒', '📚'].map((icon, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(['home', 'audit', 'book', 'shop', 'blog'][i])}
            style={{
              fontSize: 24,
              background: 'none',
              border: 'none',
              opacity: activeTab === ['home', 'audit', 'book', 'shop', 'blog'][i] ? 1 : 0.5
            }}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
