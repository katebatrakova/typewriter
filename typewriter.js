const sentence = "hello there from lighthouse labs";
let initialDelay = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char) + '\n'
  }, initialDelay);
  initialDelay += 50;
}