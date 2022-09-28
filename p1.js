class P1{
constructor(){
    this.title = createElement('h1');
    this.link1 = createElement("a").attribute("href","https://youtu.be/n38kGst16sI");
    this.link2 = createElement("a").attribute("href","https://youtu.be/MR5XSOdjKMA");
    this.link3 = createElement("a").attribute("href","https://youtu.be/e_04ZrNroTo");
    this.link4 = createElement("a").attribute("href","https://youtu.be/XqZsoesa55w");
    this.link5 = createElement("a").attribute("href","https://youtu.be/jbBbRjs_niM");
    this.link6 = createElement("a").attribute("href","https://youtu.be/QA48wTGbU7A");
    this.link7 = createElement("a").attribute("href","https://youtu.be/95EFNsXgRhQ");
    this.link8 = createElement("a").attribute("href","https://youtu.be/WRVsOCh907o");
    this.link9 = createElement("a").attribute("href","https://youtu.be/zQCGxthVskw");
    this.link10 = createElement("a").attribute("href","https://youtu.be/wTNJZEcHdPw");
    this.link11 = createElement("a").attribute("href","https://youtu.be/XuLy-llv3sU");
    this.link12 = createElement("a").attribute("href","https://youtu.be/GAtj5v27heE");
    this.link13 = createElement("a").attribute("href","https://youtu.be/LrM62pv56o0");
    this.link14 = createElement("a").attribute("href","https://youtu.be/nrv495corBc");
    this.link15 = createElement("a").attribute("href","https://youtu.be/fdPu-wvl3KE");
}

display(){
    this.title.html("Rhymes");
    this.title.position(displayWidth/2 - 50, 0);

    this.link1.html("Twinkle Twinkle")
    this.link1.position(displayWidth/2,displayHeight/2);

    this.link2.html("BAA BAA BLACK SHEEP")
    this.link2.position(displayWidth/2,displayHeight/3);

    this.link3.html("WHEELS ON THE BUS")
    this.link3.position(displayWidth/1.5,displayHeight/4)
    
    this.link4.html("BABY SHARK")
    this.link4.position(displayWidth/1.5,displayHeight/2)
    
    this.link5.html("LOOBY LOO")
    this.link5.position(displayWidth/1.5,displayHeight/3)
    
    this.link6.html("HEAD KNEES AND TOES")
    this.link6.position(displayWidth/2,displayHeight/4)
    
    this.link7.html("MY NAME SONG")
    this.link7.position(displayWidth/5,displayHeight/2)

    this.link8.html("BATH SONG")
    this.link8.position(displayWidth/3,displayHeight/3)

    this.link9.html("LAUGHING SONG")
    this.link9.position(displayWidth/6,displayHeight/4)

    this.link10.html("TEN LITTLE DUKKIES")
    this.link10.position(displayWidth/3,displayHeight/2)

    this.link11.html("PAT A CAKE")
    this.link11.position(displayWidth/7,displayHeight/3)

    this.link12.html("JOHNY JOHNY YES PAPA")
    this.link12.position(displayWidth/7,displayHeight/4-100)

    this.link13.html("FIVE LITTLE MONKEYS")
    this.link13.position(displayWidth/2-100,displayHeight/5)

    this.link14.html("HUMPTY DUMPTY")
    this.link14.position(displayWidth/8,displayHeight/3+100)

    this.link15.html("PEEK A BOO")
    this.link15.position(displayWidth/2.5,displayHeight/4)
}
hide(){
    this.link1.hide()
}
show(){
    this.link1.show()
}
}