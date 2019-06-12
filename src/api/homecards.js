
export default class homecards {

    static instance = null;

    static getInstance () {

        if(!this.instance)
            this.instance = new homecards();

        return this.instance;
    }

    async getHomecards () {

        try {

            let data = await fetch('/api/homecards');
            return data;
        } catch (error) {

            throw new Error("ERROR: "+error);
        }
    }
}