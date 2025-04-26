# Explore Devtools Part 2

### 1
The bug was that the program was reading the input as strings even though we wanted to do arithmetic operations, so we ended up concatenating the inputs rather than calculating their sums.

### 2
I fixed it by explicitly casting each input into a number using `Number(<input>)`. This also tells the user if their input isn't valid by outputting `NaN`, which is a slight side benefit.