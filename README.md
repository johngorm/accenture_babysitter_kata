# accenture_babysitter_kata :baby::baby_bottle:
Node.js code kata for Accenture application process.

## Problem Description
As a user, I would like to calculate the cost of a babysitting service for one evening for one of three families.
Babysitters will only be paid for complete hours of service.
Each family offers different rates based one what time of the evening they need the babysitter.

## Running the program
Install dependencies
```
npm install
```

Call program with start time, end time and family code letter (A, B, C)
```
npm run start {startTime} {endTime} {familyCode}
```
Input requirements:

* Start time and end time must be formatted with hour, minutes and ante meridiem or post meridiem initials.
* Babysitters can only work from 5:00PM to 4:00AM at the most.


## Testing the program
```
npm run test
```
