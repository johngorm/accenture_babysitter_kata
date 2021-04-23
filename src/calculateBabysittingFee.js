import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import familyRatesPerHour from './familyRatesPerHour';
dayjs.extend(customParseFormat);
const acceptedTimeFormat = 'h:mmA';
const acceptedFamilyCodes = ['A', 'B', 'C'];

const isTimeWithinValidRange = timeObject => {
  return (timeObject.hour() >= 17 || timeObject.hour() < 4 || (timeObject.hour() === 4  && timeObject.minute() === 0));
};

const calculateBabysittingFee = (startTime, endTime, familyCode) => {
  const startTimeObject = dayjs(startTime, acceptedTimeFormat, true);
  const endTimeObject = dayjs(endTime, acceptedTimeFormat, true);
  const startTimeHour = startTimeObject.hour();
  const endTimeHour = endTimeObject.hour();

  if (startTime === undefined ||  endTime === undefined || familyCode === undefined) {
    throw new Error('Error: 3 arguments required, start time, end time and family code letter');
  } else if (!startTimeObject.isValid()) {
    throw new Error('Error: start time must be a time string of hours and minutes and ante or post meridiem');
  } else if (!endTimeObject.isValid()) {
    throw new Error('Error: end time must be a time string of hours and minutes and ante or post meridiem')
  } else if (!acceptedFamilyCodes.includes(familyCode)) {
    throw new Error('Error: must enter valid family code (A, B, or C)')
  } else if (!isTimeWithinValidRange(startTimeObject) || !isTimeWithinValidRange(endTimeObject)) {
    throw new Error('Error: time range must be between 5:00PM and 4:00AM');
  } else if (startTimeHour > endTimeHour && startTime[startTime.length - 2] === endTime[endTime.length - 2]) {
    throw new Error('Error: endTime cannot be before startTime');
  }

  const selectedFamilyRates = familyRatesPerHour[familyCode];
  let hoursWorked = endTimeHour - startTimeHour - Number(endTimeObject.minute() < startTimeObject.minute());
  if (hoursWorked < 0) {
    hoursWorked += 24;
  }
  let hourIterator = parseInt(startTime);
  let total = 0;
  while (hoursWorked > 0) {
    total += selectedFamilyRates[hourIterator];
    hourIterator += 1;
    if (hourIterator > 12) {
      hourIterator %= 12;
    }
    hoursWorked--;
  }
  return total;
}

export default calculateBabysittingFee;