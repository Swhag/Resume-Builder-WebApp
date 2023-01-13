import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  personalInfo: {
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    summary: '',
  },

  education: [
    {
      id: uuidv4(),
      university: '',
      program: '',
      degree: '',
      graduationDate: '',
      gpa: '',
    },
  ],

  experience: [
    {
      id: uuidv4(),
      company: '',
      location: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ['', '', ''],
    },
  ],

  tasks: [],
};

export default emptyCV;
