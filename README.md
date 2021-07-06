# lazyShow
滑动页面时，判断元素是否进入可视区域，如果进入则加上开发者自己定义的className，可以在这个className里写上动画

# 示例
![image](https://github.com/498381937/tianmd/blob/master/lazyShow.gif)

# 使用
``` javascript
    import lazyShow from '@tianmingda/lazyshow';


    let options = [
        {el:document.querySelector('.pv'),activeClass:'fadeIn',offset:0},
        {el:document.querySelector('.slogan'),activeClass:'fadeIn',offset:0},
        {el:document.querySelector('.pcr-theme .exchange'),activeClass:'bounceInRight',offset:-30},
        {el:document.querySelector('.title-news'),activeClass:'fadeIn',offset:150}
    ];
    new lazyShow(options);
```
el是元素对象，activeClass是进入可视区域后加入的类名，offset是偏移量，即距离进入可视区域偏移多少。
