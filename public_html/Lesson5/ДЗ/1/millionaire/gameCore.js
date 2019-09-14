var correctAnswers = 0,
	money = 0;

for(var i = 1; i <= Object.keys(questions).length; i++){
	question = eval("questions.q" + i);
	
	var answer = prompt(question.q + "\n" + 
		"1. " + question.a1 + " \n" +
		"2. " + question.a2 + " \n" +
		"3. " + question.a3 + " \n" +
		"4. " + question.a4);
	if(answer == question.ac){
		correctAnswers++;
		money += 10000;
		alert("Правильно!");
	} else {
		var lost = true;
		alert("Неправильно... Вы проиграли.");
		break;
	}
}

if(correctAnswers > 0 && !lost){
	alert("Правильных ответов: " + correctAnswers + "\n" + "Заработано денег: " + money);
}