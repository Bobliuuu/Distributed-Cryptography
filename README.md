# Distributed Cryptography
## Repository for Sethacks 2021 project

## Inspiration

### Persona
Bob is running a small business in the future. He has many customers, all of which create accounts on his website. This means each of his user’s accounts has a lot of personal info on it. However, many malicious hackers want to steal his customer’s data! How can he make sure his customers’ info is secure? 

### Problem
Bob tried many methods to solve his issue. He first tried to send a plaintext message, which was easily stolen. He also tried using a symmetric key encryption system to no avail, since the secret key was insecure, and could be simply brute forced! 

### Solution
Introducing my project, Distributed Cryptography! 

## What it does
Distributed cryptography uses the asymmetric secure RSA encryption system to regulate messages between Bob and his customers (e.g. a user named Alice). It also uses the Distribute Compute Protocol API to speed up many embarassingly parallel aspects of the RSA algorithm.
It also leverages complex algorithms including [https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm](pollard rho's algorithm) and 
By encrypting messages using a secure ciphertext, it is very difficult for a hacker (Eve) to crack the text. This is due to the very fast time complexity encryption and decryption (modular exponentiation) compared to cracking a RSA code (factorization). Even if Eve used the DCP API and the fastest known factorization algorithm ([https://en.wikipedia.org/wiki/General_number_field_sieve](the general number field sieve)), it would still take **infeasibly** long for her to crack the ciphertext for even a relatively small key. 
This is considering if she can even implement such an algorithm. Even the author of [https://github.com/radii/msieve](msieve) reportedly said he doesn't understand all of it. 

## How we built it
I used HTML, CSS, and JS to build the website, to make sure it was easy to deploy and use in the browser. I used the DCP API 

## Challenges we ran into


## Accomplishments that we're proud of

## What we learned

## What's next for Distributed Cryptography
