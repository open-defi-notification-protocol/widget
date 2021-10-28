import QRCode from './qrcode.js'

export default class ODN {

    init() {

        this.mainDiv = document.createElement('div')

        this.mainDiv.style = "transition: all 0.4s; pointerEvents:none; opacity: 0; background: rgba(0,0,0,0.2);  position: fixed; width: 100%; height: 100%; display:flex; align-items: center;justify-content: center; top:0; left:0; z-index: 999999;"
        this.mainDiv.onclick = () => this.hide();

        this.mainDiv.innerHTML = '<div style="background: #ffffff; padding: 3rem 6rem; display: flex; font-family: Arial; flex-direction: column;;border-radius: 1.5rem; box-shadow: rgba(0,0,0, 0.3) 0 3rem 10rem 0;"> <div style=" font-size: 2rem; font-weight: bold; justify-content: center;text-align: center;">Get free mobile alerts for</br>on-chain events </div> <div style="font-size: 1.2rem; text-align: center; margin-top: 2rem;">Get a push notification or even a phone call to make sure you<br/>never lose your funds and you\'re always up to date </div> <div style="display: flex; height: 100%; padding: 3rem 0; justify-content: center;"> <div style="flex-direction: column; display: flex; align-items: center;"> <span style="text-align: center;font-size: 1.5rem;">1.</span> <span style="font-weight: bold;font-size: 1.3rem; text-align: center; margin-top: 1rem;"> Download the mobile app<br/>"DeFi Notifications"<br/> </span> <img src="assets/icon.png" width="70" style=" margin-top: 2rem;"> <img src="assets/DeFiNotificationsTitle.svg" style="margin-top: 1rem;" width="160"> </img> <button style="background: transparent; border:none; margin-top: 3rem;" onclick="window.open(\'https://apps.apple.com/us/app/defi-notifications/id1588243632\')"> <img src="assets/appstore.png" style="cursor: pointer;"/> </button> <button style="cursor: pointer !important; background: transparent; border:none; margin-top: 0.5rem;" onclick="window.open(\'https://play.google.com/store/apps/details?id=com.orbs.openDefiNotificationsApp\')"> <img src="assets/playstore.png"/> </button> </div> <div style="flex-direction: column; display: flex; align-items: center; border-left: 0.15rem solid #CBCBCB; margin-left: 4rem; padding-left: 3rem;"> <span style="text-align: center;font-size: 1.5rem;">2.</span> <span style="font-weight: bold;font-size: 1.3rem; text-align: center; margin-top: 1rem; margin-bottom: 4rem;"> Open the mobile app </span> <div id="odn-qrcode"></div><span id="odn-wallet-address" style="font-size: 0.9rem;font-weight: bold;margin-top: 0.5rem"></span> <span style="font-weight: bold;font-size: 1.3rem; text-align: center; margin-top: 4rem;"> and scan this QR to select<br/>what to monitor </span> </div> </div> <div style="display: flex; justify-content: center; margin-top: 2rem;margin-bottom: 1rem;"> <button style="cursor: pointer !important; background: #FF007A; color: #ffffff; border:none; border-radius: 1rem;padding: 1rem 6rem; font-size: 1.6rem; font-weight: bold;" onclick="this.hide()"> Close </button> </div> </div>'

        document.body.appendChild(this.mainDiv)

        this.qrCode = new QRCode(document.getElementById("odn-qrcode"), {
            width: 140,
            height: 140,
            colorDark: "#FF007A",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

    }

    show(address, projectId) {

        this.qrCode.makeCode(
            address + ' project:' + projectId + ';'
        )

        document.getElementById('odn-wallet-address').innerText = address.slice(0, 6) + '...' + address.slice(-4);

        this.mainDiv.style.pointerEvents = 'default'
        this.mainDiv.style.opacity = 1

    }

    hide() {

        this.clear();
        this.mainDiv.style.pointerEvents = 'none'
        this.mainDiv.style.opacity = 0

    }

}