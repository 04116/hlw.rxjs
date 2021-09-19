import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi')
  }, 1000);
});

observable.subscribe({
  next: (data) => {
    console.log("next", data);
  }
})