import { getcategory, getdetails } from "network/gethome.js"

export const usersinfo = {
    data() {
        return {
            hometab: {},
            firsttab: {},
            show: false,
        }
    },

    created() {
        this.gethome();
    },

    methods: {
        async gethome() {
            const res = await getcategory();
            //console.log(res);
            this.changedata(res);
            //console.log(typeof(this.current))
        },
        changedata(val) {
            const category = val.map((item, index) => {
                item.list = [];
                item.page = -1;
                item.loading = false;
                item.finished = false;
                return item;
            });
            this.hometab = category;
            for (let i in this.hometab) {
                this.getdetail(i);
                this.firsttab[i] = {};
                this.firsttab[i].list = [];
                this.firsttab[i].swipeshow = true;
            }
            //console.log(this.firsttab)
        },
        async getdetail(id) {
            const page = this.hometab[id].page + 1;
            const res = await getdetails(this.hometab[id]._id, {
                page,
                pagesize: 10,
            });
            //console.log(res);
            this.hometab[id].list.push(...res);
            this.hometab[id].page += 1;
            this.hometab[id].loading = false;
            if (res.length < 10) {
                this.hometab[id].finished = true;
            }
            this.show = true;
            //console.log(this.hometab)
        },
        async unshiftdetail(id) {
            const page = this.hometab[id].page + 1;
            const res = await getdetails(this.hometab[id]._id, {
                page,
                pagesize: 10,
            });
            this.hometab[id].list.unshift(...this.firsttab[id].list);
            this.firsttab[id].list = res;
            this.hometab[id].page += 1;
            this.hometab[id].loading = false;
            if (res.length < 10) {
                this.hometab[id].finished = true;
            }
            this.show = true;
            //console.log(this.hometab[id].list)
        },
    }
}

export const usersdata = {
    data() {
        return {
            hometab: {},
            show: false,
        }
    },

    created() {
        this.gethome();
    },

    methods: {
        async gethome() {
            const res = await getcategory();
            //console.log(res)
            this.changedata(res);
            //console.log(typeof(this.current))
        },
        changedata(val) {
            const category = val.map((item, index) => {
                item.list = [];
                item.page = -1;
                item.loading = false;
                item.finished = false;
                return item;
            });
            this.hometab = category;
            for (let i = 0; i < this.numsize; i++) {
                this.getdetail(i);
            }
        },
        async getdetail(id) {
            const page = this.hometab[id].page + 1;
            const res = await getdetails(this.hometab[id]._id, { page, pagesize: this.pagesize });
            if (res.length < this.pagesize) {
                this.hometab[id].finished = true;
                return
            }
            this.hometab[id].list.push(...res);
            this.hometab[id].page += 1;
            this.hometab[id].loading = false;
            this.show = true;
            //console.log(this.hometab)
        },
    }
}