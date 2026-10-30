import { RxLinkedinLogo, RxEnvelopeClosed, RxGithubLogo } from 'react-icons/rx';

// icon-only links: the label is the accessible name; p-1 -m-1 widens the tap
// target without moving the icons
const linkClassName = 'p-1 -m-1';

export function ContactLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/ozanyusufoglu/"
        target="_blank"
        aria-label="GitHub"
        className={linkClassName}
      >
        <RxGithubLogo aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/ozanyusufoglu/"
        target="_blank"
        aria-label="LinkedIn"
        className={linkClassName}
      >
        <RxLinkedinLogo aria-hidden="true" />
      </a>
      <a
        href="mailto:ozanyusufoglu@protonmail.com"
        aria-label="Email"
        className={linkClassName}
      >
        <RxEnvelopeClosed aria-hidden="true" />
      </a>
    </div>
  );
}
