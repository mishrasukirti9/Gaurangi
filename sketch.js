var stBg,rhymesImg,learningImg,swarImg,vyanjanImg,countingImg,alphabetsImg;
var rhymes,alphabets,counting,learning,swar,vyanjan;
var gameState=0;
var play,playImg;
var bg2;
var s1img,s2img,s3img,s4img,s5img,s6img,s7img,s8img,s9img,s10img,s11img,s12img,s13img;
var a,aa,ae,aee,u,uu,rishi,e,ee,e2,ei,o,oo,am,ah;
var vbg;
var back,home,house;
var backI,signs;
function preload(){
    stBg=loadImage("IMAGES/bg1.jpg")
    rhymesImg=loadImage("IMAGES/rhymes.png")
    learningImg=loadImage("IMAGES/LEARNING.png")
    swarImg=loadImage("IMAGES/swar.png")
    vyanjanImg=loadImage("IMAGES/vyanjan.png")
    countingImg=loadImage("IMAGES/counting.png")
    alphabetsImg=loadImage("IMAGES/maxresdefault.jpg")
    playImg = loadImage("IMAGES/b3.png")
    bg2 = loadImage("IMAGES/1582694.jpg")
    bg = loadImage("IMAGES/bg.jpg")
    vbg=loadImage("flower2.jpg")
    house=loadImage("house.png")
    backI=loadImage("back.png")
    signs=loadImage("Counting/signs.png")

    s1img = loadImage("swar/S1.png");
    s2img = loadImage("swar/S2.png");
    s3img = loadImage("swar/S3.png");
    s4img = loadImage("swar/S4.png");
    s5img = loadImage("swar/S5.png");
    s6img = loadImage("swar/S6.png");
    s7img = loadImage("swar/S7.png");
    s8img = loadImage("swar/S8.png");
    s9img = loadImage("swar/S9.png");
    s10img = loadImage("swar/S10.png");
    s11img = loadImage("swar/S11.png");
    s12img = loadImage("swar/S12.png");
    s13img = loadImage("swar/S13.png");

    alpha1 = loadImage("alphabets/1.png")
    alpha2 = loadImage("alphabets/2.png")
    alpha3 = loadImage("alphabets/3.png")
    alpha4 = loadImage("alphabets/4.png")
    alpha5 = loadImage("alphabets/5.png")
    alpha6 = loadImage("alphabets/6.png")
    alpha7 = loadImage("alphabets/7.png")
    alpha8 = loadImage("alphabets/8.png")
    alpha9 = loadImage("alphabets/9.png")
    alpha10 = loadImage("alphabets/10.png")
    alpha11 = loadImage("alphabets/11.png")
    alpha12 = loadImage("alphabets/12.png")
    alpha13 = loadImage("alphabets/13.png")
    alpha14 = loadImage("alphabets/14.png")
    alpha15 = loadImage("alphabets/15.png")
    alpha16 = loadImage("alphabets/16.png")
    alpha17 = loadImage("alphabets/17.png")
    alpha18 = loadImage("alphabets/18.png")
    alpha19 = loadImage("alphabets/19.png")
    alpha20 = loadImage("alphabets/20.png")
    alpha21 = loadImage("alphabets/21.png")
    alpha22 = loadImage("alphabets/22.png")
    alpha23 = loadImage("alphabets/23.png")
    alpha24= loadImage("alphabets/24.png")
    alpha25 = loadImage("alphabets/25.png")
    alpha26 = loadImage("alphabets/26.png")
    scene = loadImage("alphabets/bg.jpg") 

    alp1 = loadSound("alphabets/sounds/alp1.mp3")
    b = loadSound("alphabets/sounds/b.mp3")
    c = loadSound("alphabets/sounds/c.mp3")
    d = loadSound("alphabets/sounds/d.mp3")
    eee = loadSound("alphabets/sounds/eee.mp3")
    f = loadSound("alphabets/sounds/f.mp3")
    g = loadSound("alphabets/sounds/g.mp3")
    h = loadSound("alphabets/sounds/h.mp3")
    i = loadSound("alphabets/sounds/i.mp3")
    j = loadSound("alphabets/sounds/j.mp3")
    k = loadSound("alphabets/sounds/k.mp3")
    l = loadSound("alphabets/sounds/l.mp3")
    m = loadSound("alphabets/sounds/m.mp3")
    n = loadSound("alphabets/sounds/n.mp3")
    ooo = loadSound("alphabets/sounds/ooo.mp3")
    p = loadSound("alphabets/sounds/p.mp3")
    q = loadSound("alphabets/sounds/q.mp3")
    r = loadSound("alphabets/sounds/r.mp3")
    s = loadSound("alphabets/sounds/s.mp3")
    t = loadSound("alphabets/sounds/t.mp3")
    uuu = loadSound("alphabets/sounds/uuu.mp3")
    v = loadSound("alphabets/sounds/v.mp3")
    w = loadSound("alphabets/sounds/w.mp3")
    x = loadSound("alphabets/sounds/x.mp3")
    y = loadSound("alphabets/sounds/y.mp3")
    z = loadSound("alphabets/sounds/z.mp3")

    count1 = loadImage("Counting/1.png")
    count2 = loadImage("Counting/2.png")
    count3 = loadImage("Counting/3.png")
    count4 = loadImage("Counting/4.png")
    count5 = loadImage("Counting/5.png")
    count6 = loadImage("Counting/6.png")
    count7 = loadImage("Counting/7.png")
    count8 = loadImage("Counting/8.png")
    count9 = loadImage("Counting/9.png")
    count10 = loadImage("Counting/10.jpeg")

    No1 = loadSound("Counting/sounds/1.mp3")
    No2 = loadSound("Counting/sounds/2.mp3")
    No3 = loadSound("Counting/sounds/3.mp3")
    No4 = loadSound("Counting/sounds/4.mp3")
    No5 = loadSound("Counting/sounds/5.mp3")
    No6 = loadSound("Counting/sounds/6.mp3")
    No7 = loadSound("Counting/sounds/7.mp3")
    No8 = loadSound("Counting/sounds/8.mp3")
    No9 = loadSound("Counting/sounds/9.mp3")
    No10 = loadSound("Counting/sounds/10.mp3")

    v1img = loadImage("vyanjan/1.png")
    v2img = loadImage("vyanjan/2.png")
    v3img = loadImage("vyanjan/3.png")
    v4img = loadImage("vyanjan/4.png")
    v5img = loadImage("vyanjan/5.png")
    v6img = loadImage("vyanjan/6.png")
    v7img = loadImage("vyanjan/7.png")
    v8img = loadImage("vyanjan/8.png")
    v9img = loadImage("vyanjan/9.png")
    v10img = loadImage("vyanjan/10.png")
    v11img = loadImage("vyanjan/11.png")
    v12img = loadImage("vyanjan/12.png")
    v13img = loadImage("vyanjan/13.png")
    v14img = loadImage("vyanjan/14.png")
    v15img = loadImage("vyanjan/15.png")
    v16img = loadImage("vyanjan/16.png")
    v17img = loadImage("vyanjan/17.png")
    v18img = loadImage("vyanjan/18.png")
    v19img = loadImage("vyanjan/19.png")
    v20img = loadImage("vyanjan/20.png")
    v21img = loadImage("vyanjan/21.png")
    v22img = loadImage("vyanjan/22.png")
    v23img = loadImage("vyanjan/23.png")
    v24img = loadImage("vyanjan/24.png")
    v25img = loadImage("vyanjan/25.png")
    v26img = loadImage("vyanjan/26.png")
    v27img = loadImage("vyanjan/27.png")
    v28img = loadImage("vyanjan/28.png")
    v29img = loadImage("vyanjan/29.png")
    v30img = loadImage("vyanjan/30.png")
    v31img = loadImage("vyanjan/31.png")
    v32img = loadImage("vyanjan/32.png")
    v33img = loadImage("vyanjan/33.png")
    v34img = loadImage("vyanjan/34.png")
    v35img = loadImage("vyanjan/35.png")
    v36img = loadImage("vyanjan/36.png")

    vy1 = loadSound("vyanjan/SOUNDS/vy1.mp3")
    vy2 = loadSound("vyanjan/SOUNDS/vy2.mp3")
    vy3 = loadSound("vyanjan/SOUNDS/vy3.mp3")
    vy4 = loadSound("vyanjan/SOUNDS/vy4.mp3")
    vy5 = loadSound("vyanjan/SOUNDS/vy5.mp3")
    vy6 = loadSound("vyanjan/SOUNDS/vy6.mp3")
    vy7 = loadSound("vyanjan/SOUNDS/vy7.mp3")
    vy8 = loadSound("vyanjan/SOUNDS/vy8.mp3")
    vy9 = loadSound("vyanjan/SOUNDS/vy9.mp3")
    vy10 = loadSound("vyanjan/SOUNDS/vy10.mp3")
    vy11 = loadSound("vyanjan/SOUNDS/vy11.mp3")
    vy12 = loadSound("vyanjan/SOUNDS/vy12.mp3")
    vy13 = loadSound("vyanjan/SOUNDS/vy13.mp3")
    vy14 = loadSound("vyanjan/SOUNDS/vy14.mp3")
    vy15 = loadSound("vyanjan/SOUNDS/vy15.mp3")
    vy16 = loadSound("vyanjan/SOUNDS/vy16.mp3")
    vy17 = loadSound("vyanjan/SOUNDS/vy17.mp3")
    vy18 = loadSound("vyanjan/SOUNDS/vy18.mp3")
    vy19 = loadSound("vyanjan/SOUNDS/vy19.mp3")
    vy20 = loadSound("vyanjan/SOUNDS/vy20.mp3")
    vy21 = loadSound("vyanjan/SOUNDS/vy21.mp3")
    vy22 = loadSound("vyanjan/SOUNDS/vy22.mp3")
    vy23 = loadSound("vyanjan/SOUNDS/vy23.mp3")
    vy24 = loadSound("vyanjan/SOUNDS/vy24.mp3")
    vy25 = loadSound("vyanjan/SOUNDS/vy25.mp3")
    vy26 = loadSound("vyanjan/SOUNDS/vy26.mp3")
    vy27 = loadSound("vyanjan/SOUNDS/vy27.mp3")
    vy28 = loadSound("vyanjan/SOUNDS/vy28.mp3")
    vy29 = loadSound("vyanjan/SOUNDS/vy29.mp3")
    vy30 = loadSound("vyanjan/SOUNDS/vy30.mp3")
    vy31 = loadSound("vyanjan/SOUNDS/vy31.mp3")
    vy32 = loadSound("vyanjan/SOUNDS/vy32.mp3")
    vy33 = loadSound("vyanjan/SOUNDS/vy33.mp3")
    vy34 = loadSound("vyanjan/SOUNDS/vy34.mp3")
    vy35 = loadSound("vyanjan/SOUNDS/vy35.mp3")
    vy36 = loadSound("vyanjan/SOUNDS/vy36.mp3")
    
    a=loadSound("swarSounds/a.wav")
    aa=loadSound("swarSounds/aa.mp3")
    ae=loadSound("swarSounds/ae.mp3")
    aee=loadSound("swarSounds/aee.mp3")
    e=loadSound("swarSounds/e.mp3")
    ee=loadSound("swarSounds/ee.mp3")
    rishi=loadSound("swarSounds/rishi.mp3")
    u=loadSound("swarSounds/u.mp3")
    uu=loadSound("swarSounds/uu.mp3")
    e2=loadSound("swarSounds/e.mpeg")
    ei=loadSound("swarSounds/ei.mpeg")
    o=loadSound("swarSounds/o.mpeg")
    oo=loadSound("swarSounds/oo.mpeg")
    am=loadSound("swarSounds/am.mpeg")
    ah=loadSound("swarSounds/ah.mpeg")


}

