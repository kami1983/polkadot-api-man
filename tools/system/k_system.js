
var k_system = {
    options: {
        api: undefined
    },
    getApi() {
        if (this.options.api == undefined) {
            throw new Error("Api not set.")
        }
        return this.options.api;
    },
    async chain() {
        return await this.getApi().rpc.system.chain()
    },
    async getChainName() {
        let chain = await this.chain()
        return chain.toString()
    },
    async getStakingValidators() {
        return await this.getApi().query.staking.validators.keys();
    },
    async getHeader(){
        const lastHdr = await this.getApi().rpc.chain.getHeader();
        return lastHdr
    },
    async getHeaderHash() {
        const lastHdr = await this.getHeader();
        return lastHdr.hash
    },
    async getHaderParentHash() {
        const lastHdr = await this.getHeader();
        return lastHdr.parentHash
    },
    listenEvent(filter, call_back, other_trace = false) {
        this.getApi().query.system.events((events) => {
            // console.log(`\nReceived ${events.length} events:`);
            // Loop through the Vec<EventRecord>
            events.forEach((record) => {
                // Extract the phase, event and the event types
                const { event, phase } = record;
                const types = event.typeDef;
                if (other_trace ) {
                    console.log(`${event.section},${event.method}`)
                }
                filter.forEach((x)=>{
                    if (x.section == event.section) {
                        if(x.method == undefined ||
                            x.method == null ||
                            x.method == '' ||
                            x.method == event.method) {

                            let info = {}
                            info.session = event.section
                            info.method = event.method
                            info.phase = phase.toString()
                            info.data_list = []
                            // Show what we are busy with
                            // console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
                            // console.log(`\t\t${event.meta.documentation.toString()}`);
                            event.data.forEach((data, index) => {
                                let tmp = {}
                                tmp.type = types[index].type
                                tmp.data = data.toString()
                                info.data_list.push(tmp)
                                // console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
                            });

                            call_back(info)
                        }
                    }
                })
            });
        });
    }
}

export { k_system }
