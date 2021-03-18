const { OPEN_READWRITE } = require('sqlite3');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  const { scheme_id } = req.params;

  if (!scheme_id) {
    res
      .status(404)
      .json({ message: `scheme with scheme_id ${scheme_id} id> not found` });
  } else {
    next();
  }
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;

  if (!scheme_name || scheme_name === '' || typeof name !== 'string') {
    res.status(400).json({ message: 'invalid scheme_name' });
  } else {
    next();
  }
};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const instructions = req.body.instruction;
  const steps = req.body;

  if (!instructions || req.body === '' || req.body !== '') {
    res.status(400).json({ message: 'invalid step' });
  } else if (steps === isNaN || steps < 1) {
    res.status(400).json({ message: 'invalid step' });
  } else {
    next();
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
