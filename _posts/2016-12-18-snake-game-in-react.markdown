---
layout: post
title:  "Snake game using react"
date:   2016-12-18 17:34:04 +0530
categories: react
---
[source][source]

<html>

<div id="snake"></div>

<style type="text/css">
@media (max-width: 350px){
  .block {
    width: 16px;
    height: 16px;
    float: left;
  }
}
@media (min-width: 350px) and (max-width: 500px){
  .block {
    width: 20px;
    height: 20px;
    float: left;
  }
}
@media (min-width: 500px) and (max-width: 640px){
  .block {
    width: 20px;
    height: 20px;
    float: left;
  }
}
@media (min-width: 640px) {
  .block {
    width: 35px;
    height: 35px;
    float: left;
  }
}

.block {
  background-color: black;
}
.marked {
  background-image: radial-gradient(yellow, black);
}
.bait{
  background-image: radial-gradient(white, black);
}
.clearfix {
  clear: both
}

</style>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

<script type="text/babel">
  class Block extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      var blockClass = 'block'
      if(this.props.bait){
        blockClass = blockClass + ' ' + 'bait'
      }
      if(this.props.marked){
        blockClass = blockClass + ' ' + 'marked'
      }

      return(
        <div className={blockClass} />
      )
    }
  }

  class Snake extends React.Component {
    constructor(props) {
      super(props)
      this.direction = {
        left:[0,-1],
        right:[0,1],
        up:[-1,0],
        down:[1,0]
      }
      this.state = {body: [[5,4],[4,4],[3,4]],
              current_direction: 'down',
              bait_position:[9,6]}
      this.onKeyDown = this.onKeyDown.bind(this)
      this.checkContact = this.checkContact.bind(this)
      this.placeBait = this.placeBait.bind(this)
    }
    componentDidMount() {
      
      $(document.body).on('keydown', this.onKeyDown)
      this.moveSnake()
    }

    onKeyDown(e)
    {
      
      if(e.keyCode == 37){
        this.setState({body: this.state.body, current_direction: 'left'})

      }
      else if(e.keyCode == 38){
        this.setState({body: this.state.body, current_direction: 'up'})
      }
      else if(e.keyCode == 40){
        this.setState({body: this.state.body, current_direction: 'down'})
      }
      else if(e.keyCode == 39){
        this.setState({body: this.state.body, current_direction: 'right'})
      }
    }
    placeBait() {

      var bait_position = [Math.floor(Math.random()*10),Math.floor(Math.random()*10)]
      const that = this
      var included = false
      this.state.body.forEach(function(e) {
        if(bait_position[0] === e[0] && bait_position[1] === e[1])
          included = true
      })
      if(included)
        this.placeBait()
      else
        this.setState({['bait_position']: bait_position})
    }



    moveSnake(){
      var body = this.state.body
      var head = body[0]

      var new_head = [head[0] + this.direction[this.state.current_direction][0], head[1] + this.direction[this.state.current_direction][1]]
      if(new_head[0] == this.state.bait_position[0] && new_head[1] == this.state.bait_position[1])
      { 
        var limit=body.length
        this.placeBait()
      }else{
        var limit=body.length-1
      }

      for(var i=limit; i>-1; i--){
        body[i] = body[i-1]
      }
      body[0] = new_head

      if(this.checkContact(new_head,body)){
        this.setState({body: body,
           current_direction:this.state.current_direction,
           bait_position: this.state.bait_position,
           message: 'Use Arrow Keys'
        })
        setTimeout(function(){ this.moveSnake()}.bind(this), 400)
      }else{
          
          
        this.setState({body: [[5,4],[4,4],[3,4]],
              current_direction: 'down',
              bait_position:[9,6],
              message: 'Game Over'
        })
        setTimeout(function(){ this.moveSnake()}.bind(this), 2000)
        
      } 
        
      
        

    }
    checkContact(new_head, body) {
      for(var i=1; i< body.length; i++){
        if(new_head[0] == body[i][0] && new_head[1] == body[i][1])
          return(false)
      }
      return(new_head[0] < parseInt(this.props.height) && new_head[0] > -1 && new_head[1] < parseInt(this.props.width) && new_head[1] > -1)
    }

    render() {
      var board = []
      for(var i=0; i< parseInt(this.props.height); i++) {
        board[i] = []
        for(var j=0; j< parseInt(this.props.width); j++) {
          board[i][j] = <Block marked={ false } />
        }
        board[i][parseInt(this.props.width)]= <div className="clearfix" />
      }

      for(i=0; i< this.state.body.length; i++){
        var body_segment = this.state.body[i]
        board[body_segment[0]][body_segment[1]] = <Block marked={ true } />
      }
      board[this.state.bait_position[0]][this.state.bait_position[1]] = <Block bait={ true } />

      return(
        <div className="snake">
          <h1>{this.state.message}</h1>
          {board}
        </div>
      )

    }
  }
  $(document).ready(function(){
    ReactDOM.render(<Snake width="12" height="12"/>, document.getElementById('snake'))
  })
</script>
</html>

[source]: https://github.com/dileepnandanam/reactsnake