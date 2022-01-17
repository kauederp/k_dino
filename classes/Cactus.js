class Cactus{
    constructor(){
        this.x
        this.y
        this.width
        this.height
        this.sprite = "./img/background/cactus.png"
    }
    setCactus(cactus, x, y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        cactus.setAttribute("id","cactus")
        cactus.style.backgroundImage =  'url("'+this.sprite+'")'
        cactus.style.position = "absolute";
        cactus.style.top = y+"vh"
        cactus.style.left = x+"vw"
        cactus.style.width = w+"px"
        cactus.style.height = h+'px';
        this.cactus = cactus
    }
    getPosition(){
        return this.x
    }
    getCactus(){
        return this.cactus
    }
}