function letterFrequency(ord){
    let arr={};
    for(let c of ord){
        if(arr[c]!=undefined){
            arr[c]++;
        }
        else{
            arr[c]=1;
        }
    }
    return arr;

}

console.log(letterFrequency("hahahah"));
console.log(letterFrequency("ojsan bojsan bejs"));
let obb=letterFrequency("ojsan bojsan bejs");
for(prop in obb)
    console.log(prop+" "+obb[prop]);