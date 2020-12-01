import router from '../src/router'

/**
 * 跳转链接
 */
class JumpLink 
{
    constructor(name) {
        this.name = name;
    }

    /**
     * 跳转页面 Param
     */
    jumpByParams(params) {
        router.push({
            name : this.name,
            params : params
        });
    }

    /**
     * 跳转页面Query
     */
    jumpByQuery(params) {
        router.push({
            name : this.name,
            query : params
        });
    }

    set(name) {
        this.name = name;
    }

    static getInstance(name) {
        if (!JumpLink.intance) {
            JumpLink.intance = new JumpLink(name);
            
        } else {
            JumpLink.intance.set(name);
        }

        return JumpLink.intance;
    }
}
export default JumpLink