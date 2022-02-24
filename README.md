## Open DeFi Notification Protocol Widget 

This package contains a button widget to be integrated on a project's web app to allow its users to quickly setup their on-chain event notifications, download the notifications mobile app and get an easy QR for quick setup.

### Implementation notes

1. include this package in your project
2. create an instance of the class **ODNP** (open defi notification protocol).

```javascript
const odnp = new ODNP();
```   

3. on load of your project call the **init** function.

```javascript
odnp.init();
```
   
4. create a button to open the popup that shows the instructions to the user.
5. assign the onclick event of that button to the **show** function, passing the 
   user wallet address and the project identifier on the Open DeFi Notification Protocol.
 

```javascript 
odnp.show('0xC8da773F54Ce6fcffFd5B8cC1F76542D2B75c412','projectId');
```

