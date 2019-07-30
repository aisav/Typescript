function orderError(
    a: number,
    b: string,
    c: boolean,
    d: null,
    e: undefined,
    f: any,
    g: number | string,
    h: 'valu1' | 'value2 | 777',
    i ? : number // optional
)
: never | void | any
{
  throw new Error("Something goes wrong")
}
