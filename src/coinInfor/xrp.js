export default {
  name: 'XRP',
  toggled: true,
  children: [
    {
      name: 'description',
      children: [
        { name: 'Ripple positions itself as a complement to, rather than a competitor with, Bitcoin - the site has a page dedicated to Ripple for bitcoiners. Ripple is a distributed network which means transactions occur immediately across the network - and as it is peer to peer - the network is resilient to systemic risk. Ripples arent mined - unlike bitcoin and its peers - but each transaction destroys a small amount of XRP which adds a deflationary measure into the system. There are 100 billion XRP at present.' },
      ]
    },
    {
      name: 'features',
      children: [
        {
          name: 'Math-Based Currency',
          children: [
            { name: 'A math-based currency, also referred to as a cryptocurrency, is a digital asset with verifiable mathematical properties, similar to how we can reliably verify gold as a substance made of atoms with 79 protons. Math-based currencies exist as digital assets in their own right and can be transferred directly between users (as fiat cash can be) without relying on a centralized protocol operator. XRP exists as a math-based currency on the Ripple protocol.' }
          ]
        },
        {
          name: 'Abuse Protection',
          children: [
            { name: 'The primary function of XRP is to protect the Ripple protocol against denial-of-service (DoS) spam attacks. Since the Ripple protocol is based around a shared ledger of accounts, a malicious attacker could create large amounts of “ledger spam” (such as fake accounts) and “transaction spam” (such as fake transactions) in an attempt to overload the protocol. This could cause the size of the ledger to become unmanageable and interfere with the protocol’s ability to quickly settle legitimate transactions.' }
          ]
        },
        {
          name: 'Bridge Currency',
          children: [
            { name: 'XRP has great value as a bridge currency. Because each gateway’s balances trade as distinct assets within Ripple, the number of potential currency pairings can become quite large. Instead of quoting every possible currency/gateway combination, XRP can serve as a useful bridge currency to enable these transfers. This is possible because if every currency is liquid to XRP, then every currency is liquid to every other currency:' }
          ]
        },
      ]
    }
  ]
};