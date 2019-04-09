module.exports = {
    'startpos': {
      'en': {
        'actionName': 'Start Proof of Stake',
        'template': "<div>Issuer Start the Proof of Stake Mining for <Token :symbol='base_token.split(' ')[1]' contract='higoldtokens'/></div><div>Connector Weight: CW={{weight.slice(0,-18)}}/1000</div><div>Base Stake Supply: R={{base_stake.slice(0,-4)}} Stake</div><div>Base Connector Balance: C={{base_token}}</div><div>Base Stake Price = C÷R÷CW</div><Memo>{{memo}}</Memo>"
      },
      'zh': {
        'actionName': '启动Proof of Stake挖矿',
        'template': '<div>发行人启动{{base_token.slice(-4)}} token 的 Proof of Stake 挖矿</div><div>Connector Weight: CW={{weight.slice(0,-18)}}/1000</div><div>Base Stake Supply: R={{base_stake.slice(0,-4)}} Stake</div><div>Base Connector Balance: C={{base_token}}</div><div>Base Stake Price = C÷R÷CW</div><Memo>{{memo}}</Memo>'
      }
    },
    'pos': {
      'en': {
        'actionName': 'PoS Mining',
        'template': "<Account :to='owner'/> Proof of Stake for <Token :symbol='symbol.split(\",\")[1]' contract='higoldtokens'/>"
      },
      'zh': {
        'actionName': 'Pos挖矿',
        'template': "<Account :to='owner'/> 进行了 <Token :symbol='symbol.split(\",\")[1]' contract='higoldtokens'/> Proof of Stake 挖矿"
      }
    },
    'stake': {
      'en': {
        'actionName': 'Stake',
        'template': "<Account :to='owner'/> Staked <Token :quantity='quantity' contract='higoldtokens'/>"
      },
      'zh': {
        'actionName': '购买Share',
        'template': "<Account :to='owner'/> 购买了价值 <Token :quantity='quantity' contract='higoldtokens'/> 的 Share"
      }
    },
    'unstake': {
      'en': {
        'actionName': 'Unstake',
        'template': "<Account :to='owner'/> Unstake {{stake.split(' ')[0]}} Share in <Token :symbol='stake.slice(-3)' contract='higoldtokens'/>"
      },
      'zh': {
        'actionName': '出售Share',
        'template': "<Account :to='owner'/> 出售 {{stake.split(' ')[0]}} Share 并获取 <Token :symbol='stake.slice(-3)' contract='higoldtokens'/>"
      }
    },
  }
