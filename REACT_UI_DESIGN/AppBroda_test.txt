const myFunction = (arr)=>{
	let x = 0;
	arr.forEach((data)=>{	
  console.log("data",data)
  	console.log(arr);
		x+=data;
    	console.log(x);
		arr.shift();	
});
return x;
} 

console.log(myFunction([1,2,3,4,5,6,7,8,9]));


//-------------
const [counter,setCounter] = useState(0);
console.log(counter);
useEffect(()=>{
	setCounter(counter+1);
	 console.log(counter);
},[]);
 
 
 //--------
const [counter,setCounter] = useState(0);
const tempRef = useRef(0);
console.log(counter);
useEffect(()=>{
	setCounter(counter+1);
	 console.log(counter);
},[counter]);

useEffect(()=>{
	 console.log(tempRef);
   tempRef.current+=1;
},[counter,tempRef]);


const ApiComponent = () =>{
	const [data,setData] = useState(null);
  	
  const apiCall =  async () => {
  	try{
    	const data = await axios.get("url");
      setData(data);
    }catch(err){
    	console.log(err);
    }
  }
  
	useEffect(apiCall,[]);

} 


//---------------------------------
function prime(){
	return [47,43,41,37,31,29,23,19,17,13,11,7,5,3,2];
}

function factorial(prime){
	let result = [];
	let primeArray = prime();
  
  primeArray.map((ele,index)=>{
  		let factorial = 1;
      for(let i = 2 ;i < ele ;i++){
      	factorial *= i;
      }
      result.push(factorial);
  });
  
	return result;
}

//------------------------------------------
// decreasing length will decrase breadth
// decreasing breadth will decrase length




