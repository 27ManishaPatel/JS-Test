//(Main theme: Programming Basics )

function logOutNumbers(){
    for (let i = 0; i < 101 ; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("Jackpot")
        }else if(i % 3 == 0){
            console.log("This is divisible by 3")
        }else if(i % 5 == 0){
            console.log("This is divisible by 5")
        }else {
            console.log(i)
        }
    }
}
logOutNumbers()

//2.(Main theme: DOM manipulation)

const button = document.createElement("button");
button.innerHTML = "Click Here!"
document.body.appendChild(button);

const image = document.createElement("img");
image.width = 300

button.addEventListener("click", function(){
    image.src = "https://source.unsplash.com/user/c_v_r";
    document.body.appendChild(image);
})



//3.(Main theme: Async API calls)
fetch("https://reqres.in/api/users")
.then(Response => Response.json())
.then(data => {
         for (let i = 0; i < 3; i++){
            const nameList = document.createElement("p")
            document.body.appendChild(nameList)    
            nameList.innerHTML = data.data[i].first_name
            }
        });

//4. Working with classes

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    logProduct(){
        console.log(`${this.name} is ${this.price} kr `)
    }
}
const table = new Product('table', 1200);
table.logProduct(); // 'Table costs 1200 kr'