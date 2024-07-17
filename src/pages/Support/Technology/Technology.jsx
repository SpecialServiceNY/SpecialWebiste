import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './Technology.css';

const technologies = [
  {
    id: 1,
    title: 'Accessible Pedestrian Signals',
    description: 'Accessible Pedestrian Signal and pedestrian pushbutton is an integrated device that communicates information about the WALK and DO NOT WALK intervals at signalized intersections in non-visual formats to pedestrians who are blind or have low vision.',
    image: 'https://thedailytexan.com/wp-content/uploads/2018/09/Crosswalk2018-09-05_Crosswalks_Elias.Huerta24125.jpg',
    audio: `${process.env.PUBLIC_URL}/APS.MP3`,
    source: 'Credit to: City of Charlotte'
  },
  {
    id: 2,
    title: 'Accessible Washer And Dryer',
    description: 'The controls of washers and dryers differ from brand to brand. Some have an easy-to-feel point on the control dial. The dial clicks as you move from cycle to cycle, making it easy and predictable to set.',
    image: 'https://images.squarespace-cdn.com/content/v1/5a36eb7bd74cffbd7ebfde35/414a5146-3a8b-49a9-bd74-f8a2f472df1f/Washer-Dryer+Clear+Spaces+Overlapping.png',
    video: 'https://www.youtube.com/embed/9odfPWiJWOA?si=V720AEO16zBARfNq'
  },
  {
    id: 3,
    title: 'closed-circuit television (CCTV)',
    description: 'A video magnifier, or closed-circuit television (CCTV) system, uses a stand-mounted or handheld video camera to project a magnified image onto a video monitor, a television (TV) screen, or a computer monitor. Cameras with zoom lenses provide variable magnification.',
    image: 'https://www.perkins.org/wp-content/uploads/2022/07/Video-Magnifier-Picture-Cropped.jpg',
    audio: `${process.env.PUBLIC_URL}/CCTV.MP3`,
    source: 'Listen to Khadija Bari'
  },
  {
    id: 4,
    title: 'JAWS',
    description: 'JAWS, Job Access With Speech, is the world’s most popular screen reader, developed for computer users whose vision loss prevents them from seeing screen content or navigating with a mouse.',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdt7x8lEVoyfWeGPedFj4VuraNfGRXGWreu8h15eZDbLO5nPdWo_F3vI86vtA_Dv62Sw02OXwxnKkgG9azJkVcm4yxBwaSfbsFhIEZt_WHWQa2UkyYI4_SL_NR0Chq9d0CKgKhmqTMmE4/w1200-h630-p-k-no-nu/JAWS-illustration2.png',
    audio: `${process.env.PUBLIC_URL}/Jaws.MP3`,
    source: 'Listen to Khadija Bari'
  },
  {
    id: 5,
    title: 'Be My AI',
    description: 'Users can send images via the app to an AI-powered Virtual Volunteer, which will answer any question about that image and provide instantaneous visual assistance for a wide variety of tasks.',
    image: 'https://cdn.prod.website-files.com/5a5decba6b273e0001a4c1bb/641036fe2d14d70fa3b14512_Blog_Post_Cover_OpenAI.png',
    audio: `${process.env.PUBLIC_URL}/BeMyAI.MP3`,
    source: 'Listen to Khadija Bari'
  },
  {
    id: 6,
    title: 'Be My Eyes',
    description: 'Be My Eyes connects blind and low-vision users who want sighted assistance with volunteers and companies anywhere in the world, through live video and artificial intelligence.',
    image: 'https://i.vimeocdn.com/video/500436343-534d7bd45f9792ab2384f546630bcb30db84d454391378652b57dfa7d0fb72fc-d_640?f=webp',
    audio: `${process.env.PUBLIC_URL}/BeMyEyes.MP3`,
    source: 'Listen to Khadija Bari'
  },
  {
    id: 7,
    title: 'Fusion',
    description: 'Fusion is the ultimate accessibility tool for schools, agencies, training centers, and businesses where individuals with vision loss are served.',
    image: 'https://sterlingadaptives.com/cdn/shop/products/FusionPro_603e31f7-a617-4bd0-abb2-1405b2258123.jpg?v=1631660969',
    video: 'https://www.youtube.com/embed/Yt9LPUZNNa8?si=4T9PKvEAz_Pm30Ok'
  },
  {
    id: 8,
    title: 'Movie Audio description',
    description: 'Audio description is a form of narration used to provide information surrounding key visual elements in a media work for the benefit of blind and visually impaired consumers. These narrations are typically placed during natural pauses in the audio, and sometimes overlap dialogue if deemed necessary.',
    image: 'https://captaincaptions.com/wp-content/uploads/2019/09/ad.png?w=1095',
    audio: `${process.env.PUBLIC_URL}/Movie Audio description.MP3`,
    source: 'Listen to Khadija Bari'
  },
  {
    id: 9,
    title: 'OKO',
    description: 'The OKO app is an invaluable addition to the toolkit of pedestrians on the blindness spectrum, striving to ensure safe and efficient crossings.',
    image: 'https://innovationorigins.com/app/uploads/2022/04/IMG_7484-scaled.jpeg',
    video: 'https://www.youtube.com/embed/BObcEPu_q8c?si=Udh49pWl1jej1uVD'
  },
];

const Technology = () => {
  const { isHighContrast } = useHighContrast();
  const placeholderImage = `${process.env.PUBLIC_URL}/placeholder.jpg`;

  return (
    <div className={`legally-blind-container ${isHighContrast ? 'high-contrast' : ''}`}>
    <div className="technology-page">
      <h1>Technologies for Visually Impaired People</h1>
      <div className="technology-cards">
        {technologies.map((tech) => (
          <div key={tech.id} className="technology-card">
            <img src={tech.image || placeholderImage} alt={tech.title} />
            <h2>{tech.title}</h2>
            <p>{tech.description}</p>
            {tech.audio ? (
              <>
                <audio controls>
                  <source src={tech.audio} type="audio/mpeg" />
                </audio>
                <p>{tech.source}</p>
              </>
            ) : (
              tech.video && (
                <div className="video-container">
                  <iframe
                    src={tech.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>{tech.source}</p>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Technology;