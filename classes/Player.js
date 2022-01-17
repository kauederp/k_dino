class Player{
    constructor(){
        this.isLive = true
        this.score = 0
        this.x
        this.y 
        this.width
        this.height
        this.sprite = "./img/sprites/dino2.gif"
        this.body
        this.jumpForce = 35
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
            }

            
            
        }
    }
    setPlayer(body,x,y,w,h){
        this.body = body
        this.x = x
        this.y = y
        this.width = w
        this.height = h        
        this.body.style.backgroundImage =  'url("'+this.sprite+'")'
        this.body.style.backgroundSize = "contain"
        this.body.style.position = 'absolute'
        this.body.style.top = y+'vh'
        this.body.style.left = x+'vw'
        this.body.style.width = w+'vw'
        this.body.style.height = h+'vw'
    }
    getBody(){
        return this.body
    }
    getPosition(){
        return {x: this.x, y:this.y}
    }
    setGravity(g,tela){
        if(this.y<60){
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