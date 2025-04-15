const signupSchema = {
    body: {
        type: 'object',
        required: ['email', 'password', 'name'],
        properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string', pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" },
            name: { type: 'string', pattern: '^[a-zA-Z\\s]{2,}$' },
            mobile: { type: "string", pattern: '^[0-9]{10}$' },
            dob: { type: 'string', format: 'date' },
        }
    }
}
export default signupSchema;