
export function isPrimitiveType(val){
    return typeof val !== 'object' || val === null;
}