// programmer: Francesco Cimino
// project: fizzbuzz

const row = document.querySelector(".row");

// loop-numbers-1-to-100
for (let i = 1; i <= 100; i++) {
    let output = "";

    // conditions
    if (i % 3 === 0 && i % 5 === 0) {
        output = `fizzbuzz`;
    } else if (i % 3 === 0) {
        output = `fizz`;
    } else if (i % 5 === 0){
        output = `buzz`;
    } else {
        output = i;
    };
    
    //output-data
    const schedule = document.createElement("div");
    schedule.classList.add("schedule");
    schedule.classList.add(output);
    schedule.innerHTML += output;
    row.append(schedule);
}