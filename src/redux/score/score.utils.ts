export const addAnswerToScore = (answers: any, answerToAdd: any) => {
    answers.push(answerToAdd);
    return [...answers]
}

export const calculateScore = (answers: any) =>{
    let score : boolean[] = []
    answers.forEach((element : string[]) => {
        let correctAnswer = false;
        if(element[0].toLowerCase() === element[1].toLowerCase()){
            correctAnswer = true;
        }
        score.push(correctAnswer)
    });
    return [...score]
}