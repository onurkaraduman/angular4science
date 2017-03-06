export class ErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    alert(error.toString());
  }

}
