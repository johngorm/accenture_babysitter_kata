const calculateBabysittingFee = (startTime, endTime, familyCode) => {
  if (startTime === undefined ||  endTime === undefined || familyCode === undefined) {
    throw new Error('Error: 3 arguments required, start time, end time and family code letter');
  }
  return 0.00;
}

export default calculateBabysittingFee;