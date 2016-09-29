module.exports = {
  env: 'dev',
  db: 'mongodb://localhost/contatooh',
  clientID: process.env.CLIENT_ID, 
  clientSecret: process.env.CLIENT_SECRET,
  seleniumUser: process.env.SELENIUM_USER, 
  seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};