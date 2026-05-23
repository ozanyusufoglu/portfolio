import { RxLinkedinLogo, RxEnvelopeClosed, RxGithubLogo } from 'react-icons/rx';

export function ContactLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/ozanyusufoglu/"
        target="_blank"
      >
        <RxGithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/ozanyusufoglu/"
        target="_blank"
      >
        <RxLinkedinLogo />
      </a>
      <a href="mailto: ozanyusufoglu@protonmail.com">
        <RxEnvelopeClosed />
      </a>
    </div>
  );
}
