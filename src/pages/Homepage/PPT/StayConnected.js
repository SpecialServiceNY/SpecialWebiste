import React from 'react';
import './Steps.css'; 

const backgroundImageUrl = 'https://media.licdn.com/dms/image/C5112AQFNa15ZLmSK2g/article-cover_image-shrink_600_2000/0/1520089399642?e=2147483647&v=beta&t=2R_ycoDXKxLJWzon-vXDfzimJI5wmeeUprWvadnKvkk';

const StayConnected = () => {
  return (
    <div className="receive-diagnosis-container">
      <div className="card">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
        <div className="text-container">
          <h1 className="title">Stay Connected</h1>
          <div className="text">
            <p>
              Staying connected to supportive organizations and communities can significantly ease the journey of adapting to vision loss. It's common to initially feel isolated and alone, but connecting with others who share similar experiences can normalize your feelings and provide invaluable support.
            </p>
            <p>
              Whether through organized support groups, community events, or online forums, these connections offer a sense of belonging and understanding. Engaging with peer-led groups and community organizations not only provides practical advice and resources but also fosters a sense of hope and possibility.
            </p>
            <p>
              By embracing these connections, individuals can find strength in the community and realize that they are part of a network that supports and empowers them.
            </p>
          </div>
          <div className="audio">
            <p className="audio-caption">Listen to Carl's story:</p>
            <audio controls>
              <source src="/Carl-Jacobsen.wav" type="audio/mp3" />
            </audio>
            </div>
            <div className="instructions">
            <h2>Find your community:</h2>
            <p className="intro-text">
              You'll find your community through tons of great resources. Check out these examples:
            </p>
            <div className="category">
              <strong>Local Organizations</strong>
              <ul>
                <li><a href="https://www.cidny.org/">Center For Independence of the Disabled, New York</a></li>
                <li><a href="https://visionsvcb.org/">VISIONS/Services for the Blind and Visually Impaired</a></li>
                <li><a href="https://viawny.org/">VIA: Visually Impaired Advancement</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Government Services:</strong>
              <ul>
                <li><a href="https://www.acb.org/">The American Council of the Blind (ACB)</a></li>
                <li><a href="https://nfbny.org/">The National Federation of the Blind of New York</a></li>
                <li><a href="https://ocfs.ny.gov/programs/nyscb/">New York State Commission for the Blind (NYSCB)</a></li>
              </ul>
            </div>
            <div className="category">
              <strong>Support Groups and Peer Networks:</strong>
              <ul>
                <li><a href="https://www.reddit.com/r/Blind/">Reddit r/Blind</a></li>
                <li><a href="https://acb-braille-forum-and-e-forum.pinecast.co/">The ACB Braille Forum</a></li>
                <li><a href="https://lighthouseguild.org/support-services/telesupport-groups/">Lighthouse Guild's tele-support groups</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayConnected;