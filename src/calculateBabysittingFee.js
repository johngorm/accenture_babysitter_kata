import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const acceptedTimeFormat = 'h:mmA';
const acceptedFamilyCodes = ['A', 'B', 'C'];
const calculateBabysittingFee = (startTime, endTime, familyCode) => {
  if (startTime === undefined ||  endTime === undefined || familyCode === undefined) {
    throw new Error('Error: 3 arguments required, start time, end time and family code letter');
  } else if (!dayjs(startTime, acceptedTimeFormat, true).isValid()) {
    throw new Error('Error: start time must be a time string of hours and minutes and ante or post meridiem');
  } else if (!dayjs(endTime, acceptedTimeFormat, true).isValid()) {
    throw new Error('Error: end time must be a time string of hours and minutes and ante or post meridiem')
  } else if (!acceptedFamilyCodes.includes(familyCode)) {
    throw new Error('Error: must enter valid family code (A, B, or C)')
  }
  
  return 0.00;
}

export default calculateBabysittingFee;