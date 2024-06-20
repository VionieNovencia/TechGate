import TravelokaIcon from '../assets/traveloka_logo.jpeg';
import GrabIcon from '../assets/Grab.png';

interface Job {
  id: string;
  title: string;
  icon: string;
  company: string;
  location: string;
  startWage: number;
  endWage: number;
  posted: number;
  type?: string;
  applicants?: number;
  detail?: {
    jobDescription: string[],
    requirements: string[],
  }
  link: string;
}

export const JobList: { [key: string]: Job } = {
  '1': {
    id: '1',
    title: 'Frontend Developer',
    icon: TravelokaIcon,
    company: 'Traveloka',
    location: 'Jakarta',
    startWage: 5000000,
    endWage: 7000000,
    posted: 5,
    type: 'Fulltime',
    applicants: 20,
    detail: {
      jobDescription: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ],
      requirements: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ]
    },
    link: '/profile/traveloka',
  },
  '2': {
    id: '2',
    title: 'Backend Developer',
    icon: TravelokaIcon,
    company: 'Traveloka',
    location: 'Jakarta',
    startWage: 5000000,
    endWage: 7000000,
    posted: 7,
    type: 'Fulltime',
    applicants: 20,
    detail: {
      jobDescription: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ],
      requirements: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ]
    },
    link: '/profile/traveloka',
  },
  '3': {
    id: '3',
    title: 'Quality Assurance',
    icon: TravelokaIcon,
    company: 'Traveloka',
    location: 'Jakarta',
    startWage: 4000000,
    endWage: 7000000,
    posted: 6,
    type: 'Fulltime',
    applicants: 20,
    detail: {
      jobDescription: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ],
      requirements: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ]
    },
    link: '/profile/traveloka',
  },
  '4': {
    id: '4',
    title: 'Frontend Developer',
    icon: GrabIcon,
    company: 'Grab',
    location: 'Bandung',
    startWage: 5000000,
    endWage: 7000000,
    posted: 10,
    type: 'Fulltime',
    applicants: 20,
    detail: {
      jobDescription: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ],
      requirements: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ]
    },
    link: '/profile/grab',
  },
  '5': {
    id: '5',
    title: 'Backend Developer',
    icon: GrabIcon,
    company: 'Grab',
    location: 'Bandung',
    startWage: 5000000,
    endWage: 7000000,
    posted: 3,
    type: 'Fulltime',
    applicants: 20,
    detail: {
      jobDescription: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ],
      requirements: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ]
    },
    link: '/profile/grab',
  },
  '6': {
    id: '6',
    title: 'Quality Assurance',
    icon: GrabIcon,
    company: 'Grab',
    location: 'Bandung',
    startWage: 4000000,
    endWage: 7000000,
    posted: 2,
    type: 'Fulltime',
    applicants: 20,
    detail: {
      jobDescription: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ],
      requirements: [
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
        'Collaborate with diverse teams to plan, prototype, build and maintain new features',
      ]
    },
    link: '/profile/grab',
  },
};
