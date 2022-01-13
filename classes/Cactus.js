class Cactus{
    constructor(){
        this.x
        this.y
        this.widht
        this.height
        this.sprite = "./img/background/cactus.png"
    }
    setCactus(cactus, x, y){
        cactus.setAttribute("id","cactus")
        cactus.style.backgroundImage =  'url("'+this.sprite+'")'
        cactus.style.top = y+"vh"
        cactus.style.right = x+"vw"
        this.cactus = cactus
    }
    
    getCactus(){
        return this.cactus
    }
}