import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './Occupation.css';

const Occupation = () => {
  const { isHighContrast } = useHighContrast();

  const changeImage = (answer) => {
    const image = answer.querySelector('img');
    const details = answer.querySelector('.details');

    const originalSrc = image.getAttribute('data-original-src');
    const newSrc = image.getAttribute('data-new-src');
    let currentSrc = image.getAttribute('data-current-src');

    if (currentSrc === originalSrc) {
      image.src = newSrc;
      currentSrc = newSrc;
    } else {
      image.src = originalSrc;
      currentSrc = originalSrc;
    }

    image.setAttribute('data-current-src', currentSrc);
    details.classList.toggle('hidden');
  };

  const showThankYouMessage = () => {
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
  };

  const handleAnswerClick = (event) => {
    const answer = event.currentTarget;
    changeImage(answer);
    showThankYouMessage();
  };

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      <div id="result" className="result-container">
        <p className="question">Which of the following occupations can a blind person pursue?</p>
        <p className="question">Click on the images to check them out.</p>
        <div className="result">
          {/* Teacher */}
          <div className="answer" onClick={handleAnswerClick}>
            <div className="answer-content">
              <p className="medium">Teacher</p>
              <img
                src={`${process.env.PUBLIC_URL}/teacher.jpg`}
                alt="Teacher"
                data-original-src={`${process.env.PUBLIC_URL}/teacher.jpg`}
                data-new-src={`${process.env.PUBLIC_URL}/blind teacher.jpg`}
                data-current-src={`${process.env.PUBLIC_URL}/teacher.jpg`}
              />
            </div>
            <div className="details hidden">
              <p className="small">It's no wonder then that many students consider teaching as a career. Many blind students think about this, too. But they may also wonder how a blind person could do the job. The National Association of Blind Educators, a division of the National Federation of the Blind, is an organization of blind teachers. These teachers share information with each other. They also try to help young blind people who are considering a career in education. The following article, reprinted from the Spring/Summer, 1993 issue of The Blind Educator, a publication of the National Association of Blind Educators, answers many of the questions sighted and blind people commonly ask about how blind teachers can do their job.</p>
            </div>
          </div>

          {/* Nurse */}
          <div className="answer" onClick={handleAnswerClick}>
            <div className="answer-content">
              <p className="medium">Nurse</p>
              <img
                src={`${process.env.PUBLIC_URL}/Nurse.jpg`}
                alt="Nurse"
                data-original-src={`${process.env.PUBLIC_URL}/Nurse.jpg`}
                data-new-src={`${process.env.PUBLIC_URL}/blind nurse.jpg`}
                data-current-src={`${process.env.PUBLIC_URL}/Nurse.jpg`}
              />
            </div>
            <div className="details hidden">
              <p>Absolutely, you can be a nurse if you have a visual disability. The ADA Amendments specify that mitigating measures or devices such as special eye wear cannot be considered in determining whether a person has an impairment that substantially limits a major life activity (the criterion for protection under the ADA).</p>
            </div>
          </div>

          {/* Architect */}
          <div className="answer" onClick={handleAnswerClick}>
            <div className="answer-content">
              <p className="medium">Architect</p>
              <img
                src={`${process.env.PUBLIC_URL}/architect.jpg`}
                alt="Architect"
                data-original-src={`${process.env.PUBLIC_URL}/architect.jpg`}
                data-new-src={`${process.env.PUBLIC_URL}/blind architect.jpg`}
                data-current-src={`${process.env.PUBLIC_URL}/architect.jpg`}
              />
            </div>
            <div className="details hidden">
              <p>Chris Downey is an architect who designs buildings with acoustics and accessibility in mind. When Chris lost his vision suddenly 10 years ago due to a brain tumor, he stayed in his field and applied his new sense of space to his designs.</p>
              <a href="https://www.perkins.org/resource/chris-downey-blind-architect/" target="_blank" className="read-more">Read More</a>
            </div>
          </div>

          {/* Journalist */}
          <div className="answer" onClick={handleAnswerClick}>
            <div className="answer-content">
              <p className="medium">Journalist</p>
              <img
                src={`${process.env.PUBLIC_URL}/Journalist.jpg`}
                alt="Journalist"
                data-original-src={`${process.env.PUBLIC_URL}/Journalist.jpg`}
                data-new-src={`${process.env.PUBLIC_URL}/blind journalist.jpg`}
                data-current-src={`${process.env.PUBLIC_URL}/Journalist.jpg`}
              />
            </div>
            <div className="details hidden">
              <p>Gary O'Donoghue is a British journalist, currently working for BBC News in Washington, D.C. as one of their North America political correspondents. He is one of the most prominent blind correspondents in British media.</p>
              <a href="https://www.perkins.org/resource/its-my-job-podcast-21-gary-odonoghue/" target="_blank" className="read-more">Listen More</a>
            </div>
          </div>

          {/* Warehouse worker */}
          <div className="answer" onClick={handleAnswerClick}>
            <div className="answer-content">
              <p className="medium">Warehouse worker</p>
              <img
                src={`${process.env.PUBLIC_URL}/warehouse worker.jpg`}
                alt="Warehouse worker"
                data-original-src={`${process.env.PUBLIC_URL}/warehouse worker.jpg`}
                data-new-src={`${process.env.PUBLIC_URL}/blind worker.jpg`}
                data-current-src={`${process.env.PUBLIC_URL}/warehouse worker.jpg`}
              />
            </div>
            <div className="details hidden">
              <p>There are over a hundred blind people working in Amazon warehouses in New York alone. This would have been deemed impossible a decade ago!</p>
              <audio controls>
                <source src={`${process.env.PUBLIC_URL}/Amazon Warehouse.MP3`} type="audio/mpeg" />
              </audio>
              <audio controls>
                <source src={`${process.env.PUBLIC_URL}/Amazon Warehouse2.MP3`} type="audio/mpeg" />
              </audio>
              <a href="https://nfb.org/about-us/press-room/amazon-make-more-employment-opportunities-available-blind" target="_blank" className="read-more">Read More</a>
            </div>
          </div>

          {/* Pilot */}
          <div className="answer" onClick={handleAnswerClick}>
            <div className="answer-content">
              <p className="medium">Pilot</p>
              <img
                src={`${process.env.PUBLIC_URL}/pilot.jpg`}
                alt="Pilot"
                data-original-src={`${process.env.PUBLIC_URL}/pilot.jpg`}
                data-new-src={`${process.env.PUBLIC_URL}/AI Pilot.png`}
                data-current-src={`${process.env.PUBLIC_URL}/pilot.jpg`}
              />
            </div>
            <div className="details hidden">
              <p>Currently, being a pilot is impossible for blind people. However, with AI-powered assistance technology, it may become a reality in the next decade.</p>
            </div>
          </div>

        </div>

        {/* Thank You message */}
        <div id="thankYouMessage" className="hidden additional-content">
          <p className="highlighted">Thank you for exploring the careers available to visually impaired individuals.</p>
          <p>Learn more about the definition of legal blindness:</p>
        <ul>
        <li><a href="./Definition">Definition</a></li>
        </ul>
          <p>Learn more about the causes of visually impairment:</p>
        <ul>
        <li><a href="./Causes">Occupation</a></li>
        </ul>
          <p>Learn more about the frequently asked questions towards blind people:</p>
        <ul>
        <li><a href="./FAQ">FAQ</a></li>
        </ul>
      </div>

      </div>
    </div>
  );
};

export default Occupation;