import { TSlot } from './slot.interface';
import { Slot } from './slot.model';
import { convertToMinutes, convertToTime } from './slotUtils';

const CreateSlotService = async (payload: TSlot) => {
  const { startTime, endTime, room, ...restPayload } = payload;
  const slotDuration = 60; // Assuming slot duration is 60 minutes

  // Convert start and end times to minutes since midnight
  const startTimeInMinutes = convertToMinutes(startTime);
  const endTimeInMinutes = convertToMinutes(endTime);

  // Calculate total duration in minutes
  const totalDuration = endTimeInMinutes - startTimeInMinutes;

  // Determine the number of slots
  const numberOfSlots = Math.floor(totalDuration / slotDuration);

  // Generate slot time intervals and save each slot to database
  const slots = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = convertToTime(startTimeInMinutes + i * slotDuration);
    const slotEndTime = convertToTime(
      startTimeInMinutes + (i + 1) * slotDuration,
    );

    // Create and save the new slot
    const slot = new Slot({
      startTime: slotStartTime,
      endTime: slotEndTime,
      room: room,
      ...restPayload, // Include other payload properties like date
    });
    const savedSlot = await slot.save();
    slots.push(savedSlot);
  }
  return slots;
};

const GetAvailableSlotService = async () => {
  const result = await Slot.find({ isBooked: false });
  if (result.length < 1) {
    throw new Error('Slot is not available at this moment');
  }
  return result;
};

export const SlotService = {
  CreateSlotService,
  GetAvailableSlotService,
};
