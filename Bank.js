class Bank
{
    constructor(pamountinvested,pinterestrate)
    {
        this.amount=pamountinvested;
        this.interestrate=pinterestrate;
    }  
  interest_concept=()=>
     {
        let amountinvested=this.amount;
        let calcrate=this.interestrate/100;
        let interest=amountinvested*calcrate;
        let balanced_generated=amountinvested+interest;
        return {amountinvested,interest,balanced_generated}    
    }

   
}
module.exports={Bank}