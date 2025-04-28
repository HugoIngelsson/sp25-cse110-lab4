# Expand

### 1
> Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.

I could see JavaScript's asynchronous nature being a pain point because it can cause dependency issues/race conditions where one function might try to adjust the value of a variable in the middle on another function using it. This means that global variables are probably a bit dangerous to work with and you have to be very careful to control the order in which functions run. The asynchronous nature of JS might also mean that you sometimes have to wait for a value that isn't done computing yet.

The loose typing I can definitely agree on being a problem because it means you have to be way more careful about error handing if you're building something someone else might use. For example, you might expect the argument of a function to be a number but the user passed in a string and JavaScript could let you continue to run the program until something fatal happens. Of course, you can always type check every variable, but that bogs down programming and readability of code. Loose typing also leads to bugs when you don't fully understand how something works, like how `"1" + "2" = "12"` even though we might expect it to equal `3`.

JavaScript running on a web platform might also be a pain point since it limits the scope of what a program might be able to do. A regular computer is typically very fast, but when running JS on a browser, the program speed could be reduced as to avoid taking up too many resources. There are also further complications, such as the fact that every added snippet of code makes it slower to send over the required files for a website to run, and the fact that bug checking on a website might be more painful (even with web tools).

### 2
> Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?

I think the developers who created JavaScript made it loosely tied because they wanted to provide higher flexibility and provide some kind of guard against buggy programs. In C or Java, when you pass in a value of the wrong type, the program typically just crashes. This isn't ideal when we're dealing with web pages since even if one part of the webpage isn't working we could still have most of it functioning. Thus, letting variables be loosely typed allows for another layer of insulation that might cause values to be wrong but won't outright kill a program.

I think they added asynchronous features because much of the web happens asynchronously. That is, we would like a website to only be puttering on in the background until a user interacts with it, so it makes sense to have a framework where some things happen in the background asynchronously while we aren't interacting with them directly. Furthermore, this kind of brings us back to the reliability of a website and the fact that if a function is taking up too much time, it might completely freeze the website. Meanwhile, if that function was asynchronous, then even if it's very slow the rest of the website can continue operating smoothly while it does its work.

### 3
> What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?

In a compiled language, you have a compiler read the written code and compile it into machine code, which is then what a computer reads when executing it. An interpreted language has the computer read each line individually at runtime and decide what to do then and there. JavaScript is an interpreted language.

JavaScript being interpreted allows it to have the features from 1 and 2, in particular loose typing. In a compiled language, typings have to be declared before compilation so that the machine code can know what it needs to do.

However, JavaScript being interpreted also means that it runs slower than compiled languages like C. Since the computer needs to interpret every line at runtime, there is a lot of added computing power necessary to decide what to do for each instruction.

### 4
> The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?

I think the professor is focusing more on vanilla JavaScript for this course because it lays the groundwork for learning about frameworks later. Additionally, it's helpful to start with only vanilla JavaScript for people like me, who have never coded in JavaScript before. Having a bunch of other frameworks to have to learn on top of learning JavaScript for the first time would be very difficult, I think, so it's helpful to only have to learn the vanilla language so I can focus more on the other material taught in this class.

Mastering vanilla JS first before learning any frameworks could be beneficial because having a command of the base language means you can more quickly learn frameworks in the future. Once you understand the fundamentals of JS, it becomes easier to understand how and why frameworks are designed and what purpose each framework tries to fulfill. It also stops you from overspecializing in a framework that you might not use in the future. New frameworks are always being created, but JavaScript likely has some staying power, so learning JS has more long-term value versus learning a particular framework.

Of course, there are drawbacks of not learning a framework. In particular, frameworks are built for a reason, so there might be some functionality in vanilla JavaScript that is difficult (or maybe even impossible?) to create without using a framework. Furthermore, the real world expects people to have some knowledge of specific frameworks and it is business standard not to use just regular JS. This also reflects in the fact that it's appealing to be able to add another framework onto a resume rather than just pure JS.

### 5
> Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?

Very obviously, this lab gives us an understanding of JavaScript, which is a third of what we need to know programming-wise when we implement the functionality of our project. For someone like me who didn't know JavaScript before this class, I would be very lost without this lab.

The part about devtools is very useful for debugging in the browser, which is something I've never done before. Although we'll be able to run our code locally, once it's in deployment things might change unexpectedly. Having the ability to use devtools to debug is something we'll definitely need in our project.

Finally, the flowchart diagramming with draw.io will probably come in handy during our process of designing our webapp. At the same time, I think I'd be able to design a workflow faster by hand, but then again draw.io makes it look really nice and it might be an issue of practice. In any case, it took longer than it probably should've.