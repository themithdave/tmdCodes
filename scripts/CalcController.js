class CalcController{
    
    //metodo mais importante da classe
    constructor(){

        this._operation = [];
        this._displayCalc = "0";
        this.displayController();
        this.initButtonsEvents();
    }
    
    //metodo de inicialização 
    displayController(){

        var displayCalcEl = document.querySelector("#display");
        var x = "0";
         displayCalcEl.value = "0";	
		
        if(displayCalcEl = x){
        	displayCalcEl.value.push(x);
       
        }else {
        	
        }
        

       // vt = displayCalcEl.value;
        
        
        

    }

    //metodo para multiplos eventos
    addEventListenerAll(element, events, fn){

          events.split(' ').forEach(event =>{

            element.addEventListener(event, fn, false);

          });

    }

    clearAll(){
       this.displayCalcEl = "apagou";
    }

    clearEntry(){


    }

    setError(){
         
        this.displayController.x = "Error";
    }

    execBtn(value){

         switch(value){

            case 'ac':
            this.clearAll();
            break;
            case 'ce':
            this.clearEntry();
            break;
            case 'multiplicacao':
            
            break;
            case 'divisao':
            
            break;
            case 'subtracao':
            
            break;
            case 'soma':
            
            break;
            case 'porcent':
            
            break;
            case 'igual':
            
            break;
            case 'ponto':
            
            break;

            default:
                this.setError();
                break;
            case '0':    
            case '1':
            case '2':
            case '3': 
            case '4':
            case '5':
            case '6':
            case '7': 
            case '8':
            case '9':
            this._displayCalc = value;               
                break;

         }

    }

    //adicionando eventos aos botões
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#btn");

        

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e=>{

               let textBtn = btn.className.replace("btn-", "");
            
               this.execBtn(textBtn);
               //console.log(textBtn);
    
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                btn.style.cursor = "pointer";

            }); 

        });   
        
    }

    //get e set do display
    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    

}