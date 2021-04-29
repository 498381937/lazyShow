class LazyShow {
    constructor(options) {
        if(options && options.length > 0){
            let optionArray = [...options] || [];
            this.domCollection = optionArray.map((obj) => {
                if(obj.el && obj.el.style){
                    obj.el.style.opacity = 0;
                }
                return {
                    el:obj.el,
                    activeClass:obj.activeClass || 'lazyShow-active',
                    offset:obj.offset || 0,
                    loaded:false
                }
            });
            this.init();
        }
    }
    init(){
        this.bindFunc = this.showFunc.bind(this);
        window.addEventListener('load',this.bindFunc);
        window.addEventListener('scroll',throttle(this.bindFunc,200,400));
    }
    showFunc(){
        let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let noLoadDom = this.domCollection.filter((obj) => {
            return obj.el && obj.loaded === false;
        });
        if(noLoadDom.length === 0){
            //所有Dom都过渡完成，去掉scroll事件
            window.removeEventListener('scroll',this.bindFunc);
        }
        for(let obj of noLoadDom){
            let {top,bottom} = obj.el.getBoundingClientRect();
            if((top> 0 && top < clientHeight - obj.offset) || (bottom > 0 && bottom < clientHeight - obj.offset)){
                obj.el.classList.add(obj.activeClass);
                obj.loaded = true;
            }
        }
    }
}
function throttle(func, wait, mustRun) {
    var timeout,
        startTime = new Date();
    return function() {
        var curTime = new Date();
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
            func();
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(func, wait);
        }
    };
}
export default LazyShow;