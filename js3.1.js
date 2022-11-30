const arr=['#D6EEEE','lightpink',"blueviolet","chocolate","darkslategrey","grey","beige","aqua"]


function fun1()
{

    const index = Math.floor(Math.random()*arr.length);
    document.body.style.backgroundColor=arr[index];
    document.getElementById("remo").style.display="none";
    document.getElementById("btn").style.backgroundColor=arr[index-1];
    
      
} 


//for Assignment-3.2.html


function fun()
{
   
    var arr=["<p>Bachelor of the technology(computer science)</p>","Keshav Memorial Institute of Technology","JNTUH","-","-",
    "<p>intermediate-MPC</p>","Narayana Junior Collage,Ts","-","2021","9.74",  
    "<p>School of Secondary Certificate</p>","Keshava reddy school","ssc","2019","9.5"]

    var sai=`<table style="width: 100%; border: 2px solid black ;">`
    
        sai+=`<thead>`;
        sai+=`<tr style="height: 40px;">`;
        sai+=`<th style="width:34%; text-align: left;"><p>course Details</p></th>`;
        sai+= `<th style="width: 31% ; text-align: left;">Institution</th>`
        sai+=` <th style="width: 14% ; text-align: left;">university/Board</th>`;
        sai+=`<th style="width: 14% ; text-align: left;">Year of passing</th>`;
        sai+=`  <th style="width: 7% ; text-align: left;">CGPA</th>`;

        sai+=`</tr>`;
        sai+=`</thead>`;

        sai+=`<tr style="height: 30px;">`;
        sai+=`<td>`+arr[0]+`</td>`;
        sai+=`<td>`+arr[1]+`</td>`;
        sai+=`<td>`+arr[2]+`</td>`;
        sai+=`<td>`+arr[3]+`</td>`;
        sai+=`<td>`+arr[4]+`</td>`;
        sai+=`</tr>`;

        sai+=`<tr style="height: 30px;">`;
        sai+=`<td>`+arr[5]+`</td>`;
        sai+=`<td>`+arr[6]+`</td>`;
        sai+=`<td>`+arr[7]+`</td>`;
        sai+=`<td>`+arr[8]+`</td>`;
        sai+=`<td>`+arr[9]+`</td>`;
        sai+=`</tr>`;
        
        sai+=`<tr style="height: 30px;">`;
        sai+=`<td>`+arr[10]+`</td>`;
        sai+=`<td>`+arr[11]+`</td>`;
        sai+=`<td>`+arr[12]+`</td>`;
        sai+=`<td>`+arr[13]+`</td>`;
        sai+=`<td>`+arr[14]+`</td>`;
        sai+=`</tr>`;

        
        


   
    document.getElementById("rem").innerHTML=sai;
    document.body. style.backgroundColor="white";  
       
}