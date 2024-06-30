import "./About.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section className="about-me">
        <div className="flex">
          <img src="/logo.svg" className="logo" alt="Sakirat Kehinde Usman" />
          <hr className="line" />
        </div>
        <h3>About Me</h3>
        <p>
          I am an engineer with a solid foundation in both frontend engineering
          and data science. With a Bachelor’s degree in Computer Science and a
          Master’s in Data Science, I bring a blend of practical programming and
          analytical expertise to my work. Over three years as a frontend
          engineer, I’ve honed my skills in crafting user-friendly web
          applications using JavaScript, React, and CSS, which has enhanced my
          problem-solving abilities and attention to detail.
          <br />
          <br />
          My journey into data science involved hands-on projects where I
          applied machine learning, statistical analysis, and data manipulation
          techniques using Python and libraries like Pandas, NumPy,
          Scikit-learn, and PyTorch. I have worked on clustering and sentiment
          analysis projects, deriving actionable insights from large datasets. I
          am passionate about leveraging my technical skills and continuous
          learning mindset to solve complex problems and create impactful
          solutions in a collaborative environment.
        </p>
        <h5>SKILLS</h5>
        <p>
          HTML . CSS . JavaScript . React . Redux . NodeJS . MongoDB <br />
          Python . SQL . Excel . R . Numpy . Pandas . Scikit-Learn. Tensorflow.
          Keras
        </p>
      </section>
    </ScrollAnimation>
  );
}

export default About;
