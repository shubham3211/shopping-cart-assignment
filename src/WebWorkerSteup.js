export default class WebWorker {
  constructor(worker){
    worker = worker.bind(this);
    console.log('worker :', worker);
    let code = worker.toString();
    const blob = new Blob(['('+code+')()']);
    console.log('URL.createObjectURL(blob) :', URL.createObjectURL(blob));
    console.log('blob :', blob);
    return new Worker(URL.createObjectURL(blob));
  }
}