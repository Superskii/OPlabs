'use strict';

function ipv(ip = '127.0.0.1'){
    const ips = ip.split('.');
    ips.forEach(str);
    ips[0] = ips[0] << 24;
    ips[1] = ips[1] << 16;
    ips[2] = ips[2] << 8;
    let summa = ips.reduce(sum);
    function str(value){
        value = value.toString();
    }
    function sum(total, value) {
        return total + value;
    }
    return summa;
}


console.log(ipv("10.0.0.1"));
console.log(ipv('127.0.0.1'));
console.log(ipv("8.8.8.8"));
console.log(ipv("165.225.133.150"));