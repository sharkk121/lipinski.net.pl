import { FaGithub, FaLinkedin } from "react-icons/fa";

const firstName = "Bartłomiej";
const lastName = "Lipiński";

const githubUrl = "https://github.com/sharkk121";
const linkedinUrl = "https://www.linkedin.com/in/bart%C5%82omiej-lipi%C5%84ski-2430a0162/";

export default function App() {
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
      </div>
    </main>
  );
}
