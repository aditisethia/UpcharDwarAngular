
import { TimeSlotRequest } from "./TimeSlotRequest";
export class ScheduleRequest {
  id!: number;
  selectedDate!: string;
  timeSlots: TimeSlotRequest[] = [];
  isActive: boolean = true;
  isDeleted: boolean = false;
  doctor!: {
    id: number;
  };
}
