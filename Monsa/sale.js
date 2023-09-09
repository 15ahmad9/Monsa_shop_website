async function getData(){

    let resp=await fetch('https://fakestoreapi.com/product s');
    let data =await resp.json();
    render(data);
  }
  getData();
  function render(data){

    let table=`<tr>
    <th>id</th>
    <th>title</th>
    <th>price</th>
    <th>description</th>
    <th>category</th>
    <th>image</th>
    
    
    </tr>`;
    
        
    for(let key in data){
        console.log(data[key]);
        table+= `<tr>
        <td>${data[key].id}</td>
        <td>${data[key].title}</td>
        <td>${data[key].price}</td>
        <td>${data[key].description}</td>
        <td>${data[key].category}</td>
        <td><img src= ${data[key].image}></td>
        
        
        
        </tr>`
    }
   document.getElementById("app").innerHTML= table;



}