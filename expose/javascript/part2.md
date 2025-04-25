# Expose Part 2

### 1
It will print `2`, which is equal to `prices.length`, since `i` was declared as a `var` so its scope is all of the function (i.e. we can still access its value after we escape the for loop). Note that we do a final increment on `i` before exiting the loop.

### 2
Since `discountedPrice` was declared as a `var`, line 13 will print its final value after exiting the for loop, which in this case is `150`

### 3
As above, `finalPrice` will print its final value after the loop exists (this time without even violating scope!), which is `150`.

### 4
The function returns an array of discounted prices. In particular, it loops through every item in `prices`, applies a discount to it, rounds it to the nearest 100th, and then adds the discounted price to an array (`discounted`) of final prices. At the end, the function returns this array, which in this case is `[50, 100, 150]`.

### 5
The code causes an error at line 12 because `i` isn't defined in this scope (it was only declared in the scope of the for loop).

### 6
Similarly to #5, line 13 will also cause an error because `discountedPrice` is only defined within the body of the for loop.

### 7
This one is actually fine since `finalPrice` was declared within the scope of the function where line 14 runs. As such, it will print the final value that `finalPrice` took in the for loop, which is `150`.

### 8
As with question #4, this function just returns an array of discounted + rounded prices, which is `[50, 100, 150]` in this case (again). 

### 9
For the exact same reason as with #5, line 11 causes an error since `i` isn't declared in this scope.

### 10
The program prints the length of `prices` at line 12, which is `3` in this case. This is fine since `length` was declared in the same scope as the print statement.

### 11
As before, this function returns an array (which in this case is `[50, 100, 150]`). Here, notice that we never actually reassign the value of `discounted` (which would be a violation of it being a `const`). Instead, we run a member function (`push`) to add items to it, which is totally fine.

### 12
1. `student.name`
2. `student['Grad Year']`
3. `student.greeting()`
4. `student['Favorite Teacher'].name`
5. `student.courseLoad[0]`

### 13
1. `'32'` since `2` is converted into its string representation `'2'` and is then appended onto `'3'`.
2. `1` since the minus sign is treated as arithmetic, so `'3'` first gets converted into `3` and then we perform `3 - 2` which is `1`.
3. `3` since `null` is converted into `0`, so we then perform `3 + 0` which is `3`.
4. `'3null'` since `null` is converted into `'null'` and is then appended onto `'3'`.
5. `4` since `true` gets converted into `1` and is then added to `3`.
6. `0`: since there aren't any strings, JS defaults to using numbers arithmetic, wherein both `false` and `null` get converted into `0` and then added.
7. `'3undefined'` since `undefined` is simply converted into its string representation `'undefined'` and is then appended onto `'3'`
8. `NaN`: the minus operation only works with numbers, so `'3'` gets converted into `3` and `undefined` becomes `NaN` since it can't be read as a number; any mathematical operation with `NaN` becomes `NaN`, so the result is `NaN`.

### 14
1. `true`, since `'2'` becomes the number `2`, which is greater than `1`.
2. `false`, since when both sides are strings, they are compared in lexicographical order, and `'2'` is greater than `'1'`.
3. `true`, since the string `'2'` is converted into the number `2`, which of course is equal to `2`.
4. `false`, since the two sides are different types so the comparison immediately returns false without trying to type convert them.
5. `false`, since `true` is converted into `1`, which isn't equal to `2`.
6. `true`, since `Boolean(2)` becomes `true` (any argument other than `0` would make it true), and `true` and `true` are both of the same type and are equal. 

### 15
The `==` operator tries to perform a type conversion on both sides of the argument to make them align, while the `===` operator compares them as they are (meaning if they're different types, it always returns false).

### 16
(File in this directory)

### 17
The result will be `[2, 4, 6]`. In the for loop, we apply the `callback` function to each element of `array` and append it to the end of `newArr` (which is what we later return). Since the callback function we passed simply returns our input times 2, the result will be our initial array multiplied by 2.

### 18
(File in this directory)

### 19
```
1
4
3
2
```

(Despite 3 having a timeout of only 0 seconds, it gets put on another thread, so the main thread finishes and prints 4 first before it gets a chance to run)