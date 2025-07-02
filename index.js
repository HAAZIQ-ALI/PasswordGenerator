const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function random(){
    return Math.floor(Math.random()*characters.length)
}


function something(){
    let password =""
    for(let i = 0 ; i < 16 ; i++){
        password += characters[random()]
    }
    const div = document.createElement("div")
    div.textContent=password
    div.className="bg-[#273549] w-[35%] text-green-400 text-center m-2 rounded-md px-2 py-2"
    document.getElementById("daddy").appendChild(div)
}
