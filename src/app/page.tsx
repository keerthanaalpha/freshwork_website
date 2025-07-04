export default function Home() {
  return (
    <div
      style={{
        padding: "100px 20px",
        textAlign: "center",
        color: "white",
        fontFamily: "'Segoe UI', sans-serif",
        minHeight: "calc(100vh - 160px)",
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <h1 style={{ fontSize: "3em", marginBottom: 20 }}>
        Welcome to UrbanTech Innovations
      </h1>
      <p style={{ fontSize: "1.2em", maxWidth: 600, margin: "auto" }}>
        Empowering the future with smart technology, automation, and cloud solutions.
      </p>
      <a
        href="#"
        style={{
          marginTop: 30,
          display: "inline-block",
          padding: "12px 24px",
          background: "#ff6600",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: 6,
          transition: "background 0.3s",
          cursor: "pointer",
        }}
      >
        Get Started
      </a>
    </div>
  );
}
