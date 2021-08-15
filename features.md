## Features

### Alice: 

- PasswordStrength
Input: Value of password text

- TextEncrypt
Encrypt a password string as a padded ASCII plaintext message. 
Input: Value of password string

- GetKeyPair
Get a key value pair p and q, in order to generate all other values needed for RSA encryption. 
Input: Values of 2 random primes, p and q. 

- ValueEncrypt
Encrypt a plaintext message to a ciphertext message. 
Input: value of plaintext message

### Bob: 

- ValueDecrypt
Decrypt a ciphertext message to a plaintext message. 
Input: Value of ciphertext message

- PasswordDecrypt
Decrypt the ASCII plaintext message to a password string. 
Input: Value of plaintext message
*Note: For cryptography purposes the ASCII plaintext is always padded. When doing this as a standalone function, pat a **1** in front of the ASCII message.*

### Eve (Demonstration Purposes Only)

- ValueCrack
Crack a public key value n by attempting to factor it into two primes p and q. 
Input: The public key value n

- PasswordCrack
Crack an unknown password by attempting to brute force it's value based on a known wordlist, to demonstrate the importance of strong password plaintexts. 
Input: The wordlist URL or file
