import mongoose from 'mongoose';

const verifyObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export default verifyObjectId;
