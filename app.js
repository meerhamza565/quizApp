function check(){
    var result = document.getElementById('result')
    var ans = document.createElement('p')
    ans.setAttribute('id','sco')
    var score = 0;


    //qno1
    var rightansq1 = document.getElementById('q1-a1')
    var q1Wrong = document.getElementById('q1-a2')
    var q1Wrong = document.getElementById('q1-a3')
    var q1Wrong = document.getElementById('q1-a4')

    if(rightansq1.checked == true){
        score++
    }
    //qno2
    var rightansq2 = document.getElementById('q2-a2')
    var q2Wrong = document.getElementById('q2-a1')
    var q2Wrong = document.getElementById('q2-a3')
    var q2Wrong = document.getElementById('q2-a4')

    if(rightansq2.checked == true){
        score++
    }

    //qno3
    var rightansq3 = document.getElementById('q3-a4')
    var q3Wrong = document.getElementById('q3-a1')
    var q3Wrong = document.getElementById('q3-a2')
    var q3Wrong = document.getElementById('q3-a3')

    if(rightansq3.checked == true){
        score++
    }
    //qno4
    var rightansq4 = document.getElementById('q4-a1')
    var q4Wrong = document.getElementById('q4-a4')
    var q4Wrong = document.getElementById('q4-a2')
    var q4Wrong = document.getElementById('q4-a3')

    if(rightansq4.checked == true){
        score++
    }
     //qno5
     var rightansq5 = document.getElementById('q5-a2')
     var q5Wrong = document.getElementById('q5-a4')
     var q5Wrong = document.getElementById('q5-a1')
     var q5Wrong = document.getElementById('q5-a3')
 
     if(rightansq5.checked == true){
         score++
     }








     


    ans.innerHTML = score++
    result.appendChild(ans)
}

// // student name
// function startquiz(){
// var name = document.getElementById('name')
// var nametext = document.createTextNode(name.value)
// alert(nametext)



// }