function setup(){
    createCanvas(windowWidth,windowHeight);
    home = createSprite(width/2+650,height-50)
    home.addImage(house);
    home.scale = 0.3
    home.visible = false;

    back = createSprite(width/2+550,height-50)
    back.addImage(backI);
    back.scale=0.2
    back.visible=false;

    rhymes = createSprite(800,200);
    rhymes.addImage(rhymesImg);
    rhymes.scale = 0.3
    rhymes.visible = false;

    learning = createSprite(width/2-3,height-250);
    learning.addImage(learningImg);
    learning.scale = 0.4
    learning.visible = false;

    swar = createSprite(200,200);
    swar.addImage(swarImg);
    swar.scale = 0.5
    swar.visible = false;

    vyanjan = createSprite(width/2-200,height-130);
    vyanjan.addImage(vyanjanImg);
    vyanjan.scale = 0.6
    vyanjan.visible = false;

    counting = createSprite(width-250,200);
    counting.addImage(countingImg);
    counting.scale = 0.8
    counting.visible = false;

    alphabets = createSprite(width/2+250,height-130);
    alphabets.addImage(alphabetsImg);
    alphabets.scale = 0.3
    alphabets.visible = false;

    play = createSprite(width/2-4,350)
    play.addImage(playImg)
    play.visible = true;

    s1 = createSprite(200,100);
    s1.addImage(s1img)
    s1.scale =(width/height)/15;
    s1.visible = false
   
    
    s2 = createSprite(width/2-200,100);
    s2.addImage(s2img)
    s2.scale =(width/height)/15;
    s2.visible = false

    
    s3 = createSprite(width/2+200,100);
    s3.addImage(s3img)
    s3.scale =(width/height)/15;
    s3.visible = false

    
    s4 = createSprite(width-200,100);
    s4.addImage(s4img)
    s4.scale =(width/height)/15;
    s4.visible = false

    
    s5 = createSprite(width/2-500,270);
    s5.addImage(s5img)
    s5.scale =(width/height)/15;
    s5.visible = false

    
    s6 = createSprite(width/2,270);
    s6.addImage(s6img)
    s6.scale =0.2;
    s6.visible = false

    
    s7 = createSprite(width-300,270);
    s7.addImage(s7img)
    s7.scale =(width/height)/15;
    s7.visible = false

    
    s8 = createSprite(200,450);
    s8.addImage(s8img)
    s8.scale =(width/height)/15;
    s8.visible = false

    
    s9 = createSprite(width/2-200,450);
    s9.addImage(s9img)
    s9.scale =(width/height)/15;
    s9.visible = false

    
    s10 = createSprite(width/2+200,450);
    s10.addImage(s10img)
    s10.scale =(width/height)/15;
    s10.visible = false

    
    s11 = createSprite(width-200,450);
    s11.addImage(s11img)
    s11.scale =(width/height)/15;
    s11.visible = false

    
    s12 = createSprite(width/2-150,height-100);
    s12.addImage(s12img)
    s12.scale =(width/height)/15;
    s12.visible = false

    
    s13 = createSprite(width/2+150,height-100);
    s13.addImage(s13img)
    s13.scale =(width/height)/15;
    s13.visible = false

    al1 = createSprite(100,100);
    al1.addImage(alpha1)
    al1.scale =(width/height)/7;
    al1.visible = false

    al2 = createSprite(275,110);
    al2.addImage(alpha2)
    al2.scale =(width/height)/7;
    al2.visible = false

    al3 = createSprite(450,100);
    al3.addImage(alpha3)
    al3.scale =(width/height)/7;
    al3.visible = false

    al4 = createSprite(width/2-100,110);
    al4.addImage(alpha4)
    al4.scale =(width/height)/7;
    al4.visible = false
    
    al5 = createSprite((width/2)+105,110);
    al5.addImage(alpha5)
    al5.scale =(width/height)/7;
    al5.visible = false

    al6 = createSprite(width-450,110);
    al6.addImage(alpha6)
    al6.scale =(width/height)/7;
    al6.visible = false

    al7 = createSprite(width-270,110);
    al7.addImage(alpha7)
    al7.scale =(width/height)/7;
    al7.visible = false

    al8 = createSprite(width-100,110);
    al8.addImage(alpha8)
    al8.scale =(width/height)/7;
    al8.visible = false

    al9 = createSprite(100,(height/2)-50);
    al9.addImage(alpha9)
    al9.scale =(width/height)/7;
    al9.visible = false

    al10 = createSprite(275,(height/2)-50);
    al10.addImage(alpha10)
    al10.scale =(width/height)/7;
    al10.visible = false

    al11 = createSprite(450,(height/2)-50);
    al11.addImage(alpha11)
    al11.scale =(width/height)/7;
    al11.visible = false

    al12 = createSprite(width/2-100,(height/2)-50);
    al12.addImage(alpha12)
    al12.scale =(width/height)/7;
    al12.visible = false

    al13 = createSprite((width/2)+105,(height/2)-50);
    al13.addImage(alpha13)
    al13.scale =(width/height)/7;
    al13.visible = false

    al14 = createSprite(width-450,(height/2)-50);
    al14.addImage(alpha14)
    al14.scale =(width/height)/7;
    al14.visible = false

    al15 = createSprite(width-270,(height/2)-50);
    al15.addImage(alpha15)
    al15.scale =(width/height)/7;
    al15.visible = false

    al16 = createSprite(width-100,(height/2)-50);
    al16.addImage(alpha16)
    al16.scale =(width/height)/7;
    al16.visible = false

    al17 = createSprite(100,(height/2)+100);
    al17.addImage(alpha17)
    al17.scale =(width/height)/7;
    al17.visible = false

    al18 = createSprite(325,(height/2)+100);
    al18.addImage(alpha18)
    al18.scale =(width/height)/7;
    al18.visible = false

    al19 = createSprite((width/2)-225,(height/2)+100);
    al19.addImage(alpha19)
    al19.scale =(width/height)/7;
    al19.visible = false

    al20 = createSprite(width/2,(height/2)+100);
    al20.addImage(alpha20)
    al20.scale =(width/height)/7;
    al20.visible = false

    al21 = createSprite((width/2)+275,(height/2)+100);
    al21.addImage(alpha21)
    al21.scale =(width/height)/7;
    al21.visible = false

    al22 = createSprite(width-200,(height/2)+100);
    al22.addImage(alpha22)
    al22.scale =(width/height)/7;
    al22.visible = false

    al23 = createSprite(100,(height)-100);
    al23.addImage(alpha23)
    al23.scale =(width/height)/7;
    al23.visible = false

    al24 = createSprite(300,(height)-100);
    al24.addImage(alpha24)
    al24.scale =(width/height)/7;
    al24.visible = false

    al25 = createSprite(500,(height)-100);
    al25.addImage(alpha25)
    al25.scale =(width/height)/7;
    al25.visible = false

    al26 = createSprite((width/2)-100,(height)-100);
    al26.addImage(alpha26)
    al26.scale =(width/height)/7;
    al26.visible = false

    c1= createSprite(150,120);
    c1.addImage(count1);
    c1.scale = (width/height)/2;
    c1.visible = false;

    c2= createSprite((width/2)-200,120);
    c2.addImage(count2);
    c2.scale = (width/height)/2;
    c2.visible = false;

    c3= createSprite((width/2)+200,120);
    c3.addImage(count3);
    c3.scale = (width/height)/2;
    c3.visible = false;

    c4= createSprite(width-150,120);
    c4.addImage(count4);
    c4.scale = (width/height)/2;
    c4.visible = false;
 
    c5= createSprite(150,height/2);
    c5.addImage(count5);
    c5.scale = (width/height)/2;
    c5.visible = false;

    c6= createSprite((width/2)-200,height/2);
    c6.addImage(count6);
    c6.scale = (width/height)/2;
    c6.visible = false;

    c7= createSprite((width/2)+200,height/2);
    c7.addImage(count7);
    c7.scale = (width/height)/2;
    c7.visible = false;

    c8= createSprite(width-150,height/2);
    c8.addImage(count8);
    c8.scale = (width/height)/2;
    c8.visible = false;

    c9= createSprite((width/2)-200,height-120);
    c9.addImage(count9);
    c9.scale = (width/height)/2;
    c9.visible = false;

    c10= createSprite((width/2)+200,height-120);
    c10.addImage(count10);
    c10.scale = (width/height)/10;
    c10.visible = false;

    v1 =  createSprite(100,100);
    v1.addImage(v1img);
    v1.scale = (width/height)/25
    v1.visible = false;

    v2 =  createSprite(325,100);
    v2.addImage(v2img);
    v2.scale = (width/height)/25
    v2.visible = false;

    v3 =  createSprite((width/2)-225,100);
    v3.addImage(v3img);
    v3.scale = (width/height)/25
    v3.visible = false;

    v4 =  createSprite(width/2,100);
    v4.addImage(v4img);
    v4.scale = (width/height)/25
    v4.visible = false;

    v5 =  createSprite((width/2)+225,100);
    v5.addImage(v5img);
    v5.scale = (width/height)/25
    v5.visible = false;

    v6 =  createSprite((width)-325,100);
    v6.addImage(v6img);
    v6.scale = (width/height)/25
    v6.visible = false;

    v7 =  createSprite((width)-100,100);
    v7.addImage(v7img);
    v7.scale = (width/height)/25
    v7.visible = false;

    v8 =  createSprite(100,225);
    v8.addImage(v8img);
    v8.scale = (width/height)/25
    v8.visible = false;

    v9 =  createSprite(325,225);
    v9.addImage(v9img);
    v9.scale = (width/height)/25
    v9.visible = false;

    v10 =  createSprite((width/2)-225,225);
    v10.addImage(v10img);
    v10.scale = (width/height)/25
    v10.visible = false;

    v11 =  createSprite(width/2,225);
    v11.addImage(v11img);
    v11.scale = (width/height)/25
    v11.visible = false;

    v12 =  createSprite((width/2)+225,225);
    v12.addImage(v12img);
    v12.scale = (width/height)/25
    v12.visible = false;

    v13 =  createSprite((width)-325,225);
    v13.addImage(v13img);
    v13.scale = (width/height)/25
    v13.visible = false;

    v14 =  createSprite((width)-100,225);
    v14.addImage(v14img);
    v14.scale = (width/height)/25
    v14.visible = false;

    
    v15 =  createSprite(100,(height/2)-25);
    v15.addImage(v15img);
    v15.scale = (width/height)/25
    v15.visible = false;

    v16 =  createSprite(325,(height/2)-25);
    v16.addImage(v16img);
    v16.scale = (width/height)/25
    v16.visible = false;

    v17 =  createSprite((width/2)-225,(height/2)-25);
    v17.addImage(v17img);
    v17.scale = (width/height)/25
    v17.visible = false;

    v18 =  createSprite(width/2,(height/2)-25);
    v18.addImage(v18img);
    v18.scale = (width/height)/25
    v18.visible = false;

    v19 =  createSprite((width/2)+225,(height/2)-25);
    v19.addImage(v19img);
    v19.scale = (width/height)/25
    v19.visible = false;

    v20 =  createSprite((width)-325,(height/2)-25);
    v20.addImage(v20img);
    v20.scale = (width/height)/25
    v20.visible = false;

    v21 =  createSprite((width)-100,(height/2)-25);
    v21.addImage(v21img);
    v21.scale = (width/height)/25
    v21.visible = false;

    v22 =  createSprite(100,(height/2)+100);
    v22.addImage(v22img);
    v22.scale = (width/height)/25
    v22.visible = false;

    v23 =  createSprite(325,(height/2)+100);
    v23.addImage(v23img);
    v23.scale = (width/height)/25
    v23.visible = false;

    v24 =  createSprite((width/2)-225,(height/2)+100);
    v24.addImage(v24img);
    v24.scale = (width/height)/25
    v24.visible = false;

    v25 =  createSprite(width/2,(height/2)+100);
    v25.addImage(v25img);
    v25.scale = (width/height)/25
    v25.visible = false;

    v26 =  createSprite((width/2)+225,(height/2)+100);
    v26.addImage(v26img);
    v26.scale = (width/height)/25
    v26.visible = false;

    v27 =  createSprite((width)-325,(height/2)+100);
    v27.addImage(v27img);
    v27.scale = (width/height)/25
    v27.visible = false;

    v28 =  createSprite((width)-100,(height/2)+100);
    v28.addImage(v28img);
    v28.scale = (width/height)/25
    v28.visible = false;


    v29 =  createSprite(100,(height)-150);
    v29.addImage(v29img);
    v29.scale = (width/height)/25
    v29.visible = false;

    v30 =  createSprite(325,(height)-150);
    v30.addImage(v30img);
    v30.scale = (width/height)/25
    v30.visible = false;

    v31 =  createSprite((width/2)-225,(height)-150);
    v31.addImage(v31img);
    v31.scale = (width/height)/25
    v31.visible = false;

    v32 =  createSprite(width/2,(height)-150);
    v32.addImage(v32img);
    v32.scale = (width/height)/25
    v32.visible = false;

    v33 =  createSprite((width/2)+225,(height)-150);
    v33.addImage(v33img);
    v33.scale = (width/height)/25
    v33.visible = false;

    v34 =  createSprite((width)-325,(height)-150);
    v34.addImage(v34img);
    v34.scale = (width/height)/25
    v34.visible = false;

    v35 =  createSprite((width)-100,(height)-150);
    v35.addImage(v35img);
    v35.scale = (width/height)/25
    v35.visible = false;

    v36 =  createSprite((width/2),(height)-50);
    v36.addImage(v36img);
    v36.scale = (width/height)/25
    v36.visible = false;

    rhymes1=new Rhymes()
    p1=new P1()
    p2=new P2()
}

