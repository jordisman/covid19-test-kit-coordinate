const mongoose = require('mongoose');

const providers = mongoose.Schema({
  id: Number,
  provider_name: String,
  address: String,
  email: String,
  phone: Number,
  operation_hours: Array,
  geolocation: Array,
  tests_available: Number,
  testing_capacity: Array, //red, green, yellow
  testing_criteria: Array,
  miscellaneous_materials: Array
});

const Provider = mongoose.model('Provider', providers);

const getAll = (callback) => {
  Provider.find({}, (err, providers) => {
    if (err) {
      callback(err);
    } else {
      callback(providers);
    }
  });
};

const getOne = (id, callback) => {
  Provider.findOne({id: id}, (err, provider) => {
    if (err) {
      callback(err);
    } else {
      callback(provider);
    }
  });
};