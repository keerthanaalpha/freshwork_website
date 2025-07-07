import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AuthentHeader from "@/components/AuthentHeader";
import SessionWrapper from "@/components/SessionWrapper";
import { ReactNode } from "react";
import ToasterClient from "@/components/ToasterClient";
import WhiteSupportIcon from "@/components/WhiteSupportIcon";
import Script from "next/script"; // ✅ Import Script from next/script

export const metadata = {
  title: "Etihad Airways",
  description: "Empowering the future with smart technology",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body style={bodyStyle}>
        <SessionWrapper session={session}>
          <header style={headerStyle}>
            <div style={logoStyle}>Etihad Airways</div>
            <nav style={navStyle}>
              <a href="/" style={navLinkStyle}>
                <i className="fas fa-home" style={{ marginRight: 5 }}></i>Home
              </a>
              <a href="/about" style={navLinkStyle}>
                <i className="fas fa-info-circle" style={{ marginRight: 5 }}></i>About
              </a>
              <a
                className="gap-2"
                target="_blank"
                href="https://alphadata840519607028390.freshdesk.com/support/home"
                style={navLinkStyle}
              >
                <WhiteSupportIcon />
                Support
              </a>
              <AuthentHeader />
            </nav>
          </header>

          <ToasterClient />
          <main>{children}</main>

          <footer style={footerStyle}>
            <h3>Contact Us</h3>
            <div style={contactInfoStyle}>
              <p>
                <i className="fas fa-phone" style={{ color: "#ff6600", marginRight: 8 }}></i>
                +971-800-12-0800
              </p>
              <p>
                <i className="fas fa-envelope" style={{ color: "#ff6600", marginRight: 8 }}></i>
                support@Etihad Airways.ae
              </p>
              <p>
                <i className="fas fa-map-marker-alt" style={{ color: "#ff6600", marginRight: 8 }}></i>
                ABC city street, Techcity, AbuDhabi, UAE
              </p>
            </div>
            <p>© 2025 Etihad Airways. All rights reserved.</p>
          </footer>
        </SessionWrapper>

        {/* ✅ External Chat Script */}
        <Script
          src="//uae.fw-cdn.com/40212737/130364.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Segoe UI', sans-serif",
  background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
  color: "white",
  margin: 0,
  padding: 0,
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};

const logoStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "white",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  flexWrap: "wrap",
};

const navLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};

const footerStyle: React.CSSProperties = {
  marginTop: 80,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: "40px 20px",
  textAlign: "center",
  fontSize: "0.9em",
  color: "white",
};

const contactInfoStyle: React.CSSProperties = {
  marginTop: 20,
  lineHeight: 1.8,
};
