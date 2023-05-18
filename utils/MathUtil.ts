export class MathUtil{

    public static printMathTable(value:number):string{
        let tempStr:string ='';

        for(let i=1;i<=10;i++)
        {
            tempStr+= `${value} * ${i} = ${value*i} <br/>`
        }
        return tempStr;
    }
}