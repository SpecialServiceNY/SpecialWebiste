import React, { useState } from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './Service.css';

const Service = () => {
  const { isHighContrast } = useHighContrast();
  const locations = [
    { id: 1, text: 'Manhattan', image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_391,q_75,w_588/v1/clients/newyorkstate/mariograzianophotography_Instagram_11d7bfa9-c11f-4feb-a919-13d479b99fd2.jpg' },
    { id: 2, text: 'Brooklyn', image: 'https://images.ctfassets.net/1aemqu6a6t65/68nkexvLlGiTxvxFvzoELk/68ee51265baad76b8d7f5ae8cd99bf2c/brooklyn-bridge-sunset-julienne-schaer.jpg' },
    { id: 3, text: 'Bronx', image: 'https://static01.nyt.com/images/2018/04/03/nyregion/03bxjail1/merlin_136305294_3f04a5b5-4fad-4bf6-bc28-0f9a300b3d82-articleLarge.jpg?quality=75&auto=webp&disable=upscale' },
    { id: 4, text: 'Staten Island', image: 'https://assets3.thrillist.com/v1/image/1762889/1200x600/scale;;webp=auto;jpeg_quality=85.jpg' },
    { id: 5, text: 'Queens', image: 'https://suitcaseandheels.com/wp-content/uploads/2023/02/long-island-city.jpeg' },
    { id: 6, text: 'Others/At Home', image: '/Others.png' },
  ];

  const ageRanges = [
    { id: 1, text: 'Under 10', image: 'https://www.hhs.texas.gov/sites/default/files/styles/large/public/assets/services/disability/blind-visually-impaired/blind-childrens-program.jpg?itok=7Y7mpBKX' },
    { id: 2, text: '11-21', image: 'https://media.istockphoto.com/id/1334509954/photo/acessible-college-diversity.jpg?s=612x612&w=0&k=20&c=p5wMnHJspsYZzYyG8skxhKIXh1dMVQ6845mj8iF_zAs=' },
    { id: 3, text: '22-54', image: 'https://www.perkins.org/wp-content/uploads/2021/10/248A1558-Edit-1024x683.jpg' },
    { id: 4, text: 'Over 55', image: 'https://www.homecareassistancetampabay.com/wp-content/uploads/Blind-Senior.jpg' },
    { id: 5, text: 'All Ages', image: 'https://aphconnectcenter.org/wp-content/uploads/sites/5/SupportGroups.jpg' },
  ];

  const serviceTypes = [
    { id: 1, text: 'Education & Training', image: 'https://www.perkins.org/wp-content/uploads/2021/06/Braille_int_video_THUMBNAIL-scaled.jpeg' },
    { id: 2, text: 'Medical & Rehabilitation Services', image: 'https://www.salusuhealth.com/_files/images/04112017_su-tei_080.jpg' },
    { id: 3, text: 'Social & Living Support', image: 'https://chicagolighthouse.org/wp-content/uploads/2015/10/DSC_0081-1024x678.jpg' },
    { id: 4, text: 'Employment & Career Development', image: 'https://vi.ie/wp-content/uploads/2023/05/Employment-LAN.jpg' },
    { id: 5, text: 'Technology & Assistive Devices', image: 'https://us.optelec.com/binaries/content/gallery/optelec-nl/landingspagina/loep-compact-hd.jpg' },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState(null);
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleAgeRangeSelect = (ageRange) => {
    setSelectedAgeRange(ageRange);
  };

  const handleServiceTypeSelect = (serviceType) => {
    setSelectedServiceType(serviceType);
  };

  const handleGoButtonClick = () => {
    let results = [];
  
    // Simulating search results based on selected criteria
    if (selectedLocation === 1 && selectedAgeRange === 3 && selectedServiceType === 4) {
      results.push(
        {
          id: 1,
          text: 'Business Enterprise Program (BEP)',
          description: 'The New York State Commission for the Blind (NYSCB)’s Business Enterprise Program (BEP) provides a rigorous BEP vendor training program that teaches NYSCB participants to successfully manage a deli, vending operation, newsstand, snack bar or cafeteria. Participants learn business math, labor and merchandise management, purchasing, legal requirements and customer service.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_CZTiJEnIQ26czs5lrqlMcbclfi-hFpmjw&s',
          website: 'https://ocfs.ny.gov/programs/nyscb/programs/enterprise.php'
        },
        {
          id: 2,
          text: 'Vocational Rehabilitation Program',
          description: 'The Vocational Rehabilitation (VR) Program offers guidance and counseling to assist consumers who are legally blind find or retain employment. Vocational counselors work with the consumer to develop an Individualized Plan for Employment (IPE). The IPE acts as a road map to guide the consumer toward their employment goals.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_CZTiJEnIQ26czs5lrqlMcbclfi-hFpmjw&s',
          website: 'https://ocfs.ny.gov/programs/nyscb/programs/vocational-rehab.php'
        },
        {
          id: 3,
          text: 'Youth Employment Program',
          description: 'From building a resume to learning vital interview skills, our team works closely with visually impaired students to help them become employable and compete for paying jobs in the community. Students gain independence and real-world work experience, and an awareness of their positive contributions to the community.',
          imageUrl: 'https://lighthouseguild.org//wp-content/uploads/2021/06/youth_academic_svs.jpg',
          website: 'https://lighthouseguild.org/support-services/academic-and-career-services/youth-employment-program/'
        }
      );
    }
  
    if (selectedLocation === 5 && selectedAgeRange === 3 && selectedServiceType === 4) {
      results.push(
        {
        id: 4,
        text: 'Foundations Program',
        description: 'Participants in HKSB’s Foundations Program — a comprehensive work-readiness program that addresses the holistic needs of potential job seekers — excel in their next steps in obtaining employment.',
        imageUrl: 'https://media.licdn.com/dms/image/C5616AQHf0AQggW2W9g/profile-displaybackgroundimage-shrink_200_800/0/1643647721476?e=2147483647&v=beta&t=DVpJnDiYc2WWFmyJfWLTPgzkzOJ1Eog9JKkqUwWPJqs',
        website: 'https://www.helenkeller.org/hksb/career-development/'
      },
      {
        id: 5,
        text: 'Work Experience Training',
        description: 'During your time at HKSB, you will have the opportunity to work in real-world settings, building marketable skills and enhancing your resume through internship opportunities.',
        imageUrl: 'https://media.licdn.com/dms/image/C5616AQHf0AQggW2W9g/profile-displaybackgroundimage-shrink_200_800/0/1643647721476?e=2147483647&v=beta&t=DVpJnDiYc2WWFmyJfWLTPgzkzOJ1Eog9JKkqUwWPJqs',
        website: 'https://www.helenkeller.org/hksb/career-development/'
      },
    );
    }

    if (selectedLocation === 1 && selectedAgeRange === 5 && selectedServiceType === 2) {
      results.push(
        {
        id: 6,
        text: 'Optometry & Eye Exams',
        description: 'Our vision specialists will determine the level of your vision loss. We may even recommend tools you can use to improve your ability to read, work, socialize, and enjoy other activities.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/5774/eye_exam2-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/optometry-eye-exams/'
      },
      {
        id: 7,
        text: 'Behavioral Health Services',
        description: 'Lighthouse Guild’s Dorothy Strelsin Behavioral Health Clinic is the only behavioral health center in the United States focused on people who are blind, visually impaired, or at risk for vision loss. We also offer services to families and caretakers as they manage issues related to living with and caring for an individual with a vision impairment or at risk of vision loss.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/5731/therapy-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/behavioral-health-services/'
      },
      {
        id: 8,
        text: 'Diabetes Care & Endocrinology',
        description: 'A common yet serious complication of diabetes is vision loss or blindness. At Lighthouse Guild’s Maxine and John M. Bendheim Center for Diabetes Care, we help you stay healthy and preserve your eyesight.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/5797/diabetes_test-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/diabetes-care-and-endocrinology/'
      },
      {
        id: 9,
        text: 'Podiatry',
        description: 'Vision loss makes it difficult to take care of your feet or observe signs of trouble. For people with diabetes, you’re at risk for both visual impairment and foot issues — making it double the difficulty.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/5721/doctor-and-patient-960x540-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/diabetes-care-and-endocrinology/'
      },
      {
        id: 10,
        text: 'Occupational Therapy',
        description: 'At Lighthouse Guild, our rehabilitation services can help restore your function and quality of life. Our multidisciplinary team offers occupational therapy for people with physical and functional disabilities and is available to everyone regardless of whether they experience vision loss.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/6826/argus_patient_ot_landing-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/occupational-therapy/'
      },
      {
        id: 11,
        text: 'Primary Care Services',
        description: 'At Lighthouse Guild, our primary care physicians understand how visual impairment and blindness impact health, and work with you to develop a coordinated plan of care. We also connect you to specialists and programs, based on your needs, and teach you how to advocate for your health.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/2789/iStock-1089976414_blood_pressure-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/primary-care-services/'
      },
      {
        id: 12,
        text: 'Adult Day Health Care',
        description: 'If you or your loved one need daily medical services and crave social interaction, then our Adult Day Health Care (ADHC) program is for you. At GuildCare — the only ADHC program in New York State that specializes in people with vision loss — our healthcare services can be used daily or a few days a week, depending on your needs.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/5747/tai-chi-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/adult-day-health-care/'
      },
    );
    }

    if (selectedLocation === 6 && selectedAgeRange === 5 && selectedServiceType === 3) {
      results.push(
        {
        id: 13,
        text: 'Adult Day Health Care',
        description: 'If you or your loved one need daily medical services and crave social interaction, then our Adult Day Health Care (ADHC) program is for you. At GuildCare — the only ADHC program in New York State that specializes in people with vision loss — our healthcare services can be used daily or a few days a week, depending on your needs.',
        imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/5747/tai-chi-1200x675-c.jpg',
        website: 'https://lighthouseguild.org/healthcare-services/adult-day-health-care/'
      },
      {
        id: 14,
        text: 'Individual Social Work Services',
        description: 'VISIONS social workers can also assist by providing benefits counseling and resources, in applying directly for benefits and services, and by providing advocacy and assistance in addressing related problems. LGBTQ+ people are welcome.',
        imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
        website: 'https://visionsvcb.org/social-work-services/'
      },
      {
        id: 15,
        text: 'Moving Forward',
        description: 'A support group for visually impaired adults of all ages. A safe, confidential place to discuss frustrations, concerns, and daily living as it relates to vision loss. In this group, members can provide each other with encouragement, comfort, advice and even share personal experiences.',
        imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
        website: 'https://visionsvcb.org/social-work-services/'
      },
      {
        id: 16,
        text: 'Between Us Men',
        description: 'Peer led support group for adult men only. A safe confidential space where members can share anything on their minds. Conversations can include but are not limited to the following topics: family relationships, stressors, hobbies, dating, parenting and more.',
        imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
        website: 'https://visionsvcb.org/social-work-services/'
      },
      {
        id: 17,
        text: 'Women’s Empowerment',
        description: 'Supportive space and group where women can share life’s ups and downs and everything in between. This is a safe confidential space where women can explore various roles they have and how that plays out in life. The group is virtual and meets on Thursday from 4:00pm to 5:00pm.',
        imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
        website: 'https://visionsvcb.org/social-work-services/'
      },
    );
    }

    if ((selectedLocation === 1 || selectedLocation === 2 || selectedLocation === 5) && selectedAgeRange === 5 && selectedServiceType === 3) {
      results.push(
        {
          id: 18,
          text: 'Social Casework Services',
          description: 'Adjusting to blindness or vision loss can be difficult. At Helen Keller Services for the Blind, you’ll be assigned a social worker who will help you to deal with both emotional and practical issues.',
          imageUrl: 'https://www.helenkeller.org/wp-content/uploads/2022/06/Man-with-hand-raised-in-circle-of-people.jpg',
          website: 'https://www.helenkeller.org/hksb/social-casework-services/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 2 && selectedServiceType === 3) {
      results.push(
        {
          id: 20,
          text: 'Pre-Vocational Enrichment Program Socialization Skill Building Group',
          description: 'The goals of this discussion group is to collaboratively engage in ways to manage the general stress and anxiety related to adjustment to vision loss, and transitioning into the workplace. These will include enhancing socialization skills, honing one’s skills, boosting awareness and confidence.',
          imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
          website: 'https://visionsvcb.org/social-work-services/'
        },
      );
    }
    if (selectedLocation === 6 && (selectedAgeRange === 2 || selectedAgeRange === 3|| selectedAgeRange === 4) && selectedServiceType === 3) {
      results.push(
        {
          id: 21,
          text: 'Managing Vocational Stress: Virtual Social Work Support Group',
          description: 'Managing Vocational Stress is a ten-session psychoeducational group offered to adult participants (18 years or older) in the VISIONS workforce department. The group meets virtually once a week on Zoom.',
          imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
          website: 'https://visionsvcb.org/social-work-services/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 4 && selectedServiceType === 3) {
      results.push(
        {
          id: 22,
          text: 'Unpaid Caregiver Support Group',
          description: 'Unpaid Caregivers (family, friends, neighbors) caring for someone age 60 or older where one or both people are blind or partially sighted meet as a group with a counselor to discuss the impact of being an unpaid caregiver.',
          imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
          website: 'https://visionsvcb.org/social-work-services/'
        },
      );
    }
    if (selectedLocation === 6 && (selectedAgeRange === 3|| selectedAgeRange === 4) && selectedServiceType === 3) {
      results.push(
        {
          id: 23,
          text: 'Parenting Journey',
          description: 'This is a special group for parents of children with disabilities. Small groups of parents and caregivers meet for 2 hours a week for 12 weeks. The program includes activities, discussions, in-person family-style meals, and complimentary in-person childcare.',
          imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
          website: 'https://visionsvcb.org/social-work-services/'
        },
      );
    }
    if ((selectedLocation === 1 || selectedLocation === 2 || selectedLocation === 3 || selectedLocation === 4 || selectedLocation === 5 || selectedLocation === 6) && selectedAgeRange === 2 && selectedServiceType === 4) {
      results.push(
        {
          id: 24,
          text: 'Vocational Rehabilitation Services for Transition Age Youth',
          description: 'NYSCB provides pre-employment transition services to students ages 14 to 22, transition services to youth and vocational rehabilitation services for all students who are legally blind, including those with additional disabilities.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_CZTiJEnIQ26czs5lrqlMcbclfi-hFpmjw&s',
          website: 'https://ocfs.ny.gov/programs/nyscb/programs/transition.php'
        },
      );
    }
    if ((selectedLocation === 1 || selectedLocation === 2 || selectedLocation === 3 || selectedLocation === 4 || selectedLocation === 5 || selectedLocation === 6) && selectedAgeRange === 4 && (selectedServiceType === 1 || selectedServiceType === 3 || selectedServiceType === 5)) {
      results.push(
        {
          id: 25,
          text: 'Adaptive Living Program',
          description: 'The Adaptive Living Program (ALP), is for people who need training and services to assist them in living at home and in the community. In most cases, the consumer has to be over the age of 55, unless they have circumstances where they do not want to pursue employment. The ALP program provides Adjustment Counseling, Rehab Teaching, and Orientation & Mobility.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_CZTiJEnIQ26czs5lrqlMcbclfi-hFpmjw&s',
          website: 'https://ocfs.ny.gov/programs/nyscb/programs/independent-living.php'
        },
      );
    }
    if ((selectedLocation === 1 || selectedLocation === 2 || selectedLocation === 3 || selectedLocation === 4 || selectedLocation === 5) && (selectedAgeRange === 2 ||selectedAgeRange === 3) && selectedServiceType === 4) {
      results.push(
        {
          id: 26,
          text: 'Employment Program',
          description: 'The Employment Program at Bronx Independent Living Services (BILS) is aimed to assist all individuals with disabilities in their journey to finding work. We offer a variety of employment and vocational services to help our consumers prepare for, locate, and maintain suitable employment. BILS works with ACCES-VR as well as Ticket to Work program to provide an array of services both remotely and in person.',
          imageUrl: 'https://bils.org/wp-content/uploads/2024/05/coworkers-looking-at-a-laptop-in-an-office-8127690-1024x683.jpg',
          website: 'https://bils.org/programs/employment-program/'
        },
      );
    }
    if (selectedLocation === 3 && selectedAgeRange === 5 && selectedServiceType === 3) {
      results.push(
        {
          id: 27,
          text: 'Open Doors Program',
          description: 'Open Doors Program assists individuals living in a nursing home or Intermediate Care Facility (ICF) in making decisions regarding home and community-based services. BILS has Transition Specialists who directly assist people in nursing homes to access the services they need to return to the community.',
          imageUrl: 'https://bils.org/wp-content/uploads/2024/05/electric-wheelchair-joystick-controller-19882116-1024x681.jpg',
          website: 'https://bils.org/programs/open-doors-mfp/'
        },
      );
    }
    if (selectedLocation === 3 && selectedAgeRange === 2 && selectedServiceType === 1) {
      results.push(
        {
          id: 28,
          text: 'Youth Services',
          description: 'Bronx Independent Living Services’ Youth Services are available to youth with disabilities ages 14-24, parents and families, and those in the community working with youth. They provide young people with the skills, encouragement, and support they need to be successful in society and accomplish their academic and employment goals.',
          imageUrl: 'https://bils.org/wp-content/uploads/2023/05/bils-youth-services-program.jpg',
          website: 'https://bils.org/programs/youth-services/'
        },
      );
    }
    if (selectedLocation === 3 && selectedAgeRange === 3 && (selectedServiceType === 3 ||selectedServiceType === 4)) {
      results.push(
        {
          id: 29,
          text: 'Peer Integration Services (ACCES-PIP)',
          description: 'The Peer Integration Project (PIP) works in partnership with ACCES-VR (Adult Career & Continuing Education Services – Vocational Rehabilitation) to provide supportive services that address obstacles/challenges that may be hindering your ability to reach employment goals. BILS work with a wide variety of community partners with the goal of connecting people with disabilities with the information and resources they need.',
          imageUrl: 'https://bils.org/wp-content/uploads/2023/06/bils-peer-integration-services.jpg',
          website: 'https://bils.org/programs/peer-integration-services-acess-pip/'
        },
      );
    }
    if (selectedLocation === 3 && selectedAgeRange === 5 && selectedServiceType === 3) {
      results.push(
        {
          id: 30,
          text: 'Disability Awareness Program',
          description: 'BILS offers a series of disability awareness programs tailored for corporations, service providers, government agencies, and other organizations that work with or provide services to people with disabilities. The program includes real life vignettes, group exercises, and questions and answers to help participants examine and recognize their attitudes about people with disabilities in a safe, supportive environment.',
          imageUrl: 'https://bils.org/wp-content/uploads/2023/08/bils-disability-awareness-program.jpg',
          website: 'https://bils.org/programs/disability-awareness-program/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 5 && selectedServiceType === 5) {
      results.push(
        {
          id: 31,
          text: 'Assistive Technology Training Resources (individuals and centers)',
          description: 'New York State Commission for the Blind will connect you with the assistive technology training resources in several regions of New York State.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_CZTiJEnIQ26czs5lrqlMcbclfi-hFpmjw&s',
          website: 'https://ocfs.ny.gov/programs/nyscb/training/'
        },
      );
    }
    if (selectedLocation === 1 && selectedAgeRange === 5 && selectedServiceType === 5) {
      results.push(
        {
          id: 32,
          text: 'Lighthouse Guild Technology Center',
          description: 'Lighthouse Guild’s Technology Center is the largest and foremost premier assistive technology resource in the U.S. The Center is a hub connecting innovators and users to advance technological development for our community and beyond.',
          imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/12233/tech_center_header-1200x675-c.jpg',
          website: 'https://lighthouseguild.org/technology/technology-center/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 5 && selectedServiceType === 5) {
      results.push(
        {
          id: 33,
          text: 'AT Training at VRC',
          description: 'In 2018, VISIONS was awarded the New York State contract to be the Assistive Technology Center (ATC) providing assistive technology and computer training serving students and adults who are legally blind in area 5.',
          imageUrl: 'https://visionsvcb.org/wp-content/uploads/2018/06/30.jpg',
          website: 'https://visionsvcb.org/technology/at-training-at-vrc/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 5 && selectedServiceType === 5) {
      results.push(
        {
          id: 34,
          text: 'VISIONS Assistive Technology Services',
          description: 'Since 2001, VISIONS has offered assistive technology services for legally blind and severely visually impaired consumers at VISIONS at Selis Manor.  This is an accessible and adapted learning environment and meeting place for blind youth, adults and older persons.',
          imageUrl: 'https://visionsvcb.org/wp-content/uploads/2022/11/VISIONS-Color-Logo-Full-scaled.jpg',
          website: 'https://visionsvcb.org/technology/at-training-at-selis/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 5 && selectedServiceType === 5) {
      results.push(
        {
          id: 35,
          text: 'HKSB Vocational Rehabilitation Services Assistive Technology Training',
          description: 'Assistive technology can be a real game changer for people with vision loss, increasing access to information and providing tools to minimize obstacles in workplace and educational settings.',
          imageUrl: 'https://www.helenkeller.org/wp-content/uploads/2022/06/Woman-using-assistive-technology-on-computer.jpg',
          website: 'https://www.helenkeller.org/hksb/assistive-technology-for-the-blind/'
        },
      );
    }
    if (selectedLocation === 2 && selectedAgeRange === 5 && selectedServiceType === 5) {
      results.push(
        {
          id: 36,
          text: 'Computer Sciences for the Blind and Visually Impaired - SCREEN READER TRAINING',
          description: 'Upon losing vision one need not also lose access to their computer, their phone, the Internet and the possibility of employment. CSB CARE devotes significant resources to train clients in fully accessing their computers through the use of today’s popular screen readers, such as Jaws, ZoomText and NVDA.',
          imageUrl: 'https://www.computersciences.org/wp-content/uploads/2021/06/conference-pic-slide-scaled.jpg',
          website: 'https://www.computersciences.org/services/'
        },
      );
    }
    if ((selectedLocation === 1||selectedLocation === 6) && selectedAgeRange === 4 && selectedServiceType === 5) {
      results.push(
        {
          id: 37,
          text: 'Tech Pals',
          description: 'Lighthouse Guild’s Technology Peers for Accessible Living program is funded with a grant from the Reader’s Digest Partners for Sight Foundation. The program matches young adults (aged 18-24) who are blind or visually impaired to serve as technology mentors to older adults aged 55+ who are also dealing with vision loss.',
          imageUrl: 'https://lighthouseguild.org//wp-content/uploads/fly-images/13201/jqgdWnRg-scaled-1200x675-c.jpeg',
          website: 'https://lighthouseguild.org/technology/technology-center/tech-pals/'
        },
      );
    }
    if (selectedLocation === 2 && (selectedAgeRange === 1||selectedAgeRange === 2) && selectedServiceType === 1) {
      results.push(
        {
          id: 38,
          text: 'JCC Brooklyn Camp for Blind Youth',
          description: 'JCC Brooklyn Camp for Blind Youth is the first-of-its-kind day camp in Brooklyn designed specifically for children who are blind or have Low vision ages 4 through 17.',
          imageUrl: 'https://www.jcc-brooklyn.org/camp/wp-content/uploads/sites/3/2017/09/DSC_7393-web.jpg',
          website: 'https://www.jcc-brooklyn.org/camp/camp-for-children-who-are-blind-or-have-low-vision/'
        },
      );
    }
    if (selectedLocation === 6 && selectedAgeRange === 5 && (selectedServiceType === 1||selectedServiceType === 3)) {
      results.push(
        {
          id: 39,
          text: 'The Audio Description Project',
          description: 'The American Council of the Blind (ACB) and its Audio Description Project (ADP) aim to bring more meaning and enjoyment to entertainment, cultural, and educational experiences for blind and visually impaired people. The key is Audio Description.',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETYvQ-dq1cbGjWf5lBlMbR0PXPu-bumwLog&s',
          website: 'https://adp.acb.org/'
        },
      );
    }
    if (selectedLocation === 1 && selectedAgeRange === 5 && selectedServiceType === 2) {
      results.push(
        {
          id: 40,
          text: 'New York Eye and Ear Infirmary of Mount Sinai Eye Services',
          description: 'New York Eye and Ear Infirmary of Mount Sinai (NYEE) offers patients the most advanced and comprehensive treatments for all eye conditions.',
          imageUrl: 'https://www.nyee.edu/files/NYEE/Patient-Care/Eye%20Services/MSHS-NYEE-EyeServices-2col-770x420-v2.jpg',
          website: 'https://www.nyee.edu/care/eye'
        },
      );
    }
    setSearchResults(results);
  };

  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
      <div className="search-page">
        <header className="service-header">
          <h1>Special Programs Search Tool</h1>
          <p>Use this tool to find services that match your specific needs. Select your location, age range, and service type, then click on the GO button. Your result(s) will appear below.</p>
        </header>
        <div className="options-container">
          {/* Locations selection */}
          <div className="options-group">
            <div className="option-title">Locations</div>
            <div className="options-row">
              {locations.map(option => (
                <div
                  key={option.id}
                  className={`option ${selectedLocation === option.id ? 'selected' : ''}`}
                  onClick={() => handleLocationSelect(option.id)}
                >
                  <img src={option.image} alt={option.text} />
                  <div>{option.text}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Age ranges selection */}
          <div className="options-group">
            <div className="option-title">Age Ranges</div>
            <div className="options-row">
              {ageRanges.map(option => (
                <div
                  key={option.id}
                  className={`option ${selectedAgeRange === option.id ? 'selected' : ''}`}
                  onClick={() => handleAgeRangeSelect(option.id)}
                >
                  <img src={option.image} alt={option.text} />
                  <div>{option.text}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Service types selection */}
          <div className="options-group">
            <div className="option-title">Service Types</div>
            <div className="options-row">
              {serviceTypes.map(option => (
                <div
                  key={option.id}
                  className={`option ${selectedServiceType === option.id ? 'selected' : ''}`}
                  onClick={() => handleServiceTypeSelect(option.id)}
                >
                  <img src={option.image} alt={option.text} />
                  <div>{option.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GO button */}
        <button className="go-button" onClick={handleGoButtonClick}>
          GO
        </button>

        {/* Search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div key={result.id} className="result-card">
                <div className="result-image">
                  <img src={result.imageUrl} alt={result.text} />
                </div>
                <div className="result-details">
                  <h3>{result.text}</h3>
                  <p>{result.description}</p>
                  <a href={result.website} target="_blank" rel="noopener noreferrer">Website</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;