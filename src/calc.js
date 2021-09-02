export function sum(input) {
    if(input===null || input === undefined)return 0;
    
    if(/^\/\//.test(input)){
        let delimiter =''
        if(input.charAt(2)!='['){

             delimiter = input.charAt(2)
             input = input.replace(/\n/g,'')
        input = input.split(`${delimiter}`).join()
        input = input.replace(/\//g,'0')
        }else{
            delimiter = input.charAt(3)+input.charAt(6)
            delimiter = delimiter.split('')
           delimiter.map(delimit => input = input.split(`${delimit}`).join())
            console.log(delimiter,input)
        }
        
        //input = input.replace(new RegExp(`${delimiter}`), ',')
        
       
    }else if(/-/.test(input)){
        input = input.split(',')
        const charIndex = []
        input.map((char,index)=> {
            if(/-/.test(char)){
                charIndex.push(index)
            }
        })
       
        const indexString = charIndex.map(num => input[num]).join(',')
        throw new Error(`negatives not allowed: ${indexString}`)
       
    }
    else if(/^\[/.test(input)){
        // input = input.split('[')
        // console.log(input.length,input)
        // input.map(str =>{

        // })
        console.log('k')

       const startIndex=input.indexOf('[');
       const endIndex = input.indexOf(']')
       const delimiter = input.substr(startIndex+1,endIndex-1)
       input = input.split(`${delimiter}`).join()
    }
   
    input = input.replace(/\n/g, ',')
   
    const numbers = input.split(',').map(element => {
        const num = parseInt(element)
        if(num<=1000)
        return num
        else return 0;
        });
    return numbers.reduce((acc,init)=> acc+init)
        
}