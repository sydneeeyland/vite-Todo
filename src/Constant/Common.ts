export const InitialData = {
  backlog: [
    {
      id: 1,
      task: 'Redux ToolKit',
      user: 'Jane Doe',
      status: 'Backlog',
      comments: ['Testing - Jane Doe'],
    },
  ],
  todo: [],
  inprogress: [],
  done: [],
};

export const Users = [
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Jane Doe',
    userName: 'jane.doe',
    password: '123456',
    // password: '$2a$12$kL9fPf/YQ.8OcqOtG8poF.X6mHmQGnmVs5tbX9QGCrisELhq6.cNG',
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Juan Dela Cruz',
    userName: 'juan.cruz',
    password: '123456',
    // password: '$2a$12$kL9fPf/YQ.8OcqOtG8poF.X6mHmQGnmVs5tbX9QGCrisELhq6.cNG',
  },
];
