import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import families from './families';
dayjs.extend(customParseFormat);
const acceptedTimeFormat = 'h:mmA';
const acceptedFamilyCodes = ['A', 'B', 'C'];

const isHourValid = hourInt => {
  return (hourInt >= 17 || hourInt < 4);
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
  } else if (!isHourValid(startTimeHour) || !isHourValid(endTimeHour)) {
    throw new Error('Error: time range must be between 5:00PM and 4:00AM');
  } else if (startTimeHour > endTimeHour && endTimeHour >= 4) {
    throw new Error('Error: endTime cannot be before startTime');
  }

  let hoursWorked = endTimeHour - startTimeHour - (Number(endTimeObject.minute() < startTimeObject.minute()));
  const selectedFamilyRates = families[familyCode];
  let startHour = parseInt(startTime.split(':')[0]);
  let total = 0;
  while (hoursWorked > 0) {
    total += selectedFamilyRates[startHour];
    startHour += 1;
    hoursWorked--;
  }
  return total;
}

export default calculateBabysittingFee;