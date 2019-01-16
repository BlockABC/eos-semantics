module.exports = {
  "ask": {
    "en": {
      "actionName": "Ask",
      "template": "<Account :to='maker'/> with price of {{price}} ask <Token :quantity='quantity' :contract='ask_contract'/> source is:{{source}}, order id is:{{uuid}}"
    },
    "zh": {
      "actionName": "卖",
      "template": "<Account :to='maker'/>以价格{{price}} 卖出 <Token :quantity='quantity' :contract='ask_contract'/> 订单来源:{{source}}, 订单编号:{{uuid}}"
    }
  },
  "bid": {
    "en": {
      "actionName": "Bid",
      "template": "<Account :to='maker'/> bid <Token :quantity='quantity' :contract='bid_contract'/> source is:{{source}}, order id is:{{uuid}}"
    },
    "zh": {
      "actionName": "买",
      "template": "<Account :to='maker'/> 买入 <Token :quantity='quantity' :contract='bid_contract'/> 订单来源:{{source}}, 订单编号:{{uuid}}"
    }
  },
  "cancelorder": {
    "en": {
      "actionName": "Cancel Order",
      "template": "<Account :to='maker'/> cancel the order that Identity Number is: {{uuid}}, scope is {{scope}}"
    },
    "zh": {
      "actionName": "取消订单",
      "template": "<Account :to='maker'/> 取消订单id是{{uuid}}, 订单域是 {{scope}}"
    }
  },
  "createorder": {
    "en": {
      "actionName": "Create Order",
      "template": "<Account :to='maker'/> create order <Token :quantity='quantity' :contract='ccontract'/> source is:{{source}}, order id is:{{uuid}}, price is: {{price}}"
    },
    "zh": {
      "actionName": "打开订单",
      "template": "<Account :to='maker'/> 卖出 <Token :quantity='quantity' :contract='ccontract'/> 订单来源:{{source}}, 订单编号:{{uuid}}, 订单价格：{{price}}"
    }
  }
}
