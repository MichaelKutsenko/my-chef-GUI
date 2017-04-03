export class Chef {
    public pricePerHour: number;
    public minPrice: number;
    public description: string;

    constructor(pricePerHour, minPrice, description){
        this.pricePerHour = pricePerHour;
        this.minPrice = minPrice;
        this.description = description;
    }
}
