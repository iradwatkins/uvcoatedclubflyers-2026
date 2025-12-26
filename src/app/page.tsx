export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #581c87 0%, #3b0764 50%, #1e0533 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#e879f9' }}>UV Coated</span> Club Flyers
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Pricing</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #e879f9, #c026d3)',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}>
          PREMIUM UV COATING
        </div>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Flyers That<br />
          <span style={{ color: '#e879f9' }}>Shine Under the Lights</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Ultra-glossy UV coating that catches the light and catches attention.
          The go-to choice for nightclubs, concerts, and premium events.
        </p>
        <a href="#products" style={{
          background: 'linear-gradient(90deg, #e879f9, #c026d3)',
          color: 'white',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>
          Order Premium Flyers
        </a>
      </section>

      {/* Benefits */}
      <section style={{
        padding: '3rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '✨', label: 'High Gloss Finish' },
            { icon: '💪', label: 'Scratch Resistant' },
            { icon: '🎨', label: 'Vibrant Colors' },
            { icon: '📸', label: 'Photo Quality' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              <div style={{ marginTop: '0.5rem', opacity: 0.9 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{
        padding: '4rem 2rem'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>UV Coated Products</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Club Flyers 4x6', qty: '1,000', price: '$49', feature: 'Both sides UV coated' },
            { name: 'Club Flyers 4x6', qty: '5,000', price: '$149', feature: 'Both sides UV coated' },
            { name: 'Postcards 5x7', qty: '1,000', price: '$79', feature: 'Front UV coated' },
            { name: 'Business Cards', qty: '1,000', price: '$39', feature: 'Both sides UV coated' },
          ].map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h4>
              <p style={{ opacity: 0.6, margin: '0.5rem 0' }}>{product.qty}</p>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#e879f9', margin: '1rem 0' }}>{product.price}</div>
              <span style={{
                background: 'rgba(232,121,249,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                color: '#e879f9'
              }}>{product.feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Shine?</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Rush orders and custom sizes available.
        </p>
        <a href="mailto:orders@uvcoatedclubflyers.com" style={{
          color: '#e879f9',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          orders@uvcoatedclubflyers.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 UV Coated Club Flyers. All rights reserved.</p>
      </footer>
    </main>
  )
}
