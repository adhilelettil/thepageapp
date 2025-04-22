export abstract class servicebase {
    static Api_url= "https://blessed-books-6bae6d42bb.strapiapp.com/api"
 
    static geturl (path :string){
 
       return `${this.Api_url}${path}`
    }
 }