const btn = $("#btn");

const btnStream$ = Rx.Observable.fromEvent(btn, "click");

btnStream$.subscribe(
  e => {
    console.log(e);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("Completed");
  }
);
