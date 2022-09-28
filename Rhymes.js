class Rhymes{
    constructor(){    
    //Write the names of the button in the inverted commas below
    this.button1 = createButton('ENGLISH RHYMES');
    this.button2 = createButton('HINDI RHYMES');
    
    //this.button1.setAttribute("href","https://www.youtube.com")
    this.title = createElement('h1');
    this.note1 = createElement('h3');
    
}

hide(){
  this.button1.hide();
  this.button2.hide();
  
  

  this.note1.hide();
}

show(){
  this.button1.show();
  this.button2.show();
 
  
  this.note1.show();
}
    display(){
        this.title.html("Rhymes");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.note1.html("Click On Any One Button To Refer To The Rhyme");
        this.note1.style("color","blue");
        this.note1.position(displayWidth/2-380,displayHeight/2-280);

  
        this.button1.position(displayWidth/2 - 500, displayHeight/2 - 150);
        this.button1.style('width', '200px');
        this.button1.style('height', '40px');
        this.button1.style("borderWidth","5px");
       

        this.button2.position(displayWidth/2 -250 , displayHeight/2 - 150);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        this.button2.style("borderWidth","5px");
        
       
        this.button1.mousePressed(()=>{
          
          

          gameState = 8;
        });
        this.button2.mousePressed(()=>{
          
          

          gameState = 9;
        });

    
        
    
      }
    }