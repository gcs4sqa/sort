class Sorter {
    

    constructor(public collection:number[] | string){}

    sort(): void{

        const { length } = this.collection;
    // all of this only works if collection is number[]
        // if collection is an array of numbers 
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length -i -1; j++){
             if (this.collection instanceof Array){ //this is a type guard for a non primative type
                if (this.collection[j] > this.collection[j +1]){
                 const leftHand = this.collection[j];
                 this.collection[j] = this.collection[j+1];
                 this.collection[j+1] = leftHand;
             }   
            }
            //if collection is a string, do this logic instead
            if(typeof this.collection === 'string'){ //this is a type guard from primative types

            }
        }
        }

        

    }
        
}


const sorter = new Sorter([10 , 3, -5, 0]);

sorter.sort();
console.log(sorter.collection);