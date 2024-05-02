import { RxLinkedinLogo } from 'react-icons/rx';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { RxGithubLogo } from 'react-icons/rx';

export function ContactLinks() {
  return (
    <div className="flex flex-row gap-x-4">
      <a
        href="https://github.com/ozanyusufoglu/"
        target="_blank"
      >
        <RxGithubLogo />
      </a>
      <a
        href="#"
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
