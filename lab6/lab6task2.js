const errors = [];
const compose = (...fns) => {
    const composed = (x) => {
        if(fns.length === 0) return x;
        
        for(let i = fns.length - 1; i >= 0; i--){
            try {
                x = fns[i](x);
                
            }
            catch(error)
            {
                errors.push(error);
                return undefined;
            }
            
        }
        return x;

    }
            composed.on = () => {
            for(const erro of errors){
                console.log(erro);
            }
        }
    return composed;
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = compose(inc, twice, cube);
const g = f(5);
console.log(g);