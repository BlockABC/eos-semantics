module.exports = {
    'newaccount': {
      'en': {
        'actionName': 'Create Account',
        'template': '<Account :to="creator"/> created new account <Account :to="name"/>'
      },
      'zh': {
        'actionName': '创建账户',
        'template': '<Account :to="creator"/> 创建了账户 <Account :to="name"/>'
      }
    },
    'buyrambytes': {
      'en': {
        'actionName': 'Buy RAM',
        'template': '<Account :to="payer"/> bought {{bytes}} bytes RAM for <Account :to="receiver"/>'
      },
      'zh': {
        'actionName': '购买内存',
        'template': '<Account :to="payer"/> 为 <Account :to="receiver"/> 购买了 {{bytes}} bytes内存'
      }
    },
    'buyram': {
      'en': {
        'actionName': 'Buy RAM',
        'template': '<Account :to="payer"/> bought {{quant}} RAM for <Account :to="receiver"/>'
      },
      'zh': {
        'actionName': '购买内存',
        'template': '<Account :to="payer"/> 为 <Account :to="receiver"/> 购买了价值 {{quant}} 的内存'
      }
    },
    'sellram': {
      'en': {
        'actionName': 'Sell RAM',
        'template': '<Account :to="account" /> sold <Quantity :num="bytes"/> bytes RAM'
      },
      'zh': {
        'actionName': '卖出内存',
        'template': '<Account :to="account" /> 卖出了 <Quantity :num="bytes"/> bytes的内存'
      }
    },
    'delegatebw': {
      'en': {
        'actionName': 'Stake Resource',
        'template': `
          <If :condition="transfer"><Account :to="from"/> delegated for <Account :to="receiver"/> {{stake_net_quantity}} in Net and {{stake_cpu_quantity}} in CPU, with EOS transferred.</If>
          <If :not="transfer"><Account :to="from"/> delegated for <Account :to="receiver"/> {{stake_net_quantity}} in Net and {{stake_cpu_quantity}} in CPU, without EOS transferred.</If>
        `
      },
      'zh': {
        'actionName': '抵押资源',
        'template': `
          <If :condition="transfer"><Account :to="from"/> 为 <Account :to="receiver"/> 抵押了价值 {{stake_net_quantity}} 的带宽和价值 {{stake_cpu_quantity}} 的CPU，并转移了EOS</If>
          <If :not="transfer"><Account :to="from"/> 为 <Account :to="receiver"/> 抵押了价值 {{stake_net_quantity}} 的带宽和价值 {{stake_cpu_quantity}} 的CPU，未转移EOS</If>
        `
      }
    },
    'undelegatebw': {
      'en': {
        'actionName': 'Unstake Resource',
        'template': '<Account :to="from" /> unstaked from the account <Account :to="receiver" /> {{unstake_net_quantity}} for Net and {{unstake_cpu_quantity}} for CPU'
      },
      'zh': {
        'actionName': '赎回资源',
        'template': '<Account :to="from" /> 赎回了之前为 <Account :to="receiver" /> 抵押的价值 {{unstake_net_quantity}} 的带宽和价值 {{unstake_cpu_quantity}} 的CPU'
      }
    },
    'setcode': {
      'en': {
        'actionName': 'Deploy Contract',
        'template': 'Contract code deployed to <Contract :to="account" />'
      },
      'zh': {
        'actionName': '部署智能合约',
        'template': '<Contract :to="account" /> 部署了一个智能合约'
      }
    },
    'setabi': {
      'en': {
        'actionName': 'Deploy Contract',
        'template': ' Contract ABI deployed to <Contract :to="account" />'
      },
      'zh': {
        'actionName': '部署智能合约',
        'template': '<Contract :to="account" /> 部署了一个智能合约的ABI接口'
      }
    },
    'updateauth': {
      'en': {
        'actionName': 'Update Auth',
        'template': '<Account :to="account" /> updated permission group {{permission}} <Highlight :json="auth"/>'
      },
      'zh': {
        'actionName': '修改权限',
        'template': '<Account :to="account" /> 将其 {{permission}} 权限更新为 <Highlight :json="auth"/>'
      }
    },
    'regproducer': {
      'en': {
        'actionName': 'Register Producer',
        'template': '<Account :to="producer" /> updated BP info, with <Highlight :json="action.data"/>'
      },
      'zh': {
        'actionName': '更新节点信息',
        'template': '<Account :to="producer" /> 更新了节点信息 <Highlight :json="action.data"/>'
      }
    },
    'unregprod': {
      'en': {
        'actionName': 'Unregister Producer',
        'template': '<Account :to="producer" /> unregistered Producer'
      },
      'zh': {
        'actionName': '注销节点',
        'template': '<Account :to="producer" /> 注销了其节点身份'
      }
    },
    'regproxy': {
      'en': {
        'actionName': 'Register Proxy',
        'template': `
          <If :condition="isproxy"><Account :to="proxy" /> registered as a proxy</If>
          <If :not="isproxy"><Account :to="proxy" /> unregistered as a proxy</If>
        `
      },
      'zh': {
        'actionName': '注册代理',
        'template': `
          <If :condition="isproxy"><Account :to="proxy" /> 注册了代理身份</If>
          <If :not="isproxy"><Account :to="proxy" /> 注销了代理身份</If>
        `
      }
    },
    'bidname': {
      'en': {
        'actionName': 'Account Bids',
        'template': '<Account :to="bidder" /> bid {{bid}} for the name <Account :to="newname"/>'
      },
      'zh': {
        'actionName': '竞拍账户',
        'template': '<Account :to="bidder" /> 以 {{bid}} 的价格竞拍账号 <Account :to="newname"/>'
      }
    },
    'voteproducer': {
      'en': {
        'actionName': 'Vote',
        'template': `
          <If :condition="proxy"><Account :to="voter" /> delegate the votes to <Account :to="proxy" /></If>
          <If :not="proxy"><Account :to="voter" /> voted to <Accounts :accounts="producers"/></If>
        `
      },
      'zh': {
        'actionName': '投票',
        'template': `
          <If :condition="proxy"><Account :to="voter" /> 将票委托给了代理 <Account :to="proxy" /></If>
          <If :not="proxy"><Account :to="voter" /> 投票给了 <Accounts :accounts="producers"/></If>
        `
      }
    },
    'claimrewards': {
      'en': {
        'actionName': 'Claim Rewards',
        'template': '<Account :to="owner"/> claimed rewards'
      },
      'zh': {
        'actionName': '申领奖励',
        'template': '<Account :to="owner"/> 申领了奖励'
      }
    },
    'linkauth': {
      'en': {
        'actionName': 'Link Auth',
        'template': "<Account :to=\"account\" />'s permission group {{requirement}} is authorized to access <ActionInterface :account=\"code\" :name=\"type\"/>"
      },
      'zh': {
        'actionName': '授权',
        'template': '<Account :to="account" /> 授权其 {{requirement}} 权限组可以访问 <ActionInterface :account="code" :name="type"/>'
      }
    },
    'unlinkauth': {
      'en': {
        'actionName': 'Unlink Auth',
        'template': "<Account :to=\"account\" />'s permission group prohibited to access contract <ActionInterface :account=\"code\" :name=\"type\"/>"
      },
      'zh': {
        'actionName': '取消授权',
        'template': '<Account :to="account" /> 取消了相关权限组访问 <ActionInterface :account="code" :name="type"/> 的权限'
      }
    }
  }