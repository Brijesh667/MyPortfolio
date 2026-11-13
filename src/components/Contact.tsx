import { contact, site, socials } from "../data/portfolio";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Contact() {
  const { copied, status, copy } = useCopyEmail(site.email);
  const contactSocials = socials.filter((social) => social.icon !== "mail");

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-panel__head">
            <p className="eyebrow">
              <span className="eyebrow__index">{contact.index}</span>{" "}
              {contact.eyebrow}
            </p>
            <h2 className="contact-title" id="contact-title">
              {contact.titleBefore} <em>{contact.titleEmphasis}</em>
            </h2>
            <p className="contact-lead">{contact.lead}</p>
          </div>

          <div className="contact-panel__actions">
            <div className="email-row">
              <a className="email-link" href={`mailto:${site.email}`}>
                <span className="email-link__label">Email</span>
                <span className="email-link__value">{site.email}</span>
              </a>
              <button
                className={`copy-btn${copied ? " is-copied" : ""}`}
                id="copyEmail"
                type="button"
                onClick={copy}
                aria-label={
                  copied
                    ? "Email address copied to clipboard"
                    : "Copy email address to clipboard"
                }
              >
                <Icon name="copy" />
                <span id="copyLabel">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-panel__meta">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <span aria-hidden="true">·</span>
              <span>{site.location}</span>
            </div>

            <ul className="socials socials--labeled" aria-label="Social links">
              {contactSocials.map((social) => (
                <li key={social.label}>
                  <a
                    className="social-link"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={social.icon} />
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="social-link"
                  href={site.resumePath}
                  download={site.resumeDownloadName}
                >
                  <Icon name="file" />
                  Résumé
                </a>
              </li>
            </ul>

            <p className="copy-status" id="copyStatus" role="status" aria-live="polite">
              {status}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
