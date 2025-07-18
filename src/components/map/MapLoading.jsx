import React from "react";

const spinnerStyle = {
    width: "64px",
    height: "64px",
    border: "8px solid #e0e0e0",
    borderTop: "8px solid #1976d2",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
};

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.7)",
    zIndex: 9999,
    flexDirection: "column",
};

const textStyle = {
    marginTop: "20px",
    color: "#1976d2",
    fontSize: "1.2rem",
    fontWeight: "500",
    letterSpacing: "1px",
};

const MapLoading = () => (
    <div style={overlayStyle}>
        <div style={spinnerStyle} />
        <div style={textStyle}>Harita Yükleniyor...</div>
        <style>
            {`
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
            `}
        </style>
    </div>
);

export default MapLoading;