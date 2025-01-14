class Bok{
    #title;
    #author;
    #pageCount;
    constructor(title, author, pageCount){
        this.#title=title;
        this.#author=author;
        this.#pageCount=pageCount;
    }
    getTitle(){
        return this.#title;
    }
}

let arr=[
    new Bok("Processen", "Franz Kafka", 310),
    new Bok("Silmarillion", "John Reuel Ronald Tolkien",520), 
    new Bok("Wuthering Heights", "Emily Brontë", 323), 
    new Bok("Fear and Loathing in Las Vegas", "Hunter S. Thompson", 211)
];

function findBook(title, bookArr){
    let isFound=null;
    for(obj of bookArr){
        if(obj.getTitle()===title){
            isFound=obj.getTitle();
        }
    }
    return isFound;
}

console.log(findBook("Processen", arr));
console.log(findBook("Wuthering Heights", arr));
console.log(findBook("No Country for Old Men", arr));
