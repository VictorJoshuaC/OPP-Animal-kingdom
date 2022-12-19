 
class AnimalKingdom {
    constructor(name,type, blooded, backbone) {
        this.name = name;
        this.type = type;
        this.blooded = blooded;
        this.backbone = backbone;
    }
    
    // encapsulation
    setType(newType) {
        this.type = newType;
    }
    
    getType() {
        return this.type;
    }


    
    // inheritance
    static createFish(type,  blooded, backbone) {
        return new AnimalKingdom("fish",type,  blooded, backbone);
    }

    static createAmphibia(type,  blooded, backbone) {
        return new AnimalKingdom("toad",type,  blooded, backbone);
    }

    static createReptile(type,  blooded, backbone) {
        return new AnimalKingdom("lizard",type,  blooded, backbone);
    }

    static createAves(type,  blooded, backbone) {
        return new AnimalKingdom("eagle",type,  blooded, backbone);
    }

    static createMammal(type,  blooded, backbone) {
        return new AnimalKingdom("lion",type,  blooded, backbone);
    }
    



    // polymorphism
    move() {
        if (this.type === "Aves") {
            return "I fly";
        } else if (this.type === "Reptile") {
            return "I crawl";
        } else if (this.type === "Arthropods") {
            return "i hav  flexibility";
        } else if (this.type === "Fish") {
            return "I swim";
        
        } else if (this.type === "Amphibia") {
            return "i move and jump";
        
        } else if (this.type === "Mammal") {
            return "I walk";
        
        } else {
            return "I move in a  way";
        }
    }
    
    // abstraction
    toString() {
        return `Name: ${this.name} \n Type: ${this.type} \n ${this.blooded}-Blooded \n Backbone: ${this.backbone} `;
    }
}
    
    const arthropods = new AnimalKingdom("spider", "Arthropods", "warm","false");
    console.log(arthropods.toString()); 
    console.log(arthropods.move(), "\n\n"); 

    
    const fish = AnimalKingdom.createFish("Fish", "cold","True");
    console.log(fish.toString()); 
    console.log(fish.move(), "\n\n"); 


    const amphibia = AnimalKingdom.createAmphibia("Amphibia", "cold","True");
    console.log(amphibia.toString()); 
    console.log(amphibia.move() , "\n\n"); 

    const reptile = AnimalKingdom.createReptile("Reptile", "cold","True");
    console.log(reptile.toString()); 
    console.log(reptile.move(), "\n\n"); 

    const aves = AnimalKingdom. createAves("Aves", "warm","True");
    console.log(aves.toString()); 
    console.log(aves.move(), "\n\n"); 

    const mammal = AnimalKingdom.createMammal("Mammal", "warm","True");
    console.log(mammal.toString()); 
    console.log(mammal.move()); 
