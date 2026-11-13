import { navItems, site } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#top">
            <span className="brand__mark" aria-hidden="true">
              BK
            </span>
            <span className="brand__text">
              Brijesh<span className="brand__dot">.</span>Kumar
            </span>
          </a>
          <p>{site.footerTagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__meta">
          <p>
            © {year} {site.name}
          </p>
          <p>Built with React, TypeScript &amp; CSS.</p>
        </div>
      </div>
    </footer>
  );
}
