class P2{
    constructor(){
        this.title = createElement('h1');
        this.link1 = createElement("a").attribute("href","https://youtu.be/i35AUg11hvo");
        this.link2 = createElement("a").attribute("href","https://youtu.be/3bLfzgZ-wO8");
        this.link3 = createElement("a").attribute("href","https://youtu.be/PKYjUOwAk38");
        this.link4 = createElement("a").attribute("href","https://youtu.be/byqs6AmYdGU");
        this.link5 = createElement("a").attribute("href","https://youtu.be/JeLIYZJ3hfM");
        this.link6 = createElement("a").attribute("href","https://youtu.be/ZqktD0ciVFk");
        this.link7 = createElement("a").attribute("href","https://youtu.be/N-V_omSSi4M");
        this.link8 = createElement("a").attribute("href","https://youtu.be/x_NiA_-E51E");
        this.link9 = createElement("a").attribute("href","https://youtu.be/jNIuhizect8");
        this.link10 = createElement("a").attribute("href","https://youtu.be/gAM6v3BkjYE");
    }
    
    display(){
        this.title.html("Rhymes");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.link1.html("एक मोटा हाथी")
        this.link1.position(displayWidth/2,displayHeight/2+200)
        this.link2.html("लकड़ी की काठी")
        this.link2.position(displayWidth/3,displayHeight/2)
        this.link3.html("नन्हा मुन्ना राही हूँ")
        this.link3.position(displayWidth/4,displayHeight/2)
        this.link4.html("नानी तेरी मोरनी")
        this.link4.position(displayWidth/2,displayHeight/3)
        this.link5.html("बंदर मामा पहन पजामा")
        this.link5.position(displayWidth/2,displayHeight/4)
        this.link6.html("लालाजी ने केला खाया")
        this.link6.position(displayWidth/3,displayHeight/3)
        this.link7.html("मौसम हुआ गरम")
        this.link7.position(displayWidth/1.5,displayHeight/2)
        this.link8.html("उपर पंखा चलता है")
        this.link8.position(displayWidth/2+100,displayHeight/3)
        this.link9.html("गैया मेरी")
        this.link9.position(displayWidth/2,displayHeight/2-100)
        this.link10.html("हाथी राजा कहाँ चले")
        this.link10.position(displayWidth/2,displayHeight/2)
        
        
    }
    hide(){
        this.link1.hide()
    }
    show(){
        this.link1.show()
    }
    }