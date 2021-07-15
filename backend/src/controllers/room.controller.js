import statusCodes from "../utils/statusCodes.js";
import messages from "../utils/messages.js";
import misc from "../helpers/misc.js";
import Room from "../models/room.model.js";

const { successResponse, errorResponse } = misc;
const { success, created, serverError, notFound } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;

export default class RoomController {
  static createRoom = async (req, res) => {
    try {
      const newRoom = req.body;
      await Room.create(newRoom);

      return successResponse(res, created, createdSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static updateRoom = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const room = req.body;
      await Room.updateOne(id, room);

      return successResponse(res, success, updatedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static deleteRoom = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      await Room.findOneAndDelete(id);

      return successResponse(res, success, deletedSuccessful);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getRooms = async (req, res) => {
    try {
      const data = await Room.find();

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, dataList, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  static getRoomById = async (req, res) => {
    try {
      const id = { _id: req.params.id };
      const data = await Room.findOne(id);

      if (!data) {
        return errorResponse(res, notFound, dataNotFound);
      }

      return successResponse(res, success, null, null, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };
}
