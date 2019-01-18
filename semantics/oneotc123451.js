module.exports = {
      "addblacklist": {
        "en": {
          "actionName": "Add Blacklist",
          "template": "Add user <Account :to='eosname'/> to blacklist"
        },
        "zh": {
          "actionName": "添加黑名单",
          "template": "用户<Account :to='eosname'/> 加入黑名单"
        }
      },
      "deleteblack": {
        "en": {
          "actionName": "Delete Blacklist",
          "template": "Remove user <Account :to='eosname'/> from blacklist"
        },
        "zh": {
          "actionName": "移出黑名单",
          "template": "用户<Account :to='eosname'/> 移出黑名单"
        }
      },
      "adminbiz": {
        "en": {
          "actionName": "Admin Biz",
          "template": "Administrator change merchant name is {{eosname}} status to {{status}}"
        },
        "zh": {
          "actionName": "管理商家",
          "template": "管理员将商家{{eosname}}营业状态修改为{{status}}"
        }
      },
      "bizapply": {
        "en": {
          "actionName": "Biz Apply",
          "template": "User <Account :to='eosname'/> apply to become a merchant, method is:{{method}}, information:{{info}}, description is {{desc}} and introduce is {{introduce}}"
        },
        "zh": {
          "actionName": "商家申请",
          "template": "用户<Account :to='eosname'/> 申请成为商家, 联系方式是:{{method}}, 商家信息:{{info}}, 商家描述：{{desc}} 商家介绍：{{introduce}}"
        }
      },
      "bizask": {
        "en": {
          "actionName": "Biz Ask",
          "template": "Merchant <Account :to='bizmaker'/> ask <Token :quantity='quantity' :contract='contract'/> price is {{price}}, rate is {{rate}}, legal type is {{legaltype}} and source is {{source}} "
        },
        "zh": {
          "actionName": "商家卖出",
          "template": "商家 <Account :to='bizmaker'/> 卖出 <Token :quantity='quantity' :contract='contract'/> 价格{{price}}, 费率 {{rate}}, 法币类型 {{legaltype}} 以及订单来源 {{source}} "
        }
      },
      "bizbid": {
        "en": {
          "actionName": "Biz Bid",
          "template": "Merchant <Account :to='bizmaker'/> bid <Token :quantity='quantity' :contract='contract'/> price is {{price}}, rate is {{rate}}, legal type is {{legaltype}} and source is {{source}}"
        },
        "zh": {
          "actionName": "商家买入",
          "template": "商家 <Account :to='bizmaker'/> 买入 <Token :quantity='quantity' :contract='contract'/> 价格{{price}}, 费率 {{rate}}, 法币类型 {{legaltype}} 以及订单来源 {{source}}"
        }
      },
      "bizcancel": {
        "en": {
          "actionName": "Biz Cancel",
          "template": "Cancel order id is {{bizid}} source is {{source}}"
        },
        "zh": {
          "actionName": "取消订单",
          "template": "取消订单,订单id是 {{bizid}} 订单来源是 {{source}}"
        }
      },
      "bizconfirm": {
        "en": {
          "actionName": "Biz Confirm",
          "template": "Merchant confirm oporder, opid is {{opid}}, source is {{source}}"
        },
        "zh": {
          "actionName": "商家确认",
          "template": "商家确认订单, 订单id是{{opid}},订单来源是{{source}}"
        }
      },
      "editbizinfo": {
        "en": {
          "actionName": "Edit Bizinfo",
          "template": "Edit Merchant <Account :to='eosname'/> Info, method is:{{method}}, information:{{info}}, description is {{desc}} and introduce is {{introduce}}"
        },
        "zh": {
          "actionName": "编辑商家信息",
          "template": "编辑商家<Account :to='eosname'/> 信息, 联系方式是:{{method}}, 商家信息:{{info}}, 商家描述：{{desc}} 商家介绍：{{introduce}}"
        }
      },
      "claim": {
        "en": {
          "actionName": "Claim",
          "template": "<Account :to='eosname'/> claim the deposit"
        },
        "zh": {
          "actionName": "赎回",
          "template": "<Account :to='eosname'/> 赎回押金"
        }
      },
      "clientask": {
        "en": {
          "actionName": "Client Ask",
          "template": "<Account :to='clientmaker'/> ask <Token :quantity='quantity' :contract='contract'/> Merchant order id is:{{bizid}}, price is: {{price}}, legal type is {{legaltype}} and source is {{source}}"
        },
        "zh": {
          "actionName": "用户卖出",
          "template": "<Account :to='clientmaker'/> 卖出 <Token :quantity='quantity' :contract='contract'/> 商家订单号是:{{bizid}}, 价格是: {{price}}, 法币类型是 {{legaltype}} 订单来源是 {{source}}"
        }
      },
      "clientbid": {
        "en": {
          "actionName": "Client Bid",
          "template": "<Account :to='clientmaker'/> bid <Token :quantity='quantity' :contract='contract'/> Merchant order id is:{{bizid}}, price is: {{price}}, legal type is {{legaltype}} and source is {{source}}"
        },
        "zh": {
          "actionName": "用户买入",
          "template": "<Account :to='clientmaker'/> 买入 <Token :quantity='quantity' :contract='contract'/> 商家订单号是:{{bizid}}, 价格是: {{price}}, 法币类型是 {{legaltype}} 订单来源是 {{source}}"
        }
      },
      "clientcancel": {
        "en": {
          "actionName": "Client Cancel",
          "template": "User Cancel the order： id is {{opid}}, source is {{source}}, scope is {{scope}}, memo is {{memo}}"
        },
        "zh": {
          "actionName": "用户取消",
          "template": "用户取消订单：订单id{{opid}}, 订单来源 {{source}}, 订单域{{scope}}, 备注{{memo}}"
        }
      },
      "cltconfirm": {
        "en": {
          "actionName": "Clt Confirm",
          "template": "User confirm order: id is {{opid}}, source is {{source}}, scope is {{scope}}, memo is {{memo}}"
        },
        "zh": {
          "actionName": "用户确认",
          "template": "用户确认订单: 订单id{{opid}}, 订单来源 {{source}}, 订单域{{scope}}, 备注{{memo}}"
        }
      },
      "expireorder": {
        "en": {
          "actionName": "Expire Order",
          "template": "Administrator Check Expire Order, id is {{opid}}, scope is {{scope}} memo is {{memo}}"
        },
        "zh": {
          "actionName": "订单超时",
          "template": "管理员确认订单操超时, 订单id {{opid}}, 订单域{{scope}}, 备注{{memo}}"
        }
      },
      "releaseorder": {
        "en": {
          "actionName": "Release Order",
          "template": "Administrator Release Order, id is {{opid}}, scope is {{scope}} memo is {{memo}}"
        },
        "zh": {
          "actionName": "释放订单",
          "template": "管理员释放订单, 订单id {{opid}}, 订单域{{scope}}, 备注{{memo}}"
        }
      },
      "openorder": {
        "en": {
          "actionName": "Open Order",
          "template": "<Account :to='maker'/> open the order for <Token :quantity='quantity' :contract='contract'/> memo is: {{memo}}"
        },
        "zh": {
          "actionName": "打开订单",
          "template": "<Account :to='maker'/> 打开订单 <Token :quantity='quantity' :contract='contract'/> 备注: {{memo}}"
        }
      },
      "checkfreeze": {
        "en": {
          "actionName": "Check Freeze",
          "template": "Check if the order is frozen, id is {{opid}}, scope is {{scope}} source is {{source}} "
        },
        "zh": {
          "actionName": "检查冻结",
          "template": "检查订单是否冻结, 订单id {{opid}}, 订单域{{scope}}, 订单来源{{source}}"
        }
      }
}
