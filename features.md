## Features

### Alice: 

- PasswordStrength 
Find the strength of a password string. <br>
Input: Value of password string

- TextEncrypt
Encrypt a password string as a padded ASCII plaintext message. <br>
Input: Value of password string

- GetKeyPair
Get a key value pair p and q, in order to generate all other values needed for RSA encryption. <br>
Input: Values of 2 random primes, p and q. 

- ValueEncrypt
Encrypt a plaintext message to a ciphertext message. <br>
Input: value of plaintext message

### Bob: 

- ValueDecrypt
Decrypt a ciphertext message to a plaintext message. <br>
Input: Value of ciphertext message

- PasswordDecrypt
Decrypt the ASCII plaintext message to a password string. <br>
Input: Value of plaintext message <br>
*Note: For cryptography purposes the ASCII plaintext is always padded. When doing this as a standalone function, pat a **1** in front of the ASCII message.*

### Eve (Demonstration Purposes Only)

- ValueCrack
Crack a public key value n by attempting to factor it into two primes p and q. <br>
Input: The public key value n

- PasswordCrack
Crack an unknown password by attempting to brute force it's value based on a known wordlist, to demonstrate the importance of strong password plaintexts. <br>
Input: The wordlist URL or file <br>
*Note: A sample wordlist can be found [here](url.md)!*
