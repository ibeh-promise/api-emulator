import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Image alt="website logo" src="/api.png" className="w-16 h-16" />
        <p>
          Proxy Tech Inc.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/ibeh-promise" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.084 1.837 1.238 1.837 1.238 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.932 0-1.312.469-2.385 1.236-3.223-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.536 11.536 0 013.003-.404c1.019.005 2.046.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.243 2.873.12 3.176.769.838 1.236 1.911 1.236 3.223 0 4.612-2.807 5.626-5.478 5.923.429.37.813 1.102.813 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.192.694.8.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a href="https://m.youtube.com/@proxytech" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100084906290726"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
