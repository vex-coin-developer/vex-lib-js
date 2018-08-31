<div align="center">
    <img src=".github/icon.png" alt="Logo" width='150px' height='auto'/>
</div>

# vex-lib-js
JavaScript library for vex

# How to install:
 	NPM:
 	npm i vex-coin-lib-js --save
 	
 	Manual:
 	Just load the files:
 	For development: /dist/nano-lib.js
	For production: /dist/nano-lib.min.js
	
# Generate New Seed
	var seed = VexLib.generateSeed();
	
	Response:
	57ECF517A23958BA38E730A7A13B04993B1AD7EB3B52861819CC0BB33295B62B
		
# Get Wallet Slot
	var walletSlotIndex = 0;
	VexLib.getWalletSlot(seed, walletSlotIndex)
	
	Response:
	{
		"privateKey" : "0F53E14DF6BC23CBC5E4A743C1A795D95DE0496913FEB32E9A683A0CDE201F11",
		"publicKey" : "047C73DC502EB055072D62FA2F69599DA6986257BE26A8B8986DC76708D58E974126F271C1B4A866EC21AA2C16A3D588226109C9157C7D730C16F3DF83D6747763",
		"address" : "VEX_037C73DC502EB055072D62FA2F69599DA6986257BE26A8B8986DC76708D58E9741"
	}
		
# Get Private Key
	var walletSlotIndex = 0;
	VexLib.getPrivateKey(seed, walletSlotIndex)
	
	Response:
	0F53E14DF6BC23CBC5E4A743C1A795D95DE0496913FEB32E9A683A0CDE201F11
		
# Get Public Key
	var walletSlotIndex = 0;
	VexLib.getPublicKey(seed, walletSlotIndex)
	
	Response:
	047C73DC502EB055072D62FA2F69599DA6986257BE26A8B8986DC76708D58E974126F271C1B4A866EC21AA2C16A3D588226109C9157C7D730C16F3DF83D6747763
			
# Get Address
	var walletSlotIndex = 0;
	VexLib.getAddress(seed, walletSlotIndex)
	
	Response:
	VEX_037C73DC502EB055072D62FA2F69599DA6986257BE26A8B8986DC76708D58E9741