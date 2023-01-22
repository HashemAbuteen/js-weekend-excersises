function mubling(str){

    let char =[]
    let nextword =[];
        let dash = "-"
     for(i=0;i<str.length;i++){
            char[i]=str.charAt(i);
            nextword=nextword+dash+char[i].toUpperCase()+char[i].toLowerCase().repeat(i)
        }
        return nextword.slice(1);

}



console.log(mubling("RqaEzty"));