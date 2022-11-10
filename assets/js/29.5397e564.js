(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{305:function(t,e,a){"use strict";a.r(e);var o=a(10),i=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cold-wasabi-hardware-wallet-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cold-wasabi-hardware-wallet-mode"}},[t._v("#")]),t._v(" Cold-Wasabi Hardware Wallet Mode")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#using-hardware-wallet-step-by-step"}},[t._v("Using hardware wallet step-by-step")])]),e("li",[e("a",{attrs:{href:"#what-is-cold-storage"}},[t._v("What is Cold Storage")])]),e("li",[e("a",{attrs:{href:"#hardware-wallet-with-wasabi"}},[t._v("Hardware Wallet with Wasabi")]),e("ul",[e("li",[e("a",{attrs:{href:"#connecting-via-usb"}},[t._v("Connecting via USB")])]),e("li",[e("a",{attrs:{href:"#connecting-coldcard-via-sd-card"}},[t._v("Connecting Coldcard via SD card")])])])]),e("li",[e("a",{attrs:{href:"#cold-wasabi-protocol"}},[t._v("Cold-Wasabi protocol")])]),e("li",[e("a",{attrs:{href:"#gui-tutorial"}},[t._v("GUI tutorial")]),e("ul",[e("li",[e("a",{attrs:{href:"#coinjoin-on-the-hot-wasabi"}},[t._v("CoinJoin on the hot Wasabi")])]),e("li",[e("a",{attrs:{href:"#set-up-your-cold-wasabi"}},[t._v("Set up your cold-Wasabi")])]),e("li",[e("a",{attrs:{href:"#send-bitcoins-from-hot-to-cold-wasabi"}},[t._v("Send bitcoins from hot to cold Wasabi")])]),e("li",[e("a",{attrs:{href:"#send-bitcoins-from-cold-wasabi"}},[t._v("Send bitcoins from cold Wasabi")])])])])])]),e("p"),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"using-hardware-wallet-step-by-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-hardware-wallet-step-by-step"}},[t._v("#")]),t._v(" Using hardware wallet step-by-step")]),t._v(" "),e("ol",[e("li",[t._v("Start your Wasabi Wallet and connect your hardware wallet with USB.\nAlternatively, you can import a Coldcard skeleton file via SD card.")]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("Hardware Wallet")]),t._v(" tab will open, and there you can search all connected hardware wallets.")]),t._v(" "),e("li",[t._v("Click "),e("code",[t._v("Load Wallet")]),t._v(", then you can "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("receive")]),t._v(" bitcoin to addresses controlled by the hardware wallet.")],1),t._v(" "),e("li",[t._v("You can "),e("RouterLink",{attrs:{to:"/using-wasabi/Send.html"}},[t._v("spend")]),t._v(" these coins in the "),e("code",[t._v("Send")]),t._v(" tab, though the hardware wallet must be connected via USB to confirm before signing the transaction.\nAlternatively, you can "),e("RouterLink",{attrs:{to:"/using-wasabi/ColdWasabi.html#connecting-coldcard-via-sd-card"}},[t._v("build a PSBT")]),t._v(", export this via SD card to your Coldcard wallet for signing, then import the final transaction to Wasabi for broadcasting.")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("No CoinJoin")]),t._v(" "),e("p",[t._v("Unfortunately, as of now, you cannot "),e("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[t._v("CoinJoin")]),t._v(" with just the private keys on your hardware wallet.\nThe keys need to be on the internet-connected computer to be able to CoinJoin.")],1)]),t._v(" "),e("h2",{attrs:{id:"what-is-cold-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-cold-storage"}},[t._v("#")]),t._v(" What is Cold Storage")]),t._v(" "),e("p",[t._v("Cold storage refers to generating and storing private keys completely offline.\nThis is an often-used security precaution, especially dealing with large amounts of bitcoin.\nBecause the private keys are not on a computer that is connected to the internet, many remote attack vectors are nullified.")]),t._v(" "),e("p",[t._v("Methods of cold storage include keeping private keys on a:")]),t._v(" "),e("ul",[e("li",[t._v("USB drive or other data storage medium")]),t._v(" "),e("li",[t._v("Paper wallet")]),t._v(" "),e("li",[t._v("Bearer item such as a physical bitcoin")]),t._v(" "),e("li",[t._v("Hardware wallet")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Use a hardware wallet for cold storage")]),t._v(" "),e("p",[t._v("There are multiple ways to exercise cold storage, however it is highly reccommended to use a hardware wallet.\nThis is by far the best and most secure way of using bitcoin for almost all users.")])]),t._v(" "),e("h2",{attrs:{id:"hardware-wallet-with-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet-with-wasabi"}},[t._v("#")]),t._v(" Hardware Wallet with Wasabi")]),t._v(" "),e("p",[t._v("You can use Wasabi Wallet with almost any hardware wallet out there because Wasabi utilizes "),e("a",{attrs:{href:"https://github.com/bitcoin-core/hwi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core Hardware Wallet Interface [HWI]"),e("OutboundLink")],1),t._v(".\nThe setup is thoroughly tested for "),e("a",{attrs:{href:"https://trezor.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trezor model T"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://ledger.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ledger Nano S, Nano S Plus and Nano X"),e("OutboundLink")],1),t._v(", and "),e("a",{attrs:{href:"https://coldcard.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coldcard"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"connecting-via-usb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connecting-via-usb"}},[t._v("#")]),t._v(" Connecting via USB")]),t._v(" "),e("h4",{attrs:{id:"import-the-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-the-wallet"}},[t._v("#")]),t._v(" Import the wallet")]),t._v(" "),e("p",[t._v("When Wasabi is running, the hardware wallet can be connected via USB to the computer.\nWasabi should automatically detect the hardware, and open the "),e("code",[t._v("Hardware Wallet")]),t._v(" tab where you can load the wallet.\nThis wallet can be used as a watch-only wallet when the hardware wallet device is not connected.")]),t._v(" "),e("h4",{attrs:{id:"receiving-bitcoin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#receiving-bitcoin"}},[t._v("#")]),t._v(" Receiving bitcoin")]),t._v(" "),e("p",[t._v("After the first time you loaded a new device, the public keys will be stored locally on the computer, and you can use Wasabi to "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("receive bitcoin")]),t._v(" to the hardware wallet without connecting it again.")],1),t._v(" "),e("h4",{attrs:{id:"sending-bitcoin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-bitcoin"}},[t._v("#")]),t._v(" Sending bitcoin")]),t._v(" "),e("p",[t._v("Only when you want to "),e("RouterLink",{attrs:{to:"/using-wasabi/Send.html"}},[t._v("send bitcoin")]),t._v(" you need to connect the device over USB again.\nIn the "),e("code",[t._v("Send")]),t._v(" tab, select your coins, specify the destination address and the payment amount and the fee, then click the "),e("code",[t._v("Send Transaction")]),t._v(" button.\nThe private keys are not on the computer, thus the transaction is signed on the hardware wallet after you confirm with a physical button click.\nThe final transaction is automatically broadcast over Tor with Wasabi Wallet.")],1),t._v(" "),e("h3",{attrs:{id:"connecting-coldcard-via-sd-card"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connecting-coldcard-via-sd-card"}},[t._v("#")]),t._v(" Connecting Coldcard via SD card")]),t._v(" "),e("p",[t._v("You can use Wasabi Wallet together with Coldcard without ever connecting it via USB, further reducing possible attack vectors.\nFor more details see the "),e("a",{attrs:{href:"https://coldcard.com/docs/microsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coldcard documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"import-the-skeleton-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-the-skeleton-wallet"}},[t._v("#")]),t._v(" Import the skeleton wallet")]),t._v(" "),e("p",[t._v("Power your Coldcard on a power bank or electricity socket, then unlock it with your pin.\nPut in a Micro SD card and go to "),e("code",[t._v("Advanced > MicroSD Card > Export Wallet > Wasabi Wallet")]),t._v(".\nThis will write the public keys, wallet fingerprint, derivation path and other metadata to a skeleton file "),e("code",[t._v("new-wallet.json")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Protect your public keys!")]),t._v(" "),e("p",[t._v("This file does not include your private keys, so an attacker cannot use it to spend your bitcoin.\nHowever, he can use it to derive a full transaction history, thus it is a potential privacy leak.")])]),t._v(" "),e("p",[t._v("Now insert the SD card to your computer, and open Wasabi Wallet.\nGo to the "),e("code",[t._v("Hardware Wallet")]),t._v(" tab, and click the button "),e("code",[t._v("Import Coldcard")]),t._v(", browse to the SD card and select the "),e("code",[t._v("new-wallet.json")]),t._v(" file.\nWasabi will automatically import and modify this skeleton file and store it in your "),e("code",[t._v("Wallets")]),t._v(" and "),e("code",[t._v("WalletBackups")]),t._v(" folders.")]),t._v(" "),e("h4",{attrs:{id:"receiving-bitcoin-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#receiving-bitcoin-2"}},[t._v("#")]),t._v(" Receiving bitcoin")]),t._v(" "),e("p",[t._v("After the skeleton wallet is imported, you can open the wallet in the "),e("code",[t._v("Load Wallet")]),t._v(" tab or "),e("code",[t._v("Wallet Explorer")]),t._v(" without using your Coldcard.\nGenerate a "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("receiving address")]),t._v(" as usual.\nThe private key corresponding to this address is on the hardware wallet.")],1),t._v(" "),e("h4",{attrs:{id:"sending-bitcoin-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-bitcoin-2"}},[t._v("#")]),t._v(" Sending bitcoin")]),t._v(" "),e("p",[t._v("In the right-side "),e("code",[t._v("Wallet Explorer")]),t._v(", click on "),e("code",[t._v("Advanced")]),t._v(" of your hardware wallet, then on "),e("code",[t._v("Build Transaction")]),t._v(".\nThis shows you a tab similar to the "),e("code",[t._v("Send")]),t._v(" tab.\nYou select coins, specify the destination address, payment amount and mining fee.\nThen you click the "),e("code",[t._v("Build Transaction")]),t._v(" button, and it will generate an unsigned Bitcoin transaction.\nClick on "),e("code",[t._v("Export Binary PSBT")]),t._v(", select the SD card and click "),e("code",[t._v("OK")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:"/PSBTUnsigned.png",alt:"Wasabi Wallet export PSBT",title:"Wasabi Wallet Partial Signed Bitcoin Transaction"}})]),t._v(" "),e("p",[t._v("Remove the SD card from the computer and put it into your Coldcard.\nThen, in the Coldcard main menu click on "),e("code",[t._v("Ready to Sign")]),t._v(".\nVerify the transaction details shown on the Coldcard, and approve the transaction for signing.\nAfter this, remove the micro SD card from Coldcard and insert it into the computer.\nIn Wasabi, click on the top menu "),e("code",[t._v("Tools")]),t._v(" and then "),e("code",[t._v("Transaction Broadcaster")]),t._v(".\nIn this tab, select "),e("code",[t._v("Import Transaction")]),t._v(", lookup the SD card with the final signed transaction, and click "),e("code",[t._v("OK")]),t._v(".\nThen click "),e("code",[t._v("Broadcast Transaction")]),t._v(", and Wasabi will privately announce it to the Bitcoin network over Tor.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/PSBTBroadcast.png",alt:"Wasabi Wallet Transaction Broadcaster",title:"Wasabi Wallet Transaction Broadcaster"}})]),t._v(" "),e("h2",{attrs:{id:"cold-wasabi-protocol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cold-wasabi-protocol"}},[t._v("#")]),t._v(" Cold-Wasabi protocol")]),t._v(" "),e("p",[t._v("This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.\nBecause you cannot do CoinJoin with the private keys on the hardware wallet, you will need to generate and load two different wallets in Wasabi.\nA 'hot' (CoinJoin) and a 'cold' (Storage) wallet will both be running in parallel, label them accordingly so you don't mix them up.")]),t._v(" "),e("h2",{attrs:{id:"gui-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui-tutorial"}},[t._v("#")]),t._v(" GUI tutorial")]),t._v(" "),e("h3",{attrs:{id:"coinjoin-on-the-hot-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin-on-the-hot-wasabi"}},[t._v("#")]),t._v(" CoinJoin on the hot Wasabi")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("First")]),t._v(" "),e("p",[t._v("You should make your existing coins private.\nIt is useful to generate a complete new hot wallet for this, so as to keep the CoinJoin transaction history separate from other wallets.")])]),t._v(" "),e("ol",[e("li",[e("RouterLink",{attrs:{to:"/using-wasabi/WalletGeneration.html"}},[t._v("Generate a new hot-Wasabi Wallet")]),t._v(".")],1),t._v(" "),e("li",[t._v("Open the "),e("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[t._v("Receive")]),t._v(" tab to get a new address.")],1),t._v(" "),e("li",[t._v("From a pre-existing wallet, send bitcoin into this Hot-Wasabi Wallet.")]),t._v(" "),e("li",[t._v("In the "),e("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[t._v("CoinJoin")]),t._v(" tab, select the relevant coins, enqueue them, and wait for the CoinJoin to be done.")],1)]),t._v(" "),e("p",[t._v("Remix often to gain a high anonymity set.")]),t._v(" "),e("h3",{attrs:{id:"set-up-your-cold-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-cold-wasabi"}},[t._v("#")]),t._v(" Set up your cold-Wasabi")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Second")]),t._v(" "),e("p",[t._v("In order to separate these new private coins, you should generate a fresh wallet on your hardware device.")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Generate and back up a new set of keys on your hardware wallet.")]),t._v(" "),e("li",[t._v("Load your hardware wallet device to Wasabi, either via USB or SD card.")]),t._v(" "),e("li",[t._v("Label and generate a receive address for the hardware wallet.\nFor the first setup, you need to connect the hardware wallet to the computer that runs Wasabi, afterwards, you can generate receive addresses without the device being connected.")]),t._v(" "),e("li",[t._v("Copy the receiving address from the cold-Wasabi.")])]),t._v(" "),e("h3",{attrs:{id:"send-bitcoins-from-hot-to-cold-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-bitcoins-from-hot-to-cold-wasabi"}},[t._v("#")]),t._v(" Send bitcoins from hot to cold Wasabi")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Third")]),t._v(" "),e("p",[t._v("In order to keep the mixed coins separate and without revealing that you own all of them, send the "),e("img",{staticClass:"shield",attrs:{src:"/ShieldCheckmark.png",alt:"Wasabi Wallet green checkmark shield anonymity set",title:"Wasabi Wallet green checkmark shield anonymity set"}}),t._v(" coins without consolidating them.\nWait some time in-between sending them, so that timing analysis becomes more difficult.")])]),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[t._v("Go to the hot-Wasabi "),e("code",[t._v("Send")]),t._v(" tab, and select the coins with high anonymity set.\nDo not consolidate your "),e("img",{staticClass:"shield",attrs:{src:"/ShieldCheckmark.png",alt:"Wasabi Wallet green checkmark shield anonymity set",title:"Wasabi Wallet green checkmark shield anonymity set"}}),t._v(" coins, but send them in small, time-staggered batches.")]),t._v(" "),e("li",[t._v("Paste the cold-Wasabi address.")]),t._v(" "),e("li",[t._v("Click the "),e("code",[t._v("MAX")]),t._v(" button to send the whole mixed coin without generating change.")])]),t._v(" "),e("h3",{attrs:{id:"send-bitcoins-from-cold-wasabi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-bitcoins-from-cold-wasabi"}},[t._v("#")]),t._v(" Send bitcoins from cold Wasabi")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Finally")]),t._v(" "),e("p",[t._v("You can at any time spend the bitcoin from the cold-Wasabi.")])]),t._v(" "),e("ol",{attrs:{start:"12"}},[e("li",[t._v("Connect your hardware wallet to the computer.")]),t._v(" "),e("li",[t._v("Load the cold Wasabi wallet.")]),t._v(" "),e("li",[t._v("Go to the "),e("code",[t._v("Send")]),t._v(" tab, select the coins and destination, then sign the transaction with the hardware wallet.\nAlternatively, go to the "),e("code",[t._v("Build Transaction")]),t._v(" tab and do the Coldcard SD card workflow.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Success!")]),t._v(" "),e("p",[t._v("おめでとうございます!")]),t._v(" "),e("p",[t._v("You are now eating Cold Wasabi!")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The anonymity set is tied to the wallet that you used to CoinJoin, if you send a mixed coin to another Wasabi Wallet (in this case your hardware wallet), it will have an anonymity set 1 (red) because this wallet doesn't know that the coin was coinjoined.")]),t._v(" "),e("p",[t._v('You should use a meaningful label when you generate a receive address in your hardware wallet, e.g. "Myself 100 anonset" (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).')])])])}),[],!1,null,null,null);e.default=i.exports}}]);