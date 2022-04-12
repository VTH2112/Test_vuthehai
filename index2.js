const arr = [60,40,55,75,64]

function alternatingSums(a){
    let team1 = []
    let sum1 = 0
    let sum2 = 0
    let sum = []
    let team2 = []
    for(let i = 0 ; i < a.length ; i++){
                if(i % 2 == 0){
                    team1.push(a[i])
                   
                }else{
                    team2.push(a[i])
                   
                }           
    }
            team1.forEach(element => {
                sum1 += element
            });
            team2.forEach(element => {
                sum2 += element
            });
            sum.push(sum1 , sum2)
            console.log(sum);
    return a
}
alternatingSums(arr)