
var k_balance = {
    options: {
        api: undefined
    },
    getApi() {
        if (this.options.api == undefined) {
            throw new Error("Api not set.")
        }
        return this.options.api;
    },
    async balance(address) {
        const { _nonce, data: balance } = await this.getApi().query.system.account(address);
        return balance;
    },
    async listenBalance(address_list, call_back) {
        const unsub = await this.getApi().query.system.account.multi(address_list, (balances) => {
            let balance_list = []
            for (const x in balances ){
                balance_list.push(balances[x].data)
            }
            call_back(balance_list)
        });
        return unsub
    }
}

export { k_balance }
