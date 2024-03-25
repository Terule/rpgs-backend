export class  PrismaError extends Error {
  public statusCode: number;
  public errorCode: string;

  constructor(message: string, statusCode: number, errorCode: string) {
    super(message);
    
    this.name = "PrismaError";
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}