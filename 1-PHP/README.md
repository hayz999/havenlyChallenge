# PHP Data Structure

A large portion of our codebase is in PHP, so it's important to have some familiarity with how PHP functions.  For the most part you won't need to spin up new PHP classes or applications by yourself, but you will have to be able to parse through them and in addition to doing research, solve some minor problems on your own.

## Set-up Instructions

We use docker on our local environments to ensure a consistent development experiment across computers.  This should be a simplified version of that.  To install and run the tests, follow these instructions.

1. Go to https://docs.docker.com/install/, download and install the latest version for your computer.
2. `docker pull phpunit/phpunit`
3. Run `./runtest.sh`
4. 4 tests should fail, 2 tests should succeed.

## Challenge

Algorithm design is an important part of software development.  The goal of this activity is to get a sense of how you think through complex sets of problems and come up with a solution. Feel free to google and use help to solve the problem, but document each source in your code.

## Problem

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^20?

Design an alorithm by completing the Math-er class provided to you that will allow you to pass a number and an exponent and return the correct sum of the digits.

### Solution

Run the test suite by executing the following command in your command line.

`docker run -v $(pwd):/app --rm phpunit/phpunit -c phpunit.xml`

Make each of the 6 tests pass.

### Bonus

Write a 7th test that correctly outputs the results of 2^20.

### License

Using the https://hub.docker.com/r/phpunit/phpunit/ implementation to run phpunit from docker.