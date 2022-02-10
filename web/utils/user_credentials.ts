export const user = {
    email: 'mindaugas.verseckas+quiz@telesoftas.com',
    password: 'Secret123',
}

export const user1 = {
    email: 'testuser1@email.com',
    password: 'Password',
}

export const invalidInputs = {
    notRegisteredEmail: 'no@email.com',
    invalidEmails: ['invalidEmail.com', 'invalid@email', '@invalidEmail.com', '!Tº••…¬¬∫√%##%&~“π¬ª¶•.com', 'invalid.@email@invalidEmail.com'],
    incorrectPass: 'Incorrect',
    shortPass: '1234',
    longPass: Math.random().toString(16).repeat(10),
    longEmail: Math.random().toString(16).repeat(18) + '@mail.mail',
}