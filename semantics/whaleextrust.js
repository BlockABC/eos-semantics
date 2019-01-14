module.exports = {
    'verifytrade': {
      'en': {
        'actionName': 'Trade',
        'template': "<div>Trade: </div><div><Account :to='buyer'/> bought <Token :amount='base_amount' :symbolValue='base.value' :contract='base.contract'/>, </div><div><Account :to='seller'/> sold <Token :amount='quote_amount' :symbolValue='quote.value' :contract='quote.contract'/></div>"
      },
      'zh': {
        'actionName': '成交',
        'template': "<div>成交: </div><div><Account :to='buyer'/> 买入 <Token :amount='base_amount' :symbolValue='base.value' :contract='base.contract'/>, </div><div><Account :to='seller'/> 卖出 <Token :amount='quote_amount' :symbolValue='quote.value' :contract='quote.contract'/> </div>"
      }
    },
    'verifytrade2': {
      'en': {
        'actionName': 'Trade',
        'template': "<div>Trade: </div><div><Account :to='buyer'/> bought <Token :amount='base_amount' :symbolValue='base.value' :contract='base.contract'/>, </div><div><Account :to='seller'/> sold <Token :amount='quote_amount' :symbolValue='quote.value' :contract='quote.contract'/></div>"
      },
      'zh': {
        'actionName': '成交',
        'template': "<div>成交: </div><div><Account :to='buyer'/> 买入 <Token :amount='base_amount' :symbolValue='base.value' :contract='base.contract'/>, </div><div><Account :to='seller'/> 卖出 <Token :amount='quote_amount' :symbolValue='quote.value' :contract='quote.contract'/> </div>"
      }
    },
    'verifyad': {
      'en': {
        'actionName': 'AirGrab',
        'template': "<Account :to='to'/> received <Token :quantity='asset.quantity' :contract='asset.contract'/> airdrop from <Account :to='from'/>"
      },
      'zh': {
        'actionName': '领取',
        'template': "<Account :to='to'/> 从 <Account :to='from'/> 领取 <Token :quantity='asset.quantity' :contract='asset.contract'/> 空投"
      }
    },
    'verifywd': {
      'en': {
        'actionName': 'Withdraw',
        'template': "<Account :to='user'/> withdrew <Token :amount='amount' :symbolValue='token.value' :contract='token.contract'/> to EOS account"
      },
      'zh': {
        'actionName': '提现',
        'template': "<Account :to='user'/> 从合约提现 <Token :amount='amount' :symbolValue='token.value' :contract='token.contract'/> 到个人EOS帐户"
      }
    },
    'verifywd2': {
      'en': {
        'actionName': 'Withdraw',
        'template': "<Account :to='user'/> withdrew <Token :amount='amount' :symbolValue='token.value' :contract='token.contract'/> to EOS account"
      },
      'zh': {
        'actionName': '提现',
        'template': "<Account :to='user'/> 从合约提现 <Token :amount='amount' :symbolValue='token.value' :contract='token.contract'/> 到个人EOS帐户"
      }
    },
    'verifystake': {
      'en': {
        'actionName': 'Stake',
        'template': "<Account :to='user'/> staked <Token :amount='amount' symbol='WAL' :decimals='3' contract='whaleextoken'/> for free transactions of equal value."
      },
      'zh': {
        'actionName': '锁定',
        'template': "<Account :to='user'/> 锁定 <Token :amount='amount' symbol='WAL' :decimals='3' contract='whaleextoken'/> 等值的免费交易额度"
      }
    },
    'bind': {
      'en': {
        'actionName': 'Bind',
        'template': "<Account :to='user'/> bound a pair of public/private keys. Public key is: {{pub_key}}"
      },
      'zh': {
        'actionName': '绑定',
        'template': "<Account :to='user'/> 绑定了一对公私钥, 公钥为 {{pub_key}}"
      }
    },
    'unbind': {
      'en': {
        'actionName': 'Unbind',
        'template': "<Account :to='user'/> unbound a pair of public/private keys. Public key is: {{pub_key}}"
      },
      'zh': {
        'actionName': '解绑',
        'template': "<Account :to='user'/> 解绑了一对公私钥, 公钥为 {{pub_key}}"
      }
    },
    'clearsettres': {
      'en': {
        'actionName': 'Clearing',
        'template': 'WhaleEx cleared useless data for memory. '
      },
      'zh': {
        'actionName': '清算',
        'template': 'WhaleEx清理了一些无用数据来释放内存'
      }
    },
    'clearing': {
      'en': {
        'actionName': 'Clearing',
        'template': 'WhaleEx completed trade clearing, awaiting settlement.'
      },
      'zh': {
        'actionName': '清算',
        'template': 'WhaleEx完成了一批交易的清算, 等待结算'
      }
    },
    'settlement': {
      'en': {
        'actionName': 'Settlement',
        'template': 'WhaleEx completed trade settlement. Assets have been exchanged.'
      },
      'zh': {
        'actionName': '结算',
        'template': 'WhaleEx完成了一批交易的结算, 资产完成转移'
      }
    }
  }
