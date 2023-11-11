class Job{
    constructor(jobTitle,place,salary){
        this.title=jobTitle;   
        this.location=place;
        this.salary=salary;

        }
        describe(){
            console.log(`Iam a ${this.title} I work in ${this.location} and I earn ${this.salary} .`);
        }
}
const developer =new Job('Developer','Newyork',50000);
developer.describe();