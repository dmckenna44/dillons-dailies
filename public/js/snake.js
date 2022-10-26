class Head {
    constructor(el) {
      this.node = document.createElement('div');
      this.node.setAttribute('id', 'head');
      el.appendChild(this.node);
      
      this.boardRectangle = el.getBoundingClientRect();
      console.log(this.boardRectangle);
  
      this.currentDirection = 'right';
      this.SPEED = 500; 
  
      this.node.style.top = '350px';
      this.node.style.left = '350px';
  
      this.moveID = setInterval(this.move.bind(this), this.SPEED);
      
      this.body = new Body(this.node);
    }
    
    
    move() {
      const head = this.node;
      const headRectangle = head.getBoundingClientRect();
      if (Math.abs(headRectangle.right - this.boardRectangle.right) <= 20 ||
          Math.abs(headRectangle.top - this.boardRectangle.top) <= 20 ||
          Math.abs(headRectangle.left - this.boardRectangle.left) <= 20 ||
          Math.abs(headRectangle.bottom - this.boardRectangle.bottom) <= 20 
      ) {
        console.log('cleared');
        clearInterval(this.moveID);
        return;
      }
      
  
      const direction = this.currentDirection;
      console.log('board', this.boardRectangle);
      console.log('head', headRectangle);
  
      let topPosition = Number(head.style.top.replace('px', ''));
      let leftPosition = Number(head.style.left.replace('px', ''));
  
      if (direction === 'right') {
        head.style.left = `${(leftPosition += 50)}px`;
      }
     
      if (direction === 'left') {
        head.style.left = `${(leftPosition -= 50)}px`;
      }
  
      if (direction === 'up') {
        head.style.top = `${(topPosition -= 50)}px`;
      }
  
      if (direction === 'down') {
        head.style.top = `${(topPosition += 50)}px`;
      }
      this.eatApple();
      
      for (let i = 0; i < this.body.snake.length; i++) {
        let segment = this.body.snake[i];
        let left = segment.style.left;
        let top = segment.style.top;
        segment.style.left = `${leftPosition}px`; 
        segment.style.top = `${topPosition}px`;
        // Update old head position to the old position of snake[i]
        leftPosition = left;
        topPosition = top;
      }
  
      // this.body.snake.forEach((segment, i, snake) => {
      //   console.log(snake[i-1]); 
      //     // Top position & left position start at heads position before moving
      //     let left = segment.style.left;
      //     let top =  segment.style.top;
      //     // Set the next segments left and top to old head position
      //     segment.style.left = `${leftPosition}px`; 
      //     segment.style.top = `${topPosition}px`;
      //     // Update old head position to the old position of snake[i]
      //     leftPosition = left;
      //     topPosition = top;
  
      // })
    }
  
    eatApple() {
      const apple = document.querySelector('#apple');
      console.log(apple);
      const appleX = apple.getBoundingClientRect().left;
      const appleY = apple.getBoundingClientRect().top;
          console.log(appleX);
      // Check if the head x coordinate is within 20px of the apple x coordinate and same with the y
      const headX = this.node.getBoundingClientRect().left;
      const headY = this.node.getBoundingClientRect().top;
      // If so, remove the apple and add a segment to the snake
      if (Math.abs(appleX - headX) <= 40 && Math.abs(appleY - headY) <= 40) {
        board.removeChild(apple);
        this.body.addSegment();
        new Apple(board);
      }
    }
  
  }
  
  class Body {
    constructor(head) {
        this.snake = [head]; //[head, segment]
        // el.appendChild(head);

        // head.style.top = '350px';
        // head.style.left = '350px';
    }

    addSegment() {
      const segment = document.createElement('div');
      segment.classList.add('segment');
      this.snake.push(segment);
      const board = document.querySelector('#board');
      board.appendChild(segment);

      // Position of last segment
      const tailX = this.snake.at(-2).getBoundingClientRect().left;
      console.log('snake', this.snake);
      console.log('tailx', tailX);
      const tailY = this.snake.at(-2).getBoundingClientRect().top;
      console.log('taily', tailY);

      segment.style.left = this.snake[this.snake.length - 2].style.left;
      segment.style.top = this.snake[this.snake.length - 2].style.top;
      console.log(this.snake[this.snake.length - 1].style.left);
      console.log(this.snake[this.snake.length - 2]);
    }
}

