import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="container">
      <h1 className="heading">
        GitHub's frequently asked questions
      </h1>
      <Accordion items={faqs} />
    </div>
  );
}

const faqs = [
  {
    title: "What is GitHub and how does it work?",
    content: "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration."
  },
  {
    title: "Why is GitHub so popular?",
    content: "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together."
  },
  {
    title: "Who is GitHub for?",
    content: "You! And it’s not just developers who build on GitHub—Fortune 500 companies, small teams, project managers, and college professors all use GitHub to do their best work, in one place."
  },
  {
    title: "Do people use GitHub only for code?",
    content: "Nope. Like we mentioned above, different people and teams use GitHub for different projects. While we got our start as a version control platform, GitHub is now used to manage teams, share resumes, find new projects, track work, and host discussions, just to name a few."
  },
]

export default App;