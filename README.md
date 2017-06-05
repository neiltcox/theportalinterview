# neilportal

I've decided to format the database as an object. This database object contains an object for each event. The times are represented in 24hr format in an effor to make calculations simpler.
Given more time, my algorithm would loop through each item in the database. For each item, it would check that the dates are the same.
For each month it would check if another month "contains" the current month. If so, that check is a hit. Next it would verify the day.
This is simple, just check equality of the numbers. Finally, year would be checked in the same manner.
To verify if the times conflict, it would see if a beginning or start time are between (start <=[time to be checked] <= end) the start and end of another event.
An additional case is where one event "wraps" another. It's start and end are outside the "inner" event.
This could be verified by checking the start time is outside the bounds of another event. Then, checking if the end time is after the other event's end time.
Other edge cases include events that span different days.
