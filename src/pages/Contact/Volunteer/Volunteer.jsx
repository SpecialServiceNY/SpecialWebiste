import React from 'react';
import { Link } from 'react-router-dom';
import './Volunteer.css';

const Volunteer = () => {
  const contacts = [
    {
      name: 'VISIONS Intergenerational Program',
      logo: 'https://visionsvcb.org/wp-content/uploads/2024/04/DSC04805Web.jpg',
      description: 'VISIONS Intergenerational Program at VISIONS Older Adult Center in Manhattan recruits and trains volunteer high school students to assist older adults who are visually impaired or blind in their homes, and at the center. The youth provide escort and assistance with reading, shopping, socialization and technology.',
      url: 'https://visionsvcb.org/get-involved/volunteering/',
    },
    {
      name: 'Corporate Support Opportunities',
      logo: 'https://cdn0.handsonconnect.org/0101/images/regeneron-corporate-volunteering-group.jpg',
      description: 'Looking to make a real difference in the lives of people with visual impairments? VISIONS offers an array of corporate support opportunities for organizations of any size. Organizations interested in getting involved can volunteer either at VISIONS headquarters on Greenwich Street or VISIONS at Selis Manor in NYC, or VISIONS Center on Aging in Rockland County.',
      url: 'https://visionsvcb.org/get-involved/volunteering/',
    },
    {
      name: 'Lighthouse Guild Volunteer',
      logo: 'https://lighthouseguild.org//wp-content/uploads/fly-images/6816/volunteer_client-640x360-c.jpg',
      description: 'There are many ways you can help people who are blind or visually impaired. We offer flexible day, evening, and weekend hours, and provide training for specialized volunteer service areas. Learn about the types of volunteer opportunities we offer as well as our current openings.',
      url: 'https://lighthouseguild.org/about-us/volunteer/',
    },
    {
      name: 'Hellen Keller Service Volunteer',
      logo: 'https://www.helenkeller.org/wp-content/uploads/2024/05/summer-youth-programs-scaled.jpg',
      description: 'At HKNC headquarters in Sands Point, you can participate in recreational activities with people who are DeafBlind. The options range from collaborating on arts and crafts projects and making music together to playing games, going to parties in the residence lounge and working out at the gym. Volunteers also accompany participants on outings in the community, including shopping excursions, eating at restaurants, attending church or worship activities, hiking trails and visiting New York City attractions. At HKSB’s Brooklyn location, you can support individuals with reading mail and assisting with our book club. In Hempstead and Islandia, volunteers help with transportation, accompanying individuals to medical appointments and other outings.',
      url: 'https://www.helenkeller.org/get-involved/volunteer/',
    },
    {
      name: 'Community Partners',
      logo: 'https://www.ahrcnyc.org/wp-content/uploads/2023/06/AHRC-NYCs-Camping-and-Recreational-Services-Department.jpg',
      description: 'AHRC NYC’s community partner projects take place within our program facilities and in the community, and are available in all boroughs of New York City. We will provide the necessary training and supervision to make your experience meaningful and rewarding, as you will work directly with people who participate in our programs.',
      url: 'https://www.ahrcnyc.org/involved/community-partners/',
    },
  ];

  return (
    <div className="contact-subpage">
      <h1>Volunteer</h1>
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
      <Link to="/Contact" className="back-button">Back to Contact Page</Link>
    </div>
  );
};

export default Volunteer;