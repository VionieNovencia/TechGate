import TravelokaIcon from '../assets/traveloka_logo.jpeg';
import GrabIcon from '../assets/Grab.png';
import TravelokaCover from '../assets/traveloka_cover.jpeg';
import GrabCover from '../assets/grab.jpeg';

interface Company {
  name: string;
  icon: string;
  desc: string;
  overview: string[];
  website: string;
  industry: string;
  companySize: string;
  headquarters: string;
  founded: string;
  cover: string;
  location: string;
}

export const CompanyList: { [key: string]: Company} = {
  'traveloka': {
    name: 'Traveloka',
    icon: TravelokaIcon,
    desc: 'Southeast Asia\'s Leading Travel Platfrom',
    overview: [
      "We don't innovate for the sake of innovation, we utilize technology to simplify people's lives so they can enjoy their lives better. That belief is what brought Traveloka to be the leading travel platform in Southeast Asia. Traveloka serves 20+ products that include comprehensive travel services. From transportations to accommodations, discovering nearby attractions, and insurance products to financial services, including the groundbreaking 'Buy Now Pay Later'.",
      "With 100+ millions downloads in six countries across the SEA region, we aim to keep exploring for better innovations — all to fulfill our users' travel aspirations so they can enjoy their lives, their way."
    ],
    website: 'http://www.traveloka.com/careers',
    industry: 'Software Development',
    companySize: '1K-5K employees',
    headquarters: 'Singapore, Singapore',
    founded: '2012',
    cover: TravelokaCover,
    location: 'Jakarta',
  },
  'grab' : {
    name: 'Grab',
    icon: GrabIcon,
    desc: 'Drive Southeast Asia Forward with us.',
    overview: [
      "Grab is Southeast Asia's leading superapp, offering a suite of services consisting of deliveries, mobility, financial services, enterprise and others. Grabbers come from all over the world, and we are united by a common mission: to drive Southeast Asia forward by creating economic empowerment for everyone.",
      "At Grab, every Grabber is guided by The Grab Way, which explains our mission and the operating principles on how we can achieve it together."
    ],
    website: 'https://grab.careers',
    industry: 'Software Development',
    companySize: '5K-10K employees',
    headquarters: 'Singapore, Singapore',
    founded: '2012',
    cover: GrabCover,
    location: 'Bandung',
  },
};