const greet = () => {
  console.log('index')
}

greet()

@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}