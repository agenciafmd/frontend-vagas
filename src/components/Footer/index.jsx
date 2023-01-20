import React from "react";

import "./styles.scss";

export default function Footer() {
  return (
    <footer className="Footer" id="footer">
      <div className="container-fluid">
        <div className="container">
          <a href="#">
            <img src="/logo-footer.svg" alt="Logo Menos do Mesmo" />
          </a>
          <a href="mailto:email@email.com">email@email.com</a>
          <a href="tel:+1794736-4958">17 9 4736-4958</a>
        </div>
      </div>

      <div className="container">
        <div className="copy">
          <a href="#">F&MD</a>
        </div>
      </div>
    </footer>
  );
}
