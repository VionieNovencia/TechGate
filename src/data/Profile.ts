export type Experience = {
  title: string;
  location: string,
  company: string,
  jobType: string,
  desc: string,
  date: string,
};

export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    location: 'Jakarta',
    company: 'PT Sejahtera Mandiri',
    jobType: 'Fulltime',
    date: 'Mar 2023 - Present',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Software Engineer',
    location: 'Jakarta',
    company: 'PT Sejahtera Mandiri',
    jobType: 'Fulltime',
    date: 'Nov 2022 - Feb 2023',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export type Education = {
  title: string,
  date: string,
  desc: string,
}

export const education : Education[] = [
  {
    title: 'Bandung Institute of Technology',
    desc: 'Informatics',
    date: '2020 - 2024',
  },
];

export type Sertification = {
  title: string,
  company: string,
  isSeeDetails: boolean,
  date: string,
};

export const sertification : Sertification[] = [
  {
    title: 'Bit & Bytes',
    date: 'August 2023',
    isSeeDetails: true,
    company: 'Dicoding',
  },
  {
    title: 'Belajar Pemograman',
    date: 'August 2023',
    isSeeDetails: true,
    company: 'Dicoding',
  }
]