function draw(){
    if(gameState ===0){
   background(stBg)

stroke("BLACK")
textAlign(CENTER)
textSize(50)
text("Hi kid ,WELCOME to ",575,100)

stroke("BLACK")
textAlign(CENTER)
textSize(50)
text("WORLD OF LEARNING",825,600)

if(mousePressedOver(play)){
    gameState = 1
}

    drawSprites();
    }
    if(gameState ===1){

        background(stBg);
        drawSprites();
        rhymes.visible = true;
        learning.visible = true;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        
        if(mousePressedOver(rhymes)){
            gameState = 2
        }
    
        if(mousePressedOver(learning)){
            gameState = 3
        }
    
    }
    if(gameState ===2){
        background(stBg);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible =  false;
        counting.visible = false;
        alphabets.visible =  false;
        play.visible = false;
        home.visible = false;

        rhymes1.show()
            rhymes1.display()

    }
    if(gameState ===3){
        background(bg2);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible = true;
        counting.visible = true;
        alphabets.visible = true;
        play.visible = false;
        home.visible = false;
        
        if(mousePressedOver(swar)){
            gameState = 4
        }
    
        if(mousePressedOver(vyanjan)){
            gameState = 5
        }
    
        if(mousePressedOver(counting)){
            gameState = 6
        }
    
        if(mousePressedOver(alphabets)){
            gameState = 7
        } 

        
    }
    if(gameState ===4){
        background(bg);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        home.visible = true;
        s1.visible = true;
        if(mousePressedOver(s1)){
            a.play()
        }
        s2.visible = true;
        if(mousePressedOver(s2)){
            aa.play()
        }
        s3.visible = true;
        if(mousePressedOver(s3)){
            e.play()
        }
        s4.visible = true;
        if(mousePressedOver(s4)){
            ee.play()
        }
        s5.visible = true;
        if(mousePressedOver(s5)){
            u.play()
        }
        s6.visible = true;
        if(mousePressedOver(s6)){
            uu.play()
        }
        s7.visible = true;
        if(mousePressedOver(s7)){
            rishi.play()
        }
        s8.visible = true;
        if(mousePressedOver(s8)){
            e2.play()
        }
        s9.visible = true;
        if(mousePressedOver(s9)){
            ei.play()
        }
        s10.visible = true;
        if(mousePressedOver(s10)){
            o.play()
        }
        s11.visible = true;
        if(mousePressedOver(s11)){
            oo.play()
        }
        s12.visible = true;
        if(mousePressedOver(s12)){
            am.play()
        }
        s13.visible = true; 
        if(mousePressedOver(s13)){
            ah.play()
        }  
        back.visible = true;

        if(mousePressedOver(home)){
            gameState = 0
            rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = true;
        home.visible = false;
        s1.visible = false;
        s2.visible = false;
        s3.visible = false;
        s4.visible = false;
        s5.visible = false;
        s6.visible = false;
        s7.visible = false;
        s8.visible = false;
        s9.visible = false;
        s10.visible = false;
        s11.visible = false;
        s12.visible = false;
        s13.visible = false;
        back.visible = false;
        }
        if(mousePressedOver(back)){
            gameState = 3
            rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible = true;
        counting.visible = true;
        alphabets.visible = true;
        play.visible = false;
        home.visible = false;
        back.visible = false;
        s1.visible = false;
        s2.visible = false;
        s3.visible = false;
        s4.visible = false;
        s5.visible = false;
        s6.visible = false;
        s7.visible = false;
        s8.visible = false;
        s9.visible = false;
        s10.visible = false;
        s11.visible = false;
        s12.visible = false;
        s13.visible = false;
        }
    }
    if(gameState ===5){
        background(vbg);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        home.visible = true;

        v1.visible = true;
        if(mousePressedOver(v1)){
            vy1.play()
        }
        v2.visible = true;
        if(mousePressedOver(v2)){
            vy2.play()
        }
        v3.visible = true;
        if(mousePressedOver(v3)){
            vy3.play()
        }
        v4.visible = true;
        if(mousePressedOver(v4)){
            vy4.play()
        }
        v5.visible = true;
        if(mousePressedOver(v5)){
            vy5.play()
        }
        v6.visible = true;
        if(mousePressedOver(v6)){
            vy6.play()
        }
        v7.visible = true;
        if(mousePressedOver(v7)){
            vy7.play()
        }
        v8.visible = true;
        if(mousePressedOver(v8)){
            vy8.play()
        }
        v9.visible = true;
        if(mousePressedOver(v9)){
            vy9.play()
        }
        v10.visible = true;
        if(mousePressedOver(v10)){
            vy10.play()
        }
        v11.visible = true;
        if(mousePressedOver(v11)){
            vy11.play()
        }
        v12.visible = true;
        if(mousePressedOver(v12)){
            vy12.play()
        }
        v13.visible = true;
        if(mousePressedOver(v13)){
            vy13.play()
        }
        v14.visible = true;
        if(mousePressedOver(v14)){
            vy14.play()
        }
        v15.visible = true;
        if(mousePressedOver(v15)){
            vy15.play()
        }
        v16.visible = true;
        if(mousePressedOver(v16)){
            vy16.play()
        }
        v17.visible = true;
        if(mousePressedOver(v17)){
            vy17.play()
        }
        v18.visible = true;
        if(mousePressedOver(v18)){
            vy18.play()
        }
        v19.visible = true;
        if(mousePressedOver(v19)){
            vy19.play()
        }
        v20.visible = true;
        if(mousePressedOver(v20)){
            vy20.play()
        }
        v21.visible = true;
        if(mousePressedOver(v21)){
            vy21.play()
        }
        v22.visible = true;
        if(mousePressedOver(v22)){
            vy22.play()
        }
        v23.visible = true;
        if(mousePressedOver(v23)){
            vy23.play()
        }
        v24.visible = true;
        if(mousePressedOver(v24)){
            vy24.play()
        }
        v25.visible = true;
        if(mousePressedOver(v25)){
            vy25.play()
        }
        v26.visible = true;
        if(mousePressedOver(v26)){
            vy26.play()
        }
        v27.visible = true;
        if(mousePressedOver(v27)){
            vy27.play()
        }
        v28.visible = true;
        if(mousePressedOver(v28)){
            vy28.play()
        }
        v29.visible = true;
        if(mousePressedOver(v29)){
            vy29.play()
        }
        v30.visible = true;
        if(mousePressedOver(v30)){
            vy30.play()
        }
        v31.visible = true;
        if(mousePressedOver(v31)){
            vy31.play()
        }
        v32.visible = true;
        if(mousePressedOver(v32)){
            vy32.play()
        }
        v33.visible = true;
        if(mousePressedOver(v33)){
            vy33.play()
        }
        v34.visible = true;
        if(mousePressedOver(v34)){
            vy34.play()
        }
        v35.visible = true;
        if(mousePressedOver(v35)){
            vy35.play()
        }
        v36.visible = true;
        if(mousePressedOver(v36)){
            vy36.play()
        }
        back.visible = true;
        if(mousePressedOver(home)){
            gameState = 0
            rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = true;
        home.visible = false;

        v1.visible = false;
        v2.visible = false;
        v3.visible = false;
        v4.visible = false;
        v5.visible = false;
        v6.visible = false;
        v7.visible = false;
        v8.visible = false;
        v9.visible = false;
        v10.visible = false;
        v11.visible = false;
        v12.visible = false;
        v13.visible = false;
        v14.visible = false;
        v15.visible = false;
        v16.visible = false;
        v17.visible = false;
        v18.visible = false;
        v19.visible = false;
        v20.visible = false;
        v21.visible = false;
        v22.visible = false;
        v23.visible = false;
        v24.visible = false;
        v25.visible = false;
        v26.visible = false;
        v27.visible = false;
        v28.visible = false;
        v29.visible = false;
        v30.visible = false;
        v31.visible = false;
        v32.visible = false;
        v33.visible = false;
        v34.visible = false;
        v35.visible = false;
        v36.visible = false;
        back.visible = false;
        }
        if(mousePressedOver(back)){
            gameState=3
            rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible = true;
        counting.visible = true;
        alphabets.visible = true;
        play.visible = false;
        home.visible = false;
        back.visible = false;
        v1.visible = false;
        v2.visible = false;
        v3.visible = false;
        v4.visible = false;
        v5.visible = false;
        v6.visible = false;
        v7.visible = false;
        v8.visible = false;
        v9.visible = false;
        v10.visible = false;
        v11.visible = false;
        v12.visible = false;
        v13.visible = false;
        v14.visible = false;
        v15.visible = false;
        v16.visible = false;
        v17.visible = false;
        v18.visible = false;
        v19.visible = false;
        v20.visible = false;
        v21.visible = false;
        v22.visible = false;
        v23.visible = false;
        v24.visible = false;
        v25.visible = false;
        v26.visible = false;
        v27.visible = false;
        v28.visible = false;
        v29.visible = false;
        v30.visible = false;
        v31.visible = false;
        v32.visible = false;
        v33.visible = false;
        v34.visible = false;
        v35.visible = false;
        v36.visible = false;
        }
    }
    if(gameState ===6){
        background(signs);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        home.visible = true;
        back.visible = true;

        c1.visible = true;
        if(mousePressedOver(c1)){
            No1.play()
        }
        c2.visible = true;
        if(mousePressedOver(c2)){
            No2.play()
        }
        c3.visible = true;
        if(mousePressedOver(c3)){
            No3.play()
        }
        c4.visible = true;
        if(mousePressedOver(c4)){
            No4.play()
        }
        c5.visible = true;
        if(mousePressedOver(c5)){
            No5.play()
        }
        c6.visible = true;
        if(mousePressedOver(c6)){
            No6.play()
        }
        c7.visible = true;
        if(mousePressedOver(c7)){
            No7.play()
        }
        c8.visible = true;
        if(mousePressedOver(c8)){
            No8.play()
        }
        c9.visible = true;
        if(mousePressedOver(c9)){
            No9.play()
        }
        c10.visible = true;
        if(mousePressedOver(c10)){
            No10.play()
        }

        if(mousePressedOver(home)){
            gameState = 0
            rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = true;
        home.visible = false;

        c1.visible = false;
        c2.visible = false;
        c3.visible = false;
        c4.visible = false;
        c5.visible = false;
        c6.visible = false;
        c7.visible = false;
        c8.visible = false;
        c9.visible = false;
        c10.visible = false;
        back.visible = false;
        }
        if(mousePressedOver(back)){
            gameState=3
            rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible = true;
        counting.visible = true;
        alphabets.visible = true;
        play.visible = false;
        home.visible = false;
        back.visible = false

         c1.visible = false;
        c2.visible = false;
        c3.visible = false;
        c4.visible = false;
        c5.visible = false;
        c6.visible = false;
        c7.visible = false;
        c8.visible = false;
        c9.visible = false;
        c10.visible = false;
        }
    }
    if(gameState ===7){
        background(scene);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;
        home.visible = true;
        back.visible = true;

        al1.visible = true;
        if(mousePressedOver(al1)){
            alp1.play()
        }
        al2.visible = true;
        if(mousePressedOver(al2)){
            b.play()
        }
        al3.visible = true;
        if(mousePressedOver(al3)){
            c.play()
        }
        al4.visible = true;
        if(mousePressedOver(al4)){
            d.play()
        }
        al5.visible = true;
        if(mousePressedOver(al5)){
            eee.play()
        }
        al6.visible = true;
        if(mousePressedOver(al6)){
            f.play()
        }
        al7.visible = true;
        if(mousePressedOver(al7)){
            g.play()
        }
        al8.visible = true;
        if(mousePressedOver(al8)){
            h.play()
        }
        al9.visible = true;
        if(mousePressedOver(al9)){
            i.play()
        }
        al10.visible = true;
        if(mousePressedOver(al10)){
            j.play()
        }
        al11.visible = true;
        if(mousePressedOver(al11)){
            k.play()
        }
        al12.visible = true;
        if(mousePressedOver(al12)){
            l.play()
        }
        al13.visible = true;
        if(mousePressedOver(al13)){
            m.play()
        }
        al14.visible = true;
        if(mousePressedOver(al14)){
            n.play()
        }
        al15.visible = true;
        if(mousePressedOver(al15)){
            ooo.play()
        }
        al16.visible = true;
        if(mousePressedOver(al16)){
            p.play()
        }
        al17.visible = true;
        if(mousePressedOver(al17)){
            q.play()
        }
        al18.visible = true;
        if(mousePressedOver(al18)){
            r.play()
        }
        al19.visible = true;
        if(mousePressedOver(al19)){
            s.play()
        }
        al20.visible = true;
        if(mousePressedOver(al20)){
            t.play()
        }
        al21.visible = true;
        if(mousePressedOver(al21)){
            uuu.play()
        }
        al22.visible = true;
        if(mousePressedOver(al22)){
            v.play()
        }
        al23.visible = true;
        if(mousePressedOver(al23)){
            w.play()
        }
         al24.visible = true;
        if(mousePressedOver(al24)){
            x.play()
        }
        al25.visible = true;
        if(mousePressedOver(al25)){
            y.play()
        }
        al26.visible = true;
        if(mousePressedOver(al26)){
            z.play()
        }
        
        if(mousePressedOver(home)){
            gameState = 0

            rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = true;
        home.visible = false;
        back.visible = false;
        al1.visible = false;
        al2.visible = false;
        al3.visible = false;
        al4.visible = false;
        al5.visible = false;
        al6.visible = false;
        al7.visible = false;
        al8.visible = false;
        al9.visible = false;
        al10.visible = false;
        al11.visible = false;
        al12.visible = false;
        al13.visible = false;
        al14.visible = false;
        al15.visible = false;
        al16.visible = false;
        al17.visible = false;
        al18.visible = false;
        al19.visible = false;
        al20.visible = false;
        al21.visible = false;
        al22.visible = false;
        al23.visible = false;
        al24.visible = false;
        al25.visible = false;
        al26.visible = false;
        }
        if(mousePressedOver(back)){
            gameState=3
         rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible = true;
        counting.visible = true;
        alphabets.visible = true;
        play.visible = false;
        home.visible = false;
        back.visible = false;
        al1.visible = false;
        al2.visible = false;
        al3.visible = false;
        al4.visible = false;
        al5.visible = false;
        al6.visible = false;
        al7.visible = false;
        al8.visible = false;
        al9.visible = false;
        al10.visible = false;
        al11.visible = false;
        al12.visible = false;
        al13.visible = false;
        al14.visible = false;
        al15.visible = false;
        al16.visible = false;
        al17.visible = false;
        al18.visible = false;
        al19.visible = false;
        al20.visible = false;
        al21.visible = false;
        al22.visible = false;
        al23.visible = false;
        al24.visible = false;
        al25.visible = false;
        al26.visible = false;
        
        }
    }
    
    if(gameState===8){
        p1.display()
        rhymes1.hide()
    }
    if(gameState===9){
        p2.display()
        rhymes1.hide()
    }

}
