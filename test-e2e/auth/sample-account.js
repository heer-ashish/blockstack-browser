module.exports = {
  RECOVERY_ID: 'test_e2e_recovery',
  PASSWORD: '7p7M4vu89xMn964AE6T7',
  EMAIL: 'test_e2e_recovery@mail-apps.com',
  SECRET_RECOVERY_KEY: 'layer decrease junk moral access kid say model enter rigid spend simple',
  MAGIC_RECOVERY_CODE: '6SEAA7SaeQKTnrkcr2CBxRpD8ZeFj7oYLeysPG9Mv7Ibp7Jq5Wie1vLn3fX2ZSMEcs8aXDrSlx6Eso3TWiM+DJA3C9/EabxQqeXvyjcolok=',
  
  /**
   * This is just a dump the localStorage `redux` object from the signed in sample account.
   * Allows rapid login for this test suite. This will need updated occasionally after changes to
   * this object schema. Does not include the lazy-loaded app list data. 
   */
  LOCAL_STORAGE_DATA: "{\"account\":{\"accountCreated\":true,\"promptedForEmail\":false,\"email\":\"test_e2e_recovery@mail-apps.com\",\"encryptedBackupPhrase\":\"d91fa4ece7417c78f7ff22d4a93c519f0b6786e91348ec88b407dfb99a4463122d7049225bad239f39cb7720d21187a0631c6524b6077453bca6705d1f7a014e7b6c9f85474e5af104f3210681606f1d\",\"identityAccount\":{\"publicKeychain\":\"xpub6BD5AWkvt1ZPPvT7hbYw7mBU2fnsBZaw7q3ojAvnsGBPJLGLwuCJj7jLVi6XGhkz5cpLqRW9rnVBw1U41ckdZdS1bVYqTcnjKMUuRq45a88\",\"addresses\":[\"1NDsatzAEqrErxkB1osfJXouADgrHXuDs1\"],\"keypairs\":[{\"key\":\"2680e401fe670c15c43ad9686395177dea7a5f006848eb8eaf4729fc9ec289ee\",\"keyID\":\"03221818a0a3b3f9e3b0b369f085904c63c6caa506a3e1d28dcbc0d6a9aa7a82d2\",\"address\":\"1NDsatzAEqrErxkB1osfJXouADgrHXuDs1\",\"appsNodeKey\":\"xprvA2FnvytPSbUWyyrt3Bwxfaf6urjgAPHqaZZbNiXvE8HUZ4kRAvwNC1hkpjzsf1YnzR8e9SC8CXNBiLG4ZF1oPy3i5eVE5iEVU6YZVspN6tE\",\"salt\":\"19bc80bb27060f30fa4f05b07c92069c3633d6a70b089046f5605329fcdec798\"}],\"addressIndex\":1},\"bitcoinAccount\":{\"publicKeychain\":\"xpub6D1QcTvSqDXUsFF6n35HTohhgzov6LY9fRzNZF17MRTPzdvvN5NTtpUHPXujBEg1i1LFFcbdaFhiQiMgeWkjbCgZaAEB2cdcDxenpwnwpqd\",\"addresses\":[\"16ZsuXRZUipZHdrNPpkpDCJF8ZcwsssGbE\"],\"addressIndex\":0,\"balances\":{\"total\":0}},\"coreWallet\":{\"address\":null,\"balance\":0,\"withdrawal\":{\"txHex\":null,\"isBuilding\":false,\"isBroadcasting\":false,\"inProgress\":false,\"error\":null,\"recipientAddress\":null,\"success\":false}},\"viewedRecoveryCode\":false,\"recoveryCodeVerified\":false,\"connectedStorageAtLeastOnce\":true},\"auth\":{\"appManifest\":null,\"appManifestLoaded\":false,\"appManifestLoading\":false,\"appManifestLoadingError\":null,\"coreSessionTokens\":{},\"loggedIntoApp\":false},\"profiles\":{\"availability\":{\"names\":{},\"lastNameEntered\":null},\"identity\":{\"default\":0,\"localIdentities\":[{\"username\":\"test_e2e_recovery.id.blockstack\",\"usernameOwned\":true,\"usernamePending\":false,\"profile\":{\"@type\":\"Person\",\"@context\":\"http:\/\/schema.org\",\"api\":{\"gaiaHubConfig\":{\"url_prefix\":\"https:\/\/gaia.blockstack.org\/hub\/\"},\"gaiaHubUrl\":\"https:\/\/hub.blockstack.org\"},\"name\":\"Alice Devname\"},\"verifications\":[],\"trustLevel\":0,\"registered\":false,\"ownerAddress\":\"1NDsatzAEqrErxkB1osfJXouADgrHXuDs1\",\"zoneFile\":\"$ORIGIN test_e2e_recovery.id.blockstack\\n$TTL 3600\\n_http._tcp\\tIN\\tURI\\t10\\t1\\t\\\"https:\/\/gaia.blockstack.org\/hub\/1NDsatzAEqrErxkB1osfJXouADgrHXuDs1\/profile.json\\\"\\n\\n\"}],\"publicIdentities\":{},\"nameTransfers\":[],\"zoneFileUpdates\":[],\"createProfileError\":null,\"isProcessing\":false},\"pgp\":{\"publicKeys\":{}},\"registration\":{},\"search\":{\"query\":\"\",\"results\":[]}},\"sanity\":{\"coreApiRunning\":true,\"coreApiPasswordValid\":true},\"settings\":{\"api\":{\"apiCustomizationEnabled\":true,\"nameLookupUrl\":\"https:\/\/core.blockstack.org\/v1\/names\/{name}\",\"searchServiceUrl\":\"https:\/\/core.blockstack.org\/v1\/search?query={query}\",\"registerUrl\":\"https:\/\/core.blockstack.org\/v1\/names\",\"bitcoinAddressLookupUrl\":\"https:\/\/core.blockstack.org\/v1\/addresses\/bitcoin\/{address}\",\"zeroConfBalanceUrl\":\"https:\/\/core.blockstack.org\/v1\/wallet\/balance\/0\",\"insightUrl\":\"https:\/\/utxo.blockstack.org\/insight-api\/addr\/{address}\",\"btcBalanceUrl\":\"https:\/\/blockchain.info\/q\/addressbalance\/\",\"broadcastUrl\":\"https:\/\/utxo.blockstack.org\/insight-api\/tx\/send\",\"priceUrl\":\"https:\/\/core.blockstack.org\/v1\/prices\/names\/{name}\",\"networkFeeUrl\":\"https:\/\/bitcoinfees.21.co\/api\/v1\/fees\/recommended\",\"walletPaymentAddressUrl\":\"https:\/\/core.blockstack.org\/v1\/wallet\/payment_address\",\"pendingQueuesUrl\":\"https:\/\/core.blockstack.org\/v1\/blockchains\/bitcoin\/pending\",\"coreWalletWithdrawUrl\":\"https:\/\/core.blockstack.org\/v1\/wallet\/balance\",\"bitcoinAddressUrl\":\"https:\/\/explorer.blockstack.org\/address\/{identifier}\",\"ethereumAddressUrl\":\"https:\/\/tradeblock.com\/ethereum\/account\/{identifier}\",\"pgpKeyUrl\":\"https:\/\/pgp.mit.edu\/pks\/lookup?search={identifier}&op=vindex&fingerprint=on\",\"btcPriceUrl\":\"https:\/\/www.bitstamp.net\/api\/v2\/ticker\/btcusd\/?cors=1\",\"corePingUrl\":\"https:\/\/core.blockstack.org\/v1\/node\/ping\",\"zoneFileUrl\":\"https:\/\/core.blockstack.org\/v1\/names\/{name}\/zonefile\",\"nameTransferUrl\":\"https:\/\/core.blockstack.org\/v1\/names\/{name}\/owner\",\"subdomains\":{\"foo.id\":{\"registerUrl\":\"http:\/\/localhost:7103\/register\"},\"test-personal.id\":{\"registerUrl\":\"https:\/\/test-registrar.blockstack.org\/register\"},\"id.blockstack\":{\"registerUrl\":\"https:\/\/registrar.blockstack.org\/register\"}},\"browserServerUrl\":\"https:\/\/blockstack-browser-server.appartisan.com\",\"hostedDataLocation\":\"gaia-hub\",\"coreHost\":\"localhost\",\"corePort\":6270,\"coreAPIPassword\":\"PretendPasswordAPI\",\"logServerPort\":\"\",\"regTestMode\":false,\"storageConnected\":true,\"gaiaHubConfig\":{\"url_prefix\":\"https:\/\/gaia.blockstack.org\/hub\/\"},\"gaiaHubUrl\":\"https:\/\/hub.blockstack.org\",\"btcPrice\":\"1000.00\",\"distinctEventId\":\"063b145bc3f59dca962d585947f89d7a\",\"hasDisabledEventTracking\":false}},\"notifications\":[]}"
};
