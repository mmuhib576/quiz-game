var questions = [
    "What is the capital of Ontario?<br /><input type = radio  id=correct_opt onclick= correct_option()>Toronto</input><br /><input type = radio id=incorrect_opt onclick= incorrect_option()>Brampton</input><br />",
    "What is the value of 1CND in INR?<br /><input type = radio  id=incorrect_opt onclick= incorrect_option()>80</input><br /><input type = radio id=correct_opt onclick= correct_option()>60</input><br />",
    "What is the smallest province in Canada ?<br /><input type = radio  id=incorrect_opt onclick= incorrect_option()>Nova Scotia</input><br /><input type = radio id=correct_opt onclick= correct_option()>Prince Edward Island</input><br />",
    "When is Canada's birthday?<br /><input type = radio id=incorrect_opt onclick= incorrect_option()>4th July</input><br /><input type = radio id=correct_opt onclick= correct_option()>1st July</input><br />",
    "How many provinces does Canada have?<br /><input type = radio id=incorrect_opt onclick= incorrect_option()>20</input><br /><input type = radio id=correct_opt onclick= correct_option()>10</input><br />","0"
]
var answers = [
    "The answer is Toronto",
    "The answer is 60",
    "The answer is Prince Edward Island",
    "The answer is 1st July",
    "The answer is 10","0"
]
var numbers = 0;
        numbers++;

        var scores = 0;
        scores++;

function next()
{
    number.innerHTML = numbers++;
    question.innerHTML = questions.shift();
    messages.innerHTML = "";
    next_button.innerHTML = "";
    if(questions == questions.length)
    {
        question.innerHTML = "End of Quiz";
        number.innerHTML = numbers - 2;
    }
}
function begin()
{
    begin_btn.innerHTML = " ";
    number.innerHTML = numbers++;
    question.innerHTML = questions.shift();
}
function correct_option()
{
    score.innerHTML = scores++;
    messages.innerHTML = "Correct<br>" + answers.shift();
    messages.style.color = "DarkGreen";
    correct_opt.disabled = true;
    incorrect_opt.disabled = true;
    next_button.innerHTML = "<button class = buttons onclick = next()>Next</button>";
    
}
function incorrect_option()
{
    messages.innerHTML = "Incorrect<br>" + answers.shift();
    messages.style.color = "DarkRed";
    correct_opt.disabled = true;
    incorrect_opt.disabled = true;
    next_button.innerHTML = "<button class = buttons onclick = next()>Next</button>";
    
}