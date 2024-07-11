import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import { Link } from 'react-router-dom';
import './Community.css';

const Community = () => {
  const { isHighContrast } = useHighContrast();
  const contacts = [
    {
      name: 'Harlem Independent Living Center',
      logo: 'https://hilc.org/wp-content/uploads/2024/04/IMG_20180715_1137152-1024x768.jpg',
      description: 'Harlem Independent Living Center (HILC) is a nonprofit organization serving the Greater Harlem area. The staff comprises trained professionals, some of whom are disabled and others who have first-hand experience dealing with individuals with disabilities. HILC aids people with disabilities, particularly minorities with disabilities, their families, and friends by providing them with the information and skills they need to live independently.',
      url: 'https://hilc.org/',
    },
    {
      name: 'Southern Tier Association for the Visually Impaired',
      logo: 'https://www.rvscny.com/wp-content/uploads/2019/11/sta.jpg',
      description: 'The Southern Tier Association for the Visually Impaired (STAVI) has been serving the local blind and visually impaired community for over 90 years. Currently, we provide support, employment and rehabilitation services to Chemung, Schuyler and Steuben Counties.',
      url: 'https://st-avi.org/index.html',
    },
    {
      name: 'Center for the Independence of the Disabled in New York (CIDNY)',
      logo: 'https://media.licdn.com/dms/image/D4E22AQFOpULLQDVK0A/feedshare-shrink_800/0/1698182930880?e=2147483647&v=beta&t=GBMq3eRWUQ83ADuXDL4dC85-iuMGO5yRQzQCdlAtuBc',
      description: 'CIDNY is the voice of people with disabilities in New York City. We work with people across all five boroughs. Our staff and Board include social workers, lawyers, and other highly qualified professionals, most of whom are people with disabilities. The staff all have a strong belief in self-determination and bring valuable life experiences and insights to their work.',
      url: 'https://www.cidny.org/',
    },
    {
      name: 'Society for the Blind',
      logo: 'https://societyfortheblind.org/wp-content/uploads/2014/03/staff-photo-2017.jpg',
      description: 'Since 1954, Society for the Blind has provided services and programs for people who are blind or have low vision. As with many agencies serving individuals who are blind, Society for the Blind grew from a dedicated group of volunteers and the support of Lions Clubs of America. On December 29, 1954, we established ourselves as a private 501(c)(3) nonprofit community benefit organization and have continued to expand our programs and services to meet the needs of the community we serve.',
      url: 'https://societyfortheblind.org/',
    },
    {
      name: 'Brooklyn Center for the Independence of the Disabled (BCID)',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TVgSkvUDT1vbaqnMtk9idyzW-nFT5P4L2Q&s',
      description: 'Brooklyn Center for Independence of the Disabled, Inc. (BCID) is a non-profit, grass roots organization operated by a majority of people with disabilities for people with disabilities since 1956.',
      url: 'https://www.bcid.org/',
    },
    {
      name: 'Bronx Independent Living Services (BILS)',
      logo: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/445348369_879789930844188_4619134655651299749_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0a50KHL8SNEQ7kNvgHy2fBX&_nc_ht=scontent-lga3-2.xx&oh=00_AYDX4WCOkARvoGzmXi3bwbtiARZqX30cFGxkKMsdIl-RUA&oe=66863E03',
      description: 'Bronx Independent Living Services (BILS) is a non-profit, community based organization dedicated to empower all people with disabilities to understand and exercise their civil and human rights in order to live fully integrated lives in mainstream society. BILS assists individuals by providing them the necessary tools to make informed decisions about their own lives through access to education, skills development, and access to the appropriate resources. On a systemic level, BILS is committed to facilitating social, economic, and civic change by advocating for the removal of architectural, communication, and attitudinal barriers that have limited the disabled community for far too long.',
      url: 'https://bils.org/',
    },
    {
      name: 'Staten Island Center for Independent Living',
      logo: 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/441406754_930151778908860_14220972826964165_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U_Q6XEeA3LgQ7kNvgHOUzQH&_nc_ht=scontent-lga3-2.xx&oh=00_AYClGDVqHFkzvTcmQe2KKSIRQqGv8QK5iTYVKnlZtdstIQ&oe=66864469',
      description: 'The Staten Island Center for Independent Living is the only comprehensive multi-service provider in the borough that is primarily staffed and governed by individuals who have personal experience with disability.',
      url: 'https://www.siciliving.org/',
    },
    {
      name: 'Sinergia',
      logo: 'https://www.sinergiany.org/sites/default/files/2024-05/iStock-1177085574.jpg',
      description: 'Sinergia is a multi-service, not-for-profit organization founded in 1977. The agency’s focus is to serve individuals and families who have developmental and intellectual disabilities throughout New York City as well as underserved populations in the community of Harlem.',
      url: 'https://www.sinergiany.org/',
    },
  ];

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
    <div className="contact-subpage">
      <h1>Community</h1>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <img src={contact.logo} alt={`${contact.name} logo`} className="contact-logo" />
            <div className="contact-info">
              <h2>{contact.name}</h2>
              <p>{contact.description}</p>
              <a href={contact.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="back-button">Back to Contact Page</Link>
    </div>
    </div>
  );
};

export default Community;