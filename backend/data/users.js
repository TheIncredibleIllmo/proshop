import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'proshopadmin@yopmail.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
    {
        name: 'James Dean',
        email: 'jamesdean@yopmail.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
    {
        name: 'Jane Doe',
        email: 'jamesdow@yopmail.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
];

export default users;
