# EOS-Semantics
> Makes your EOS contracts action data understandable, by human.

![EOSPark screenshot](./assets/eospark-screenshot.png)

## Why
It's hard for the average user to understand what is going on the chain due to the complexity.

Dapp developers are also often questioned by users about the meaning of the data on the chain.


The emergence of EOS Semantics can make common users understand contract data and lower the threshold for common users to participate, thus improving the activity of Dapp.

[EOSPark](https://eospark.com) was the first EOS explorer to come up with and implement contract semantics.

At first, it was only applied to system contract and won wide praise from users. We are now opening up its semantic capabilities to further serve the vast majority of contract developers.

## How
The basic principle of EOS Semantics is similar to the [Ricardian Contract](http://iang.org/papers/ricardian_contract.html), which renders the data of a contract action into a human-readable natural language through a template.

In addition, EOS Semantics provides more powerful functions, such as account/contract link, code highlighting, multi-language and so on.

Take EOS system contract eosio.token as example, it's contract action data is below:
```json
{
  "data": {
    "quantity": "1.0000 EOS",
    "to": "supereospark",
    "memo": "Good job EOS Semantics"
  }
}
```

The correspond needed semantic info is below:
```json
{
    "issue": {
        "actionName": "Issue Token",
        "template": "System issued <Token :quantity="quantity" contract="eosio.token"/> to <Account :to="to" /> <Memo>{{memo}}</Memo>"
    }
}
```

It will be finally rendered as below:

![eosio.token::issue](./assets/eosio.token-issue.png)


## Contribution
1. Clone
```
git clone https://github.com/BlockABC/eos-semantics
cd eos-semantics
```

2. Add semantics info

    2.1 Test your template info in [Playground](https://eospark.com/semantic/playground)

    2.2 Create new `.js` file under `/semantics` directory named by contract's account name, and add semantic info.
    > For detailed semantic info see [DOC](https://github.com/BlockABC/eos-semantics#%E6%96%87%E6%A1%A3) below，or refer to existing contract semantic info [eosio](https://github.com/BlockABC/eos-semantics/blob/master/semantics/eosio.js)

    2.3 Compile
    ```
    npm run build
    ```
3. Submit PR


## Doc
#### actionName

Readable action name

#### tempalte

`template` is a html template, taking a form like [Vue](https://vuejs.org) template syntax. It would be easy for you if you are familiar with Web Development.

One thing to be aware of, the syntax of template is a subset of Vue's template syntax for security.

## Builtin Template Component
EOS Semantics also has some builtin components to make it easier for you and we can then unify UI style.

#### If
`If` component will render different component based on condition.

```html
<If :condition="true">Component on true</If>
```

#### Link
`Link` will render an `a` tag.
```html
<Link :to="url">Some Web Page</Link>
```

#### Accounts
`Accounts` will receive accounts array as prop, and render a accounts list.
```html
<Accounts :accounts="accounts" />
```

#### Account
`Account` will render an 'a' tag, click which will redirect to correspond account page.
```html
<Account :to="account" />
```

#### Contract
`Contract` will ren
`Contract` will render an 'a' tag, click which will redirect to correspond contract page.
```html
<Contract :to="account" />
```

#### Transfer
`Transfer` will render transfer UI
```html
<Transfer :from="from" :to="to" :quantity="quantity" :contract="action.account" :memo="memo"/>
```

#### Memo
`Memo` will render memo ( Commonly used in transfer. ).
```html
<Memo>{{memo}}</Memo>
```

#### Token
`Token` will render a Token, support multiple token format.

```html
<!-- Only Token name (and contract) will be rendered -->
<Token :symbol="symbol" contract="eosio.token"/>

<!-- Token with amount -->
<Token :symbol="symbol" contract="eosio.token" :amount="123.456"/>

<!-- Sometimes you need to specify token's decimals -->
<Token :symbol="symbol" contract="eosio.token" :amount="amount" :decimals="4"/>

<!-- It can also receive what format is in EOS -->
<Token symbolValue="47575848338" quantity="123.4567 EOS"/>
```

#### Highlight
`Highlight` will render a highlighted json
```html
<Highlight :json="auth"/>
```

#### Quantity
`Quantity` will render a comma-separated number.
```html
<Quantity :num="num"/>
```


#### ActionInterface
`ActionInterface` will render an action name.
```html
<ActionInterface :account="code" :name="type"/>
```


## Contact
For more information, please join us on telegram: [EOSPark Telegram](https://t.me/eospark)

