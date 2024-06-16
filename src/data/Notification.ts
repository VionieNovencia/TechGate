type NotificationTypes = 'APPLIED' | 'TEST' | 'INTERVIEW' | 'RESULT'

type NotificationsPropTypes = {
  id: string;
  title: string;
  desc: string;
  date: string;
  type: NotificationTypes;
}

export const Notifications: { [key: string]: NotificationsPropTypes } = {
  '1' : {
    id: '1',
    title: 'Application Update from PT Sinar Jaya',
    desc: 'We regret to inform you that your application for the Frontend Developer position at PT Sinar Jaya has not been successful. We appreciate your interest in our company and wish you the best in your future endeavors.',
    date: '1 June 2024 16:03',
    type: 'RESULT'
  },
  '2' : {
    id: '2',
    title: 'Interview Invitation from PT Sinar Jaya',
    desc: 'We are pleased to inform you that your application for the Frontend Developer position at PT Sinar Jaya has advanced to the next stage. We have scheduled an interview to further discuss your qualifications.',
    date: '29 May 2024 16:03',
    type: 'INTERVIEW'
  },
  '3' : {
    id: '3',
    title: 'Testing Phase Notification from PT Sinar Jaya',
    desc: 'Your application for the Frontend Developer position at PT Sinar Jaya has progressed to the test',
    date: '26 May 2024 16:03',
    type: 'TEST'
  },
  '4' : {
    id: '4',
    title: 'Your application received!',
    desc: 'Your application for the Frontend Developer position at PT Sinar Jaya has been successfully received.',
    date: '24 May 2024 16:03',
    type: 'APPLIED'
  },
}