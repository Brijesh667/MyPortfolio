import portfolio from "../../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  const github = portfolio.socials.find((social) => social.icon === "Github");
  const linkedin = portfolio.socials.find((social) => social.icon === "Linkedin");

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-24 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-8">
        <p>
          © {year} {portfolio.footer.copyright}
        </p>

        <div className="flex flex-wrap items-center gap-5">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
