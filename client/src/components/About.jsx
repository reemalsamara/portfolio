import resume from "../assets/Resume.pdf";

function About() {
    return (
        <div className="page about">
            <h2>About Me</h2>
            <p>Hello! My name is Reem Alsamara . I am passionate about software development and creating impactful applications. I enjoy solving complex problems and learning new technologies.</p>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">View My Resume</a>
        </div>
    );
}

export default About;
