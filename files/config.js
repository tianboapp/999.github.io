line = {
    hth : '0055980',    // 华体会
    leyu: '4985798',    // 乐鱼
    ayx : '0509606',    // 爱游戏
    ky  : '',    // 开云
}

var link = {
    hthPc   : 'http://www.7kgmg.com/register/?i_code=' + line.hth,  // HTH pc 链接
    hthH5   : 'http://www.7m5nc.com/entry/register/?i_code=' + line.hth,  // HTH h5 链接 
    hthApp  : 'https://www.razork.com:9663/?i_code=' + line.hth,   // HTH app 链接
    leyuPc  : 'https://www.pxsrhp.com:8005/register/?i_code=' + line.leyu,  // leyu pc 链接
    leyuH5  : 'https://www.8nh1j.com:6001/entry/register/?i_code=' + line.leyu,  // leyu h5 链接 
    leyuApp : 'https://www.crpqxf.com:9174/?i_code=' + line.leyu,   // leyu app 链接
    ayxPc   : 'http://www.3frvz.com/register/?i_code=' + line.ayx,  // AYX pc 链接
    ayxH5   : 'http://www.3if2g.com/entry/register/?i_code=' + line.ayx,  // AYX h5 链接 
    ayxApp  : 'http://www.3m5f0.com/?i_code=' + line.ayx,   // AYX app 链接
    kyPc    : 'https://www.oswkxq.com:9960/register/?i_code=' + line.ky,  // KY pc 链接
    kyH5    : 'https://www.06ot6.com:8553/entry/register/?i_code=' + line.ky,  // KY h5 链接 
    kyApp   : 'https://www.kgfvfp.com:9962/?i_code=' + line.ky,   // KY app 链接
}

function register(key) {
    window.open (link[key]);
}