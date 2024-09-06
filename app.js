let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        return("NO facts");
    }
}
 let btn = document.querySelector("button");
 let p = document.querySelector("p");
 btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    p.innerText = fact;

 })