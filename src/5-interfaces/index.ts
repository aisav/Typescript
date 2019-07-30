interface SizesInterface {
  sizes: string[]
}

interface Pizza extends SizesInterface{
  name: string,
      toppings ?: number,
      getAvailableSizes(): void,
      [key: number]: string,
      [key: string]: any
}

let pizza : Pizza

function createPizza(name: string, sizes: string[]) : Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes
    },
  }
}
