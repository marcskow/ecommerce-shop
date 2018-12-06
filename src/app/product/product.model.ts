export class Product {
    constructor(
        readonly name: string,
        readonly amount: number,
        readonly description: string,
        readonly price: number,
        readonly avatar: string,
        readonly provider: string,
        readonly memory: number,
        readonly dualsim: boolean,
        readonly os: string,
        readonly externalMemory: boolean,
        readonly screen: number,
        readonly ram: number) {}
}