class Segment {
    constructor() {
    this.node = document.createElement('div');
    this.node.classList.add('segment');
    }

    addPiece(tail) {
        // Get the x and y coordinates of the last piece (tail)
        // Check which direction the snake is moving, and set the coordinates of the new piece accordingly

        const body = document.querySelectorAll('.segment');
        
        const board = document.querySelector('#board');
        console.log('apple has been eaten');

        const tailX = tail.getBoundingClientRect().left;
        const tailY = tail.getBoundingClientRect().top;
        if (this.currentDirection === 'right') {
            this.node.style.left = `${tailX - 50}px`
        }
        if (this.currentDirection === 'left') {
            this.node.style.left = `${tailX + 50}px`
        }
        if (this.currentDirection === 'up') {
            this.node.style.top = `${tailY - 50}px`
        }
        if (this.currentDirection === 'down') {
            this.node.style.top = `${tailY + 50}px`
        }
    }
}

class Apple {
    constructor(el) {
      this.node = document.createElement('img');
      this.node.setAttribute('id', 'apple');
      this.node.setAttribute('src', 'src/assets/apple.jpg');
  
      el.appendChild(this.node);
      
      this.node.style.left = `${randomNum(10, 700)}px`
      this.node.style.top = `${randomNum(10, 700)}px`
      // this.node.style.left = '300px';
      // this.node.style.top = '300px';
    }
    
    // displayApple() {
    //   // Generate random coordinates for the apple
  
    //   // First check the position of each segment of the snake
    //   // If the apple will spawn on top of the snake, generate new coordinates and check again
    //   // If the apple will NOT spawn on top of the snake, append it to the board
    //   el.appendChild(this.node);
      
    //   this.node.style.left = '300px';
    //   this.node.style.top = '300px';
    // }
  }
  
  function newApple() {
    const apple = new Apple(board);
    
    apple.style.left = randomNum(10, 700)
    apple.style.top = randomNum(10, 700)
  
  }
  const randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min));
  }
  
  console.log(randomNum(10, 700));
  // console.log(apple.style.left)
  
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const board = document.querySelector('#board');
  
    const head = new Head(board);
    const snake =  new Body(head);
    new Apple(board);
    head.eatApple();
  
    body.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft') {
        console.log('pressed left');
        if(head.currentDirection !== 'right') head.currentDirection = 'left';
      }
      console.log(e.code)
    });
    body.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowRight') {
        console.log('pressed right');
        if (head.currentDirection !== 'left') head.currentDirection = 'right';
      }
      console.log(e.code)
    });
    body.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowUp') {
        console.log('pressed up');
        if (head.currentDirection !== 'down') head.currentDirection = 'up';
      }
      console.log(e.code)
    });
    body.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowDown') {
        console.log('pressed down');
        if (head.currentDirection !== 'up') head.currentDirection = 'down';
      }
      console.log(e.code)
  });
  })

  moveBody(timeoutID) {
    const {top: headTop, left: headLeft} = this.headPosition[0];

    for (let i =0; i < this.bodyParts.length; i++) {
        const currentBody =  this.bodyparts[i].node.style;
        if (
            headTop ===currentBody.top &&
            headLeft == currentBody.left
        ) {
            return this.endGame(timeoutID)
        }
        const {top: newTop, left: newLeft } = this.headPosition[i + 1];
        currentBody.top = newTOp px
        currentBody.left = newLeft px
    }
  }

