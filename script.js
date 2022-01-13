const player = new Player()
const cactus = new Cactus()

const body = document.getElementsByTagName('body')[0]
const gravity = 8
const tela = document.createElement("div")
tela.style.border = "1px solid black"
tela.style.width = "100%"
tela.style.minHeight = "90vh"

body.appendChild(tela)
const playerBody = document.getElementById("playerBody")
player.setPlayer(playerBody,200,350,90,90)


cactus.setCactus(document.createElement('div'),10,58)
var cactusBody = cactus.getCactus()

tela.appendChild(cactusBody)


const update = ()=>{
    setInterval(()=>{
        player.setGravity(gravity,tela.offsetHeight)
        player.setPlayer(playerBody,player.getPosition()['x'],player.getPosition()['y'],90,90)
        if(cactus.x <= 100)
            cactus.x = cactus.x -2
        else
            cactus.x = 0

        window.onkeydown = (e)=>{
            var key = e.key
            console.log(key)
            player.comandos[`${e.key}`]()
            console.log(player.getPosition())
            console.log(player.move)
        }
        window.onkeyup = (e)=>{
            if(e.key == "ArrowDown" || e.key == 's'){
                player.y = 350
                console.log("solta")
            }
        }
        player.setScore(player.getScore()+1)
    },18)
}



update()





