const btn = $("#btn");
const input = $("#input");
const output = $("#output");
//Observables from events
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

const inputStream$ = Rx.Observable.fromEvent(input, "keyup");

inputStream$.subscribe(
  e => {
    console.log(e.target.value);
    output.append(e.target.value);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("Completed");
  }
);

const moveStream$ = Rx.Observable.fromEvent(document, "mousemove");

moveStream$.subscribe(
  e => {
    console.log(e.target.value);
    output.html("<h1>x:" + e.clientX + " y:" + e.clientY + "</h1>");
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("Completed");
  }
);

//Observables from array like objects
const nums = [22, 3, 44, 55, 66, 77, 88, 99];
const nums$ = Rx.Observable.from(nums);

nums$.subscribe(
  val => {
    console.log(val);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("completed!");
  }
);

const posts = [
  { title: "Title one", body: "body one" },
  { title: "Title two", body: "body two" },
  { title: "Title three", body: "body three" }
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(
  post => {
    $("#posts").append(
      "<li><h1>" + post.title + "</h1><p>" + post.body + "</p></li>"
    );
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("completed!");
  }
);

//Observables from set
const set = new Set(["hello", 44, { title: "title one" }]);

const set$ = Rx.Observable.from(set);
set$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("completed");
  }
);

//Observables from map
const map = new Map([[1, 2], [3, 4], [5, 6]]);

const map$ = Rx.Observable.from(map);
map$.subscribe(
  v => {
    console.log(v);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("completed");
  }
);

//Observables from scratch
const source$ = new Rx.Observable(observer => {
  console.log("creating observable...");
  observer.next("hello world");
  observer.next("how are you?");

  observer.error(new Error("error: something is wrong..."));
  setTimeout(() => {
    observer.next("bye");
    observer.complete();
  }, 2000);
});

source$.catch(err => Rx.Observable.of(err)).subscribe(
  val => {
    console.log(val);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("completed");
  }
);

//Observables from interval
const int$ = Rx.Observable.interval(100).take(5);

int$.subscribe(
  x => {
    console.log(x);
  },
  err => {
    console.log(err);
  },
  () => {
    console.log("completed");
  }
);
