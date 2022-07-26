require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strategy dash mirror collect gown light army general'; 
let testAccounts = [
"0x4a5271e4b8cda796901c67b4a161ed56e1a41792e789c52f315963d8035e5306",
"0x3b77b362885ab31b16894e7d4bd17547d6a2c7f6907adc9ea1df6327219f8249",
"0x3c05167de90f6112cb1239c6db9aa2660d8dd3eb8f296228a1174fc65900d546",
"0x9d92e19eac7e1f4befacd93f80044d916b5229768bdda352bac18fbc3ef584c3",
"0x7cca6f76c28ab84c8e5b993c71a68e1e1754c451db857188d0a99c143759238a",
"0x2d54749888743e0f3215048b7cc5fbc620a29f3323a2dfc9f6377bf2dd34f9c9",
"0x60d989f4817cd65ff5fa2689038a35e87d2d0630e4fb56b7847fee137970841a",
"0x2754f97e71dee390e129e0171c136767a768f76a0aabab78741ce54607184eda",
"0x8d0985ecfbafe4660bf5cfd4cc7f771a48ad5058c995f196a95d29ea4b03f4cc",
"0xd12b23d53de64ca9cd37bdbaeb144d9b7f88faebb5e00d457d73cf2f6887900f"
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
            version: '^0.8.0'
        }
    }
};

