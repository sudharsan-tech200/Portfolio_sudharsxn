import { D } from "../data/portfolio";
import { IconClose, IconDownload } from "./Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "rgba(6, 8, 19, 0.85)",
        backdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0c1024",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          borderRadius: 24,
          maxWidth: 850,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "36px 40px",
          position: "relative",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
          color: "var(--text-primary)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: 20,
            marginBottom: 24,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 11,
                fontFamily: "var(--font-mono)",
                color: "var(--cyan)",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                fontWeight: 700,
              }}
            >
              Resume Overview
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, margin: "4px 0 0" }}>
              {D.fullName} — Curriculum Vitae
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={handlePrint}
              style={{
                padding: "8px 16px",
                borderRadius: 10,
                background: "var(--cyan)",
                border: "none",
                color: "#000",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <IconDownload size={14} color="#000" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "var(--text-primary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close modal"
            >
              <IconClose size={18} />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)" }}>
          {/* Header & Contacts */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
              {D.role} · {D.careerTarget}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
              📍 {D.location} · ✉️ {D.email}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--cyan)", textTransform: "uppercase", marginBottom: 8 }}>
              Education
            </h4>
            <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
              Sri Krishna College of Engineering and Technology (SKCET), Coimbatore
            </div>
            <div>B.E. in Electronics and Communication Engineering (2023 – 2027)</div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--cyan)", textTransform: "uppercase", marginBottom: 8 }}>
              Experience
            </h4>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                Salzer Electronics Limited – Unit II — Intern (Coimbatore, India · 15 Days)
              </div>
              <ul style={{ paddingLeft: 20, marginTop: 4 }}>
                <li>Gained industrial exposure to electronics manufacturing processes, industrial electrical systems, and assembly workflows.</li>
                <li>Observed quality compliance mechanisms and automated testing routines.</li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                KRISHTEC — IoT Intern (Coimbatore, India)
              </div>
              <ul style={{ paddingLeft: 20, marginTop: 4 }}>
                <li>Gained industrial exposure to IoT telemetry and smart device integration.</li>
                <li>Explored AI/ML integration with embedded sensing systems.</li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--cyan)", textTransform: "uppercase", marginBottom: 8 }}>
              Key Projects
            </h4>
            <div style={{ marginBottom: 10 }}>
              <strong>NutriScan:</strong> Smart Legal Metrology Package Inspection (AI/OCR/React). Selected Top 20 / 450+ Teams in SIH 2026 Internal Hackathon.
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>Skillora:</strong> Full-Stack Learning Management System (MongoDB, Express, React, Node.js).
            </div>
            <div style={{ marginBottom: 10 }}>
              <strong>Radar Detection System:</strong> Arduino UNO, ultrasonic distance scanning, 180° servo mapping.
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--cyan)", textTransform: "uppercase", marginBottom: 8 }}>
              Technical Skills & Problem Solving
            </h4>
            <div>
              <strong>Languages:</strong> Java, Python, C++, JavaScript (ES6+)
            </div>
            <div>
              <strong>Web & DB:</strong> React.js, Node.js, Express.js, MongoDB, MySQL, REST APIs
            </div>
            <div>
              <strong>Problem Solving:</strong> 450+ LeetCode problems solved (Rating: 1524, Top 37.8%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
