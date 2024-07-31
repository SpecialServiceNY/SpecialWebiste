import React from 'react';
import './Steps.css'; // Import CSS file for styling

const backgroundImageUrl = 'https://www.betterup.com/hs-fs/hubfs/Blog%20Images/how%20to%20set%20goals%20and%20achieve%20them/team-of-employees-working-on-a-project-together-how-to-set-goals-and-achieve-them.png?width=800&name=team-of-employees-working-on-a-project-together-how-to-set-goals-and-achieve-them.png';

const IdentifyGoals = () => {
  return (
    <div className="receive-diagnosis-container">
      <div className="card">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
        <div className="text-container">
          <h1 className="title">Identify Goals</h1>
          <div className="text">
            <p>
              The next step on the road to independence is identifying your goals and determining the options available to help you move forward in life. When you begin this journey, your counselor will play a crucial role in helping you explore and clarify your hopes and dreams. 
            </p>
            <p>
              What do you want to achieve? Is your goal to live independently? Do you wish to continue your education or re-enter the workforce? Whatever your ambitions, your counselor will work with you to develop a plan tailored to your needs. They will connect you with the resources and support necessary to take the steps toward achieving your goals.
            </p>
            <p>
              This collaborative process ensures that you are not alone in navigating the path ahead. With people’s support, you can gain the confidence and skills needed to pursue your dreams and lead a fulfilling life.
            </p>
          </div>
          <div className="audio">
            <p className="audio-caption"><a href="https://www.poluscenter.org/polus-us/trades-win/ann-chippetta">Listen to Ann's story</a>:</p>
            <audio controls>
              <source src="/Ann-Chiapprtta.wav" type="audio/mp3" />
            </audio>
            <p className="audio-source">
              This audio is quoted from the New York State Commission for the Blind's Testimonials page: <a href="https://ocfs.ny.gov/programs/nyscb/employers/testimonials.php">https://ocfs.ny.gov/programs/nyscb/employers/testimonials.php</a>
            </p>
            </div>
            <div className="instructions">
            <h2>What can counselling do:</h2>
            <p className="instruction-text">
              There are programs that assist individuals at different stages of life in identifying and achieving their goals. Here are some examples:
            </p>
            <div className="category">
              <strong>Programs for children:</strong>
              <ul>
                <li><a href="https://www.afb.org/programs-services">American Foundation for the Blind Programs for Children</a></li>
                <li><a href="https://www.perkins.org/programs">Perkins School for the Blind Programs for Children</a></li>
                <li><a href="https://www.nfb.org/programs-services/nfb-braille-reading-pals">National Federation of the Blind Braille Reading Pals Program</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Programs for working-ages:</strong>
              <ul>
                <li><a href="https://www.lighthouseguild.org/healthcare-services">Lighthouse Guild Healthcare Services for Working-Age Adults</a></li>
                <li><a href="https://www.visionsvcb.org/vocational-services/">Visions Vocational Services</a></li>
                <li><a href="https://www.helenkeller.org/hknc/vocational-rehabilitation/">Helen Keller National Center Vocational Rehabilitation Services</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Programs for seniors:</strong>
              <ul>
                <li><a href="https://www.helenkeller.org/hknc/senior-services/">Helen Keller National Center Senior Services</a></li>
                <li><a href="https://www.afb.org/programs-services/afb-seniors-program">American Foundation for the Blind Seniors Program</a></li>
                <li><a href="https://lighthouseguild.org/senior-vision-services">Lighthouse Guild Senior Vision Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default IdentifyGoals;