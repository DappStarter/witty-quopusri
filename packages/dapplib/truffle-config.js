require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strike rival saddle attitude inflict nation equal gauge'; 
let testAccounts = [
"0xadc4803974a443589893e63fb6bf369d50ff24945b0f2d117e9638774f237154",
"0xba2b96285faf46635ca9b3038620e6400acb69b310cec8dba5a5944a03958c94",
"0x03059e36999c7cb497f51d0b8f4e87b432773ba5024e91bdf3fc1fbada4ad755",
"0xb970b360fb8735da0c6377b2deb03e073fd171784284f23959cdc7fcb52c9ec8",
"0xbc8fc222f576c92fe7e39e680decf5eb0d81987f2e18a8833d0e22f9c100d696",
"0x9844363142094b9ed03d31c97e5238260ab97b1a8de1e7e57ec8d077126bf072",
"0x29a2c42fd874c4071972181bd33a54ab6f5e269fb6cbf70893236878b7c3bd09",
"0x29825d07804759a6926f0ef79eb5c8c36b94bb7ce7d0ae57763bf1f38495db3f",
"0x5eea87e97511f52b25d1a7f5e7d8b62b82d572808f7d10ee547019d3094b221e",
"0x70236e797e867f3dd683811eece73dffb3b62763739035de78ab1d73c164a69c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
