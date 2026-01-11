import { useMemo } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const firstName = "Bartłomiej";
const lastName = "Lipiński";
const emailUser = "bartlomiej";
const emailDomain = "lipinski.net.pl";

const githubUrl = "https://github.com/sharkk121";
const linkedinUrl = "https://www.linkedin.com/in/bart%C5%82omiej-lipi%C5%84ski-2430a0162/";

const createEmailImage = (emailAddress: string) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='180' height='22'>
      <rect width='100%' height='100%' fill='none'/>
      <text x='0' y='16' font-family='Inter, Segoe UI, sans-serif' font-size='14' fill='#f8fafc'>
        ${emailAddress}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function App() {
  const emailAddress = `${emailUser}@${emailDomain}`;
  const emailImage = useMemo(() => createEmailImage(emailAddress), [emailAddress]);

  return (
    <main className="card">
      <h1>
        {firstName} {lastName}
      </h1>
      <div className="links">
        <a className="link" href={githubUrl} target="_blank" rel="noreferrer">
          <FaGithub className="icon" aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a className="link" href={linkedinUrl} target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <div className="link" aria-label="Email address">
          <FaEnvelope className="icon" aria-hidden="true" />
          <img className="email-image" src={emailImage} alt={emailAddress} />
        </div>
      </div>
    </main>
  );
}
