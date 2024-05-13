import { RxLinkedinLogo } from 'react-icons/rx';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { RxGithubLogo } from 'react-icons/rx';

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
        href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-ozan-yusufoglu-71b68424"
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
