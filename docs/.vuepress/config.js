module.exports = {
    title: 'Secret Network',
    description: 'Privacy is a Public Good',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
      ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Home', link: 'https://scrt.network' },
            { text: 'Blog', link: 'https://blog.scrt.network' },
            { text: 'Chat', link: 'https://chat.scrt.network' },
            { text: 'Forum', link: 'https://forum.scrt.network' },
            { text: 'Twitter', link: 'https://twitter.com/SecretNetwork' },
            { text: 'Wiki', link: 'https://learn.scrt.network' }
          ],
        sidebar: [
            {
                title: 'Introduction',   // required
                path: '/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: true, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                  {
                    title : 'Overview',
                    path: '/overview'
                  },
                  {
                    title : 'Network Architecture',
                    path: '/protocol/architecture'
                  },
                  {
                    title : 'Development Roadmap',
                    path: '/protocol/roadmap'
                  },
                  {
                    title : 'Using SCRT with Ledger (CLI)',
                    path: '/ledger-nano-s',
                  }
                ]
            },
            {
                title: 'Developers',   // required
                path: '/dev/developers',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: true, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                  {
                    title : 'Secret Contracts',
                    path: '/dev/SecretContract/overview-guide',
                    sidebarDepth: 1, 
                    children :[
                      {
                        title: 'Local Environment',
                        path: '/dev/SecretContract/local-dev-testnet'
                      },
                      {
                        title: 'Project Structure',
                        path: '/dev/SecretContract/project-structure-guide'
                      },
                      {
                        title: 'Initiating Contracts',
                        path: '/dev/SecretContract/initiate-contract'
                      },
                      {
                        title: 'Deploying Contracts',
                        path: '/dev/SecretContract/deploy-contract'
                      },
                      {
                        title: 'Query Contracts',
                        //path: '/dev/SecretContract/project-structure-guide'
                      },
                      {
                        title: 'Testing Contracts',
                        path: '/dev/SecretContract/unit-test-guide'
                      }
                    ]
                  },
                  {
                    title: 'SecretJS',
                    //path: '/dev/secret-js'
                  },
                  {
                    title: 'Resources',
                    path : '/dev/resources.md'
                  }
                ]
            },
            {
                title: 'Node Operators', // requireds
                collapsable: true, // optional, defaults to true
                sidebarDepth: 1, // optional, defaults to 1
                children: [
                  {
                    title : 'Secret Light Client',
                    path: '/validators-and-full-nodes/secretcli',
                    sidebarDepth: 1,
                  },
                  {
                    title : 'Validators',
                    path: '/validators-and-full-nodes/secret-nodes',
                    sidebarDepth: 1,
                    children : [
                      {
                        title: 'Setup SGX',
                        path: '/validators-and-full-nodes/setup-sgx'
                      },
                      {
                        title: 'Run a Full Node',
                        path: '/validators-and-full-nodes/run-full-node-mainnet'
                      },
                      {
                        title: 'Join as a Validator',
                        path: '/validators-and-full-nodes/join-validator-mainnet'
                      },
                      {
                        title: 'Backup a Validator',
                        path: '/validators-and-full-nodes/backup-a-validator'
                      },
                      {
                        title: 'Migrate a Validator',
                        path: '/validators-and-full-nodes/migrate-a-validator'
                      },
                      {
                        title: 'Sentry Nodes',
                        path: '/validators-and-full-nodes/sentry-nodes'
                      },
                      {
                        title: 'Active Node Peers',
                        //path: '/validators-and-full-nodes/active-node-peers'
                      }
                    ]
                  },
                  {
                    title : 'Delegators',
                    path: '/validators-and-full-nodes/delegating-mainnet'
                  }
                ]
            },
            {
              title : 'Testnet',
              sidebarDepth: 1,
              children : [
                {
                  title : 'Validators (CLI)',
                  sidebarDepth: 0,
                  path: '',
                  children : [
                    {
                      title: 'Setup SGX',
                      //path: '/testnet/setup-sgx'
                    },
                    {
                      title: 'Verify SGX',
                      path: '/testnet/verify-sgx'
                    },
                    {
                      title: 'Run a Full Node',
                      path: '/testnet/run-full-node-testnet'
                    },
                    {
                      title: 'Run a Full Node Docker',
                      path: '/testnet/run-full-node-docker'
                    },
                    {
                      title: 'Join as a Validator',
                      //path: '/validators-and-full-nodes/join-validator-mainnet'
                    },
                    {
                      title: 'Backup a Validator',
                      //path: '/validators-and-full-nodes/backup-a-validator'
                    },
                    {
                      title: 'Migrate a Validator',
                      //path: '/validators-and-full-nodes/migrate-a-validator'
                    }
                  ]
                },
                {
                  title: 'Delegators (CLI)'
                }
              ]
            },
            {
                title: 'Protocol',   // required
                path: '/protocol/intro',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: true, // optional, defaults to true
                sidebarDepth: 0,    // optional, defaults to 1
                children: [
                  '/protocol/components',
                  '/protocol/encryption-specs',
                  '/protocol/transactions',
                  '/protocol/governance',
                  '/protocol/sgx'
                ]
            },
            {
              title: 'Secret Wiki',
              path : 'https://learn.scrt.network/'

            }
          ]
      }
  }