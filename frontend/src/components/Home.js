import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: '40px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '30px',
  },
  linkButton: {
    padding: '12px 30px',
    backgroundColor: '#28a745', 
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  },
  ctaSection: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#f1f1f1', 
    borderRadius: '8px',
    marginTop: '50px',
  },
  ctaText: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px', 
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Welcome Message */}
      <h2 style={styles.header}>Why Choose Earthly Goods Products?</h2>
      <p style={styles.subHeader}>
      Our products are grown by local farmers who focus on sustainability and quality. By choosing our fresh, farm-grown items, you're supporting ethical farming practices, helping local communities, and enjoying nutritious food that’s better for you and the planet. Together, we can make a positive impact on the environment and the future of farming.


      </p>

      {/* Call to Action Section */}
      <div style={styles.ctaSection}>
        <p style={styles.ctaText}>Ready to make a difference?</p>
        <a href="/signup" style={styles.linkButton}>Start Your Journey</a> {/* Link to signup page */}
      </div>
    </div>
  );
};

export default Home;
