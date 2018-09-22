var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var problemSchema = new Schema({
  wall: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  setter: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Problem = mongoose.model("Problem", problemSchema);

// Export the Article model
module.exports = Problem;
