# Expose Part 1

### 1
20

### 2
20

### 3
You shouldn't use var because its scope might be bigger than you intended. For example, in this case we'd only want result to be scoped within the if statement, but we can access its value within all of sumValues, which might lead to bugs if we're not careful.

### 4
20

### 5
The code returns an error because result isn't defined at line 13. It was defined using `let` within the if statement, but then after exiting the if statement it went out of scope and so line 13 can't access its value.

### 6
The code returns an error since you're not allowed to change the value of a variable declared with `const` after it's initialized, meaning the summation + assignment at line 7 is illegal.

### 7
Since we've already had an error within the if statement, we never reach line 13 either.