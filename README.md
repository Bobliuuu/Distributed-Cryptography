# Distributed Cryptography
## Repository for SetHacks 2021 Project

### https://distributedcryptography.tk/

Note: All ASCII values are padded at the start with 1 to keep precision of plaintext. 

## Inspiration

### Persona
Bob is running a small business in the future. He has many customers, all of which create accounts on his website. This means each of his user’s accounts has a lot of personal info on it. However, many malicious hackers want to steal his customer’s data! How can he make sure his customers’ info is secure? 

### Problem
Bob tried many methods to solve his issue. He first tried to send a plaintext message, which was easily stolen. He also tried using a symmetric key encryption system to no avail, since the secret key was insecure, and could be simply brute forced! 

### Solution
Introducing my project, Distributed Cryptography! 

![Distributed Cryptography](distributedcryptographyimg.jpg)

## What it does
Distributed cryptography uses the asymmetric secure RSA encryption system to regulate messages between Bob and his customers (e.g. a user named Alice), in order to pass information across users securely and effectively. It also uses the Distribute Compute Protocol API to speed up many embarassingly parallel aspects of the RSA algorithm.
It leverages complex and efficient methods including [Pollard Rho's algorithm](https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm) and the [Miller Rabin primality test](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test) to improve the time complexity and effectiveness of the RSA algorithm. 
By encrypting messages using a secure ciphertext, it is very difficult for a hacker (Eve) to crack the text. This is due to the very fast time complexity encryption and decryption (modular exponentiation) compared to cracking a RSA code (factorization). Even if Eve used the DCP API and the fastest known factorization algorithm ([the general number field sieve](https://en.wikipedia.org/wiki/General_number_field_sieve)), it would still take **infeasibly** long for her to crack the ciphertext for even a relatively small key. 
This is considering if she can even implement such an algorithm. Even the author of [msieve](https://github.com/radii/msieve) reportedly said he doesn't understand all of it. 

## How we built it
I used HTML, CSS, and JS to build the website, to make sure it was easy to deploy and use in the browser. I used the DCP API to compute the cryptography process by exploiting embarassingly parallel algorithms, notably for primality checking and factorization. I used `dcp-util` to deploy Javascript libraries onto the DCP package manager to be able to use them in the compute calls. I also leveraged many APIs and external Javascript libraries in order to get important data or represent values (e.g. using bignumber-js and kvin serialization to represent large values and perform large integer operations). I used Netlify to deploy my website (with a custom domain 😄) so it can be accessible on a live server. 

## Challenges we ran into
I had challenges getting the DCP API to work at first, and getting the exec() and localExec() functions to run smoothly (or at least past estimation). I had to overcome scope issues (e.g. scope of dcp), async issues, package and library issues, and function return and callback issues (e.g. kvin vs json seralization of large numbers). I had challenges as well with getting the HTML and JS to "collaborate" with each other, getting serialization and ASCII inputs to work, dealing with eventListener and event handler issues, JS storage overriding, and so much debugging (mostly with console.log()ing in a bunch of places)! I also had challenges deploying my website (and ensuing local live server issues), as well as VSCode acting up my terminal and when installing extensions.

## Accomplishments that we're proud of
I'm proud of using the DCP API for the first time, and being able to see an algorithm that is able to perform very well, and speed up a very classical algorithm, and overcoming it's issues, including compute groups, exec result slice formatting, package mangagement, latency delays, and many more. I'm proud of making a website that works and that can perform a very important algorithm that will be useful even in the future, with a functioning minimalistic frontend with a strong scalable backend. I'm proud of using, modifying, and understanding many Javascript libraries that I can definitely use in the future. 

## What we learned
I learned how to use the DCP API, and with it, a variety of skills: how to bundle packages using package managers, how to fix API calls, how to use async functions properly (without them returning empty Promises), and how to make calls to DCP workers. I learned a lot of skills related to manipulating Javascript files and libraries, and designing/prototyping websites in a short amount of time (especially the css). 

## What's next for Distributed Cryptography

There are multiple ways Distributed Cryptography can be improved. 

### Scalability 
Distributed Cryptography can be implemented into any business or web system as a standalone JS library (e.g. with NodeJS). It can handle a plethora of users and integrate a database technology such as MongoDB. It can be optimized for extremely fast and precise calculations with very large numbers. It can be integrated with package managers and can be scaled to any number of cores or slices. It can be improved algorithmically, functionally, and scalably. 

### Modeling
Distributed cryptography can be used to solve any algorithmic primality problem, including hash table and pseudorandom number generation. It can be modified to scale based on the magnitude of the input and key size, and the urgency of the model required. It can be leveraged in a variety of use cases, and even can be edited, wrapped, and added to an existing project as a JS package or library. 

## Sources: 

W. Fan, X. Chen and X. Li, "Parallelization of RSA Algorithm Based on Compute Unified Device Architecture," 2010 Ninth International Conference on Grid and Cloud Computing, 2010, pp. 174-178, doi: 10.1109/GCC.2010.44.

Fadhil, H. and M. Younis. “Parallelizing RSA Algorithm on Multicore CPU and GPU.” International Journal of Computer Applications 87 (2014): 15-22. 

Paar, Christof, 1963-. Understanding Cryptography : a Textbook for Students and Practitioners. Berlin ; London :Springer, 2009.

https://www.cs.toronto.edu/~yuvalf/Factorization.pdf 

http://ritter.vg/misc/stuff/gnfs-beginners-guide.pdf
