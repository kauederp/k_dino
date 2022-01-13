class Player{
    constructor(){
        this.score = 0
        this.x
        this.y 
        this.width
        this.height
        this.sprite = "./img/sprites/dino2.gif"
        this.body
        this.jumpForce = 230
        this.move = "run"
        this.comandos = {
            w: ()=>{
                if(this.move == 'run'){            
                    this.y = this.y - this.jumpForce
                }
            },
            ' ': ()=>{
                if(this.move == 'run'){            
                    this.y = this.y - this.jumpForce
                }
            },
            ArrowUp: ()=>{
                if(this.move == 'run'){           
                    this.y = this.y - this.jumpForce
                }
            },
            s: ()=>{
                if(this.move == 'run' && player.y < player.getPosition()['y']+200){            
                    this.y = 440
                    this.move = 'duck'
                }
            },
            ArrowDown: ()=>{
                if(this.move == 'run' && player.y < player.getPosition()['y']+200){            
                    this.y = 440
                    this.move = 'duck'
                }
            }

            
            
        }
    }
    collision(rect1, rect2){
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            return true
         }
    }
    setPlayer(body,x,y,w,h){
        this.body = body
        this.x = x
        this.y = y
        this.w = w
        this.h = h        
        this.body.style.backgroundImage =  'url("'+this.sprite+'")'
        this.body.style.backgroundSize = "contain"
        this.body.style.position = 'absolute'
        this.body.style.top = y+'px'
        this.body.style.width = w+'px'
        this.body.style.height = h+'px'
    }
    getBody(){
        return this.body
    }
    getPosition(){
        return {x: this.x, y:this.y}
    }
    setGravity(g,tela){
        if(this.y<tela-200){
            this.y = this.y + g
            this.move = 'jump'
        }else{
            this.move = 'run'
        }

    }
    setScore(score){
        this.score = score
    }
    getScore(){
        return this.score
    }
    move(e){
        console.log(e.key)
        this.comandos[e]()
    }
}

// x: 5, y: 5, width: 50, height: 50