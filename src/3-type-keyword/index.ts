type oType = {size: string}
let serialized = JSON.stringify(o)
let getSizeFromJson = (obj:string)=> {JSON.parse(obj) as oType}

type SizeTypes = 'small' | 'medium' | 'large'
let v: SizeTypes = 'large'
