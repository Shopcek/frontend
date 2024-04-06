export function Wrapper({parent, children}: any){
    return (...args: any)=>{
        return parent({children: children(args)})
    }
}