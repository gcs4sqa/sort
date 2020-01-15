export class Sorter {
    

    constructor(public collection: /*todo fix me*/){}

    sort(): void{

        const { length } = this.collection;
   
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length -i -1; j++){
            
                if (this.collection[j] > this.collection[j +1]){
                 const leftHand = this.collection[j];
                 this.collection[j] = this.collection[j+1];
                 this.collection[j+1] = leftHand;
             }   
            
            //if collection is a string, do this logic instead
            if(typeof this.collection === 'string'){ //this is a type guard from primative types

            }
        }
        }

        

    }
}
        
