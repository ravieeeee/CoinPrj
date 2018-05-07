export default {
  name: 'XMR',
  toggled: true,
  children: [
    {
      name: 'description',
      children: [
        { name: 'Monero (XMR) is a cryptonight algorithm based alternative crypto currency. The coin is based on Proof of Work and has a block reward that varies smoothly. The difficulty retargets every block with a sixty second block target.  Monero uses a Ring Signature system to protect your privacy, allowing users to make untraceable transactions.' },
      ]
    },
    {
      name: 'features',
      children: [
        {
          name: 'Privacy (Untraceable payments, Unlinkable transactions)',
          children: [
            { name: 'Monero daemon uses the original CryptoNote protocol except for the initial changes (as the block time and emission speed). The protocol itself is based on ring signatures and stealth addresses. The end result is passive, decentralised mixing based on heavily-tested algorithms.' }
          ]
        },
        {
          name: 'Decentralisation',
          children: [
            { name: 'The smart mining[20] forthcoming feature will allow transparent CPU mining on the users computer, far from the de facto centralization of mining farms and pool mining, pursuing Satoshi Nakamotos original vision of a true p2p currency.' }
          ]
        },
        {
          name: 'Scalability',
          children: [
            { name: 'Monero has no hardcoded limit, which means it doesnt have a 1 MB block size limitation preventing scalability.' }
          ]
        },
      ]
    }
  ]
};