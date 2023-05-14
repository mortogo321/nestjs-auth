export default () => ({
  app: {
    name: 'Nest.js Auth Demo',
    port: parseInt(process.env.UPLOAD_PORT, 10) || 3000,
    bcrypt: {
      saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 10,
    },
  },
});
