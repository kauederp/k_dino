const player = new Player()
const cactus = new Cactus()
var key
const body = document.getElementsByTagName('body')[0]
const gravity = 1
const tela = document.createElement("div")
var left = 70
var velocidade = 0.8
// ####### game over screen
const gameOver = document.createElement("div")
const gameOverText = document.createElement("p")
const gameOverBtn = document.createElement("button")

gameOverText.innerText = "Game Over"
gameOverText.style.fontSize = "6vw"
// style game over screen
gameOver.style.position = "absolute"
gameOver.style.color = "color:rgb(61, 61, 61);"
gameOver.style.zIndex = "999"
gameOver.style.top = "2vh"
gameOver.style.left = "38vw"
gameOver.style.alignItems = "center"
// style game over btn
gameOverBtn.style.fontSize = "10vw"
gameOverBtn.style.fontWeight = "bolder"
gameOverBtn.style.padding = "2vw"
gameOverBtn.style.margin = "0px 10vw"
gameOverBtn.style.background = "none"
gameOverBtn.innerText = "⟲"



gameOver.appendChild(gameOverText)
gameOver.appendChild(gameOverBtn)
// #######



tela.style.border = "1px solid black"
tela.style.width = "100vw"
tela.style.Height = "40vh"


body.appendChild(tela)
const playerBody = document.getElementById("playerBody")
if(window.screen.width > 500)
    player.setPlayer(playerBody,10,55,10,10)
else
    player.setPlayer(playerBody,10,55,23,23)

cactus.setCactus(document.createElement('div'),left,58,50,90)
var cactusBody = cactus.getCactus()

tela.appendChild(cactusBody)

setInterval(()=>{
    if(left <= 0){
        left = 75
        cactus.setCactus(cactusBody,left,58,cactus.width,90)
        
        velocidade+=0.06
    }
    else{
        left = left-velocidade
        cactus.setCactus(cactusBody,left,58,cactus.width,90)
    }

    if (window.screen.width <500 && player.move == 'run' && player.x+13 >= cactus.x) {
        player.status = false
    }else if(player.move == 'run' && player.x+3.8 >= cactus.x){
        player.status = false
    }
    else{
        playerBody.style.backgroundColor = "transparent"      
    }    
    //console.log({player: player.x,cactus: cactus.x, vel: velocidade})
},18)


const update = ()=>{
    setInterval(()=>{
        player.setGravity(gravity,tela.offsetHeight)
        player.setPlayer(playerBody,player.getPosition()['x'],player.getPosition()['y'],player.width,player.height)
        window.onkeydown = (e)=>{
            try{
                key = e.key
                player.comandos[`${e.key}`]()                
            }catch(e){
                console.log("%c tecla "+key+" é inválida", "color:red;")
            }
        }
        window.ontouchstart = (e)=>{
            player.comandos['ArrowUp']()
        }
        player.setScore(player.getScore()+1)
        if(player.status == false && typeof(body.children["playerBody"]) != 'undefined'){
            body.removeChild(playerBody)
            tela.removeChild(cactusBody)
            tela.appendChild(gameOver)
        }
    },18)
}
update()


gameOverBtn.onclick = ()=>{
    let url =window.location['href']+"?score="+player.getScore()
    window.location.href = url;
}