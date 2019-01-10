module.exports = {
    'transfer': {
      'en': {
        'actionName': 'Token Transfer',
        'template': '<Transfer :from="from" :to="to" :quantity="quantity" :contract="action.account" :memo="memo"/>'
      },
      'zh': {
        'actionName': '代币转账',
        'template': '<Transfer :from="from" :to="to" :quantity="quantity" :contract="action.account" :memo="memo"/>'
      }
    },
    'issue': {
      'en': {
        'actionName': 'Token Issue',
        'template': 'System issued <Token :quantity="quantity" contract="eosio.token"/> to <Account :to="to" /> <Memo>{{memo}}</Memo>'
      },
      'zh': {
        'actionName': '代币增发',
        'template': '系统增发了 <Token :quantity="quantity" contract="eosio.token"/> 给 <Account :to="to" /> <Memo>{{memo}}</Memo>'
      }
    }
  }