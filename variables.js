function redirect() {
    
    var username = document.getElementById("user").value;
    if (!username) {
        alert("Please Enter Username")
        return;
    }
    localStorage.setItem("user",username);
    window.location.href = "code.html";

}

function showusername()  {
    var username = localStorage.getItem("user")
    document.getElementById("displayuser").textContent = username;
}

function nextredirect() {

    window.location.href = "workouts.html";
}

let userworkout;      
function userpersonal() {
    let fitnessgoal = document.querySelector('input[name="fitnessgoal"]:checked')?.value;
    let workpreference = document.querySelector('input[name="preference"]:checked')?.value;
    let time = document.querySelector('input[name="hours"]:checked')?.value;
    let workintensity = document.querySelector('input[name="intensity"]:checked')?.value;
    let motivation = document.querySelector('input[name="motivation"]:checked')?.value;
    if (!fitnessgoal || !workpreference || !time || !workintensity ||!motivation) {
        alert("Please complete all fields.");
        return; 
    }

    let scores = {
        Bodybuilding: 0,
        CrossFit: 0,
        StrengthTraining: 0,
        HIIT: 0,
        FunctionalTraining: 0,
        YogaPilates: 0
      };

    // Question 1: Primary Fitness Goal
    if (fitnessgoal === 'muscle') { scores.Bodybuilding += 5; scores.StrengthTraining += 3; }
    else if (fitnessgoal === 'cardiovascular') { scores.HIIT += 4; scores.CrossFit += 3; }
    else if (fitnessgoal === 'flexibility') { scores.YogaPilates += 5; }
    else if (fitnessgoal === 'functional') { scores.FunctionalTraining += 4; scores.CrossFit += 2; }
    else if (fitnessgoal === 'maximize') { scores.HIIT += 3; scores.FunctionalTraining += 2; }

    // Question 2: How do you prefer to work out?
    if (workpreference === 'community') { scores.CrossFit += 4; scores.YogaPilates += 2; }
    else if (workpreference === 'alone') { scores.Bodybuilding += 3; scores.StrengthTraining += 2; }
    else if (workpreference === 'environment') { scores.FunctionalTraining += 3; scores.HIIT += 1; }
    else if (workpreference === 'outdoors') { scores.FunctionalTraining += 4; scores.YogaPilates += 3; }

    // Question 3: How much time can you dedicate to working out each week?
    if (time === 'lthree') { scores.HIIT += 4; scores.YogaPilates += 3; }
    else if (time === 'bthree') { scores.StrengthTraining += 3; scores.CrossFit += 2; }
    else if (time === 'mthree') { scores.Bodybuilding += 5; scores.FunctionalTraining += 2; }

    // Question 4: What kind of workout intensity do you prefer?
    if (workintensity === 'high') { scores.HIIT += 5; scores.CrossFit += 3; }
    else if (workintensity === 'moderate') { scores.StrengthTraining += 4; scores.FunctionalTraining += 3; }
    else if (workintensity === 'low') { scores.YogaPilates += 5; }

    // Question 5: What motivates you to keep up with your fitness routine?
    if (motivation === 'visible') { scores.Bodybuilding += 4; scores.CrossFit += 2; }
    else if (motivation === 'healthier') { scores.HIIT += 3; scores.FunctionalTraining += 4; }
    else if (motivation === 'enjoyment') { scores.YogaPilates += 4; }
    else if (motivation === 'shared') { scores.CrossFit += 5; scores.YogaPilates += 3; }
    
        
    userworkout = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    localStorage.setItem('userWorkout', userworkout); 
    document.getElementById('myworkout').innerHTML = `Your recommended workout is: ${userworkout}`;
    document.getElementById("sick").style.visibility="visible";
    

}



function nextredirect2() {
   
    window.location.href = "workoutplan.html";
    
}


