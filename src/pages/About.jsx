import "../pages/about.css"
export default function About() {
  return (
    <div className="about-page__container container">
      <h1 className="about-title">Developer Profile</h1>

      <div className="stat-card">
        <h2>Kevin</h2>
        <p className="role">Frontend Developer</p>

        <ul className="stats-list">
          <li><strong>Level:</strong> 12 (React)</li>
          <li><strong>Specialty:</strong> UI/UX + API Integration</li>
          <li><strong>Abilities:</strong> Neon Design, Routing, Async Logic</li>
          <li><strong>Current Quest:</strong> Become a full‑time dev</li>
        </ul>
      </div>
    </div>
  );
}