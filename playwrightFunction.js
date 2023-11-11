// playwrightFunction.js
const { install } = require('playwright');

module.exports = async (req, res) => {
  try {
    await install();
    res.status(200).json({ message: 'Playwright installed successfully.' });
  } catch (error) {
    console.error('Error during Playwright installation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
