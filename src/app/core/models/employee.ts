export class Employee{
    employeeId!:number;
    firstName!:string;
    lastName!:string;
    technology!:string;
    designation!:string;
    skill!:string;
    coreExpertise!:string;
    isCertification!:string;
    company!:string;
    fewDetails!:string;

    constructor(){
       this.employeeId=0; 
       this.firstName="";
       this.lastName="";
       this.technology="";
       this.designation="";
       this.skill="";
       this.coreExpertise="";
       this.isCertification="";
       this.company="";
       this.fewDetails="";
    }
}
