const config = {
    jungle: [
        {
            // haproxy
            bp_name: 'eosdacserval',
            name: 'eosDAC',
            host: 'jungle.eosdac.io',
            port: 9666,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'lioninjungle',
            name: 'Cryptolions',
            host: 'jungle2.cryptolions.io',
            port: 9876,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'ohtigertiger',
            name: 'Cryptolions 2',
            host: 'jungle2.cryptolions.io',
            port: 19876,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'alohaeostest',
            name: 'Aloha',
            host: 'peer.jungle.alohaeos.com',
            port: 9876,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: '',
            name: 'EOS Nation',
            host: 'jungle.eosn.io',
            port: 9876,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'ivote4eosusa',
            name: 'eosUSA',
            host: 'jungle.eosusa.news',
            port: 19876,
            api: 'https://jungle.eosusa.news'
        },
        {
            bp_name: 'teamgreymass',
            name: 'Greymass',
            host: 'jungle.greymass.com',
            port: 9877,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'greeneosiobp',
            name: 'EOS Green',
            host: 'p2p.jungle.greeneosio.com',
            port: 9876,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'eosphereiobp',
            name: 'EOS Sphere',
            host: 'peer1-jungle.eosphere.io',
            port: 9876,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'junglesweden',
            name: 'EOS Sweden',
            host: 'jungle.eossweden.org',
            port: 59875,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'eosbarcelona',
            name: 'EOS Barcelona',
            host: 'jungle.eosbcn.com',
            port: 2095,
            api: 'https://jungle.eosdac.io'
        },
        {
            bp_name: 'atticlabjbpn',
            name: 'Attic Lab',
            host: 'jungle.atticlab.net',
            port: 9876,
            api: 'https://jungle.eosdac.io'
        },
    ],
    mainnet: [
        /*{
            name: 'eosDAC',
            host: 'eu.eosdac.io',
            port: 49876,
            api: 'https://api.eossweden.org'
      }/*,
        {
            name: 'Greymass',
            host: 'seed.greymass.com',
            port: 9876,
            api: 'https://eos.greymass.com'
        },*/
        {
            name: 'SW/Eden',
            host: 'p2p.eossweden.org',
            port: 9076,
            api: 'https://api.eossweden.org'
        }/*,
         {
             name: 'EOS Rio',
             host: 'br.eosrio.io',
             port: 9876,
             api: 'https://api.eosrio.io'
         },
         {
             name: 'EOS Nation',
             host: 'peer.eosn.io',
             port: 9876,
             api: 'https://api.eosn.io'
         }*/
    ],
    kylin: [
        {
            name: 'sweden kylin',
            host: 'kylin.eossweden.org',
            port: 59874,
            api: 'https://kylin.eossweden.org'
        }
    ]
};

module.exports = config;