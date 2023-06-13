const mongoose = require('mongoose');
const { Schema } = mongoose;

const rideSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  pickUp: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  status: {
    type: Boolean,
    default: false
  },
  cost: {
    type: Number,
    default: 0
  },
  driverId: {
    type: String,
    default: null
  },
  expectedTime: {
    type: String,
    default: "inf"
  }
});

// rideSchema.methods.acceptRide = async function (driverId) {
//   console.log("acceptRide of ride model ########################");
//   let success = true;
//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const ride = await this.constructor.findById(this._id).session(session);

//     if (ride.status || ride.complete) {
//       success = false;
//     } else {
//       ride.driverId = driverId;
//       ride.status = true;
//       await ride.save();
//     }

//     await session.commitTransaction();
//     session.endSession();
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }

//   return success;
// };

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
