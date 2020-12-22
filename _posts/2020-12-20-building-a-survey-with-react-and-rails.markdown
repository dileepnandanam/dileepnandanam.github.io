---
layout: post
title:  "Building a survey using React and Ruby on Rails"
date:   2020-12-20 17:34:04 +0530
categories: react
---
![form](/assets/react_rails_survey.png)

[source][source]
## React Part
Here is a survey response form, which makes use of nested attributes feature. The basic idea is to build a Survey component from JSON of the following structure.

{% highlight ruby %}
{
  questions: [
    {
      id: 1,
      answertype: 'checkbox',
      options: [
        {id: 1, name: 'Music', checked: false},
        {id: 1, name: 'Reading', checked: false},
        {id: 1, name: 'TV', checked: false}
      ],
      name: 'Your likes',
      errors: ''
    },
    {
      id: 2,
      answertype: 'text_field',
      text_field: '',
      name: 'your name'
      errors: ''
    },
    {
      id: 2,
      answertype: 'textarea',
      textarea: '',
      name: 'Add Bio'
      errors: ''
    }
  ]
}

{% endhighlight %}

We can maintain this as state for survey component and render form elements inside, based on `answertype` attribute.
And after filling the data, Survey component should post json of the following format.

{% highlight  ruby %}

{
  answers_attributes: {
    0: {
      question_id: 1,
      choices_attributes: {
        0: {option_id: 1},
        1: {option_id: 2}
      }
    }
    1: {
      question_id: 2,
      text_field: 'Dileep'
    }
    2: {
      question_id: 3,
      textarea: 'I am Dileep'
    }
  }
}

{% endhighlight %}

Which can be directly assign to the response object to build the survey response.

Lets see the Survey Component

{% highlight jsx %}

class Survey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {questions: props.questions}
    this.update = this.update.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  update(data) {
    var position = -1
    this.state.questions.forEach(function(q, i) {
      if(data.id == q.id)
        position = i
    })
    var state = this.state
    state.questions[position] = data
  }

  onClick(e) {
    e.preventDefault()
    var data = {response: {answers_attributes: {

    }}}

    this.state.questions.forEach(function(q, i) {
      if(q.answertype == 'checkbox') {
        data.response.answers_attributes[i] = {
          question_id: q.id,
          choices_attributes: q.options.filter(option => (option.checked == true)).map(function(option) {
            return({option_id: option.id})
          })
        } 
      }
      else if(q.answertype == 'textarea') {
        data.response.answers_attributes[i] = {
          question_id: q.id,
          textarea: q.textarea
        }
      }
      else if(q.answertype == 'text_field') {
        data.response.answers_attributes[i] = {
          question_id: q.id,
          text_field: q.text_field
        }
      }
    })
    
    const that = this
    fetch('/responses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => (res.json()))
    .then(function(res) {
      if(res.res == 'ok') {
        alert('success')
      }
      else {
        that.setState({questions: res})
      }
    })

  }

  render() {
    const that = this
    const questions = this.state.questions.map(function(q, i) {
      if(q.answertype == 'checkbox')
        return(<Checkbox {...q} update={that.update}/>)
      else if(q.answertype == 'textarea')
        return(<Textarea {...q} update={that.update}/>)
      else if(q.answertype == 'text_field')
        return(<TextField {...q} update={that.update}/>)
    })

    return(
      <div className="survey">
        <h1>Give Details</h1>
        {questions}
        <button type="submit" onClick={this.onClick} >Submit</button>
      </div>
    )
  }
}
{% endhighlight jsx %}

In Survey component, the method `update` is passed as props to each form elements. when each elements get changed, the present state is passed to Survey component, which will be converted to nested attributes before sending to server via the onClick method.

Lets check the form Components.

{% highlight jsx %}
class Textarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.update({...this.state, textarea: e.target.value})
    this.setState({['textarea']: e.target.value})
  }

  render() {
    return(
      <div className="question">
        <label>
          {this.state.name}
        </label>
        <br />
        <textarea type="textarea" name="textarea" value={this.state.textarea} onChange={this.onChange}/>
        {this.state.errors}
      </div>
    )
  }
}

class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.update({...this.state, text_field: e.target.value})
    this.setState({['text_field']: e.target.value})
  }

  render() {
    return(
      <div className="question">
        <label>
          {this.state.name}
        </label>
        <br />
        <input type="text_field" name="text_field" value={this.state.text_field} onChange={this.onChange}/>
        {this.state.errors}
      </div>
    )
  }
}



class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    var position = -1
    this.state.options.forEach(function(o, i) {
      if(e.target.id == o.id)
        position = i
    })

    var state = this.state
    state.options[position].checked = e.target.checked
    this.props.update(this.state)
    this.setState(state)
  }

  render() {
    const that = this
    const cboxes = this.state.options.map(function(o, i) {
      return(
        <div className="option" key={i}>
          <input type="checkbox" id={o.id} onChange={that.onChange} checked={o.checked}/>
          <label htmlFor={o.id}>{o.name}</label>
        </div>
      )
    })

    return(
      <div className="question">
        {this.state.name}
        <br />
        {cboxes}
        {this.state.errors}
      </div>
    )

  }
}
{% endhighlight jsx %}

`Textarea` and `TextField` are simple controlled components.
`Checkbox` has a state in the form bellow.

{% highlight ruby %}
{
  id: 1,
  answertype: 'checkbox',
  options: [
    {id: 1, name: 'Music', checked: false},
    {id: 2, name: 'Magazines', checked: false},
    {id: 3, name: 'TV', checked: false}
  ],
  name: 'Your likes',
  errors: ''
}
{% endhighlight %}

This state used for rendering, with `options.id` as `id` attribute, so that, on each click on checkbox, we find an option using `e.target.id` and mark checked attribute using the value in `e.target.checked`. Also the new state is passed to Survey Component via `update` method.
Lets fetch the JSON from `responses/new` and render Survey

{% highlight jsx %} {
document.addEventListener('DOMContentLoaded', () => {
  fetch('/responses/new').then(res => (res.json()))
    .then(function(res) {
      ReactDOM.render(
        <Survey questions={res} />,
        document.body.appendChild(document.createElement('div')),
      )
    }) 
  })

}
{% endhighlight %}

## Rails Part

Now its the rails responsibility to prepare state of Survey Component. let's make schema for questions and answer objects.

{% highlight shell %}
$ rails g model question answertype:string name:string
$ rails g model response
$ rails g model answer question_id:integer response_id:integer textarea:text text_$ field:string name:string
$ rails g model option question_id:integer name:string
$ rails g model choice option_id:integer answer_id:integer
$ rake db:migrate
{% endhighlight %}

Now we can specify the relations.

{% highlight ruby %}
#models/question.rb
class Question < ApplicationRecord
  has_many :options
end
{% endhighlight %}
{% highlight ruby %}
#models/response.rb
class Response < ApplicationRecord
  has_many :answers
  accepts_nested_attributes_for :answers
  validates_associated :answers
end
{% endhighlight %}

{% highlight ruby %}
#models/answer.rb
class FieldPresenceValidator < ActiveModel::Validator
  def validate(record)
    if record.question.answertype == 'textarea'
      record.errors[:base] << 'can\'t be blank' if record.textarea.blank?
    elsif record.question.answertype == 'text_field'
      record.errors[:base] << 'can\'t be blank' if record.text_field.blank?
    else
      record.errors[:base] << 'chose atleast one' if record.choices.length == 0
    end
  end
end

class Answer < ApplicationRecord
  has_many :choice
  belongs_to :question
  accepts_nested_attributes_for :choices
  validates_with FieldPresenceValidator
end
{% endhighlight %}
For simplicity, I have added validation for each type of questions, and every question should be answered here.
{% highlight ruby %}
#models/choices
class Choice < ApplicationRecord
end
{% endhighlight %}
Choices defines answer for questions with `answertype` as checkbox. if answer object has a choice associated with `id` 1 means user selected "Music" and state has `{id: 1, name: 'Music', checked: true}` under options attributes.
Let's make a Checkbox Question
{% highlight ruby %}
q = Question.create(name: 'likes', answertype: 'checkbox')
q.options.create(name: 'music')
q.options.create(name: 'TV')
q.options.create(name: 'Reading')
{% endhighlight %}
Let's make Textarea and TextField questions
{% highlight ruby %}
q = Question.create(name: 'name', answertype: 'text_field')
q = Question.create(name: 'bio', answertype: 'textarea')
{% endhighlight %}

Our Responses Controller will be as follows

{% highlight ruby %}
class ResponsesController < ApplicationController
  protect_from_forgery with: :null_session
  def new
    if request.format.html?
      render 'new'
    else
      render json: survey_json(Question.all, Response.new, false)
    end
  end

  def create
    response = Response.new(response_params)
    if response.valid?
      response.save
      render json: {res: 'ok'}
    else
      render json: survey_json(Question.all, response, true)
    end
  end

  protected

  def survey_json(questions, response, with_errors)
    questions.map do |question|
      if question.answertype == 'checkbox'
        {
          id: question.id,
          answertype: question.answertype,
          options: question.options.map {|o| 
            {id: o.id, name: o.name, checked: answer_for(response, question, o)}
          },
          name: question.name,
          errors: errors_for(response, question, with_errors),
          key: question.to_s
        }
      elsif question.answertype == 'text_field'
        {
          id: question.id,
          answertype: question.answertype,
          text_field: answer_for(response, question, nil),
          name: question.name,
          errors: errors_for(response, question, with_errors),
          key: question.to_s
        }
      else
        {
          id: question.id,
          answertype: question.answertype,
          textarea: answer_for(response, question, nil),
          name: question.name,
          errors: errors_for(response, question, with_errors),
          key: question.to_s
        }
      end
    end
  end
  
  def answer_for(response, question, option)
    if question.answertype == 'checkbox'
      answer = answer_object(response, question)
      if answer.present?
        answer.choices.map(&:option_id).include?(option.id)
      end
    elsif question.answertype == 'text_field'
      answer_object(response, question).try(:text_field) || ''
    elsif question.answertype == 'textarea'
      answer_object(response, question).try(:textarea) || ''
    end
  end

  def answer_object(response, question)
    response.answers.find{|answer| question.id == answer.question_id}
  end

  def errors_for(response, question, with_errors)
    unless with_errors
      return []
    end
    answer = response.answers.find{|answer| question.id == answer.question_id}
    return answer.errors.full_messages.join(', ')
  end

  def response_params
    params.require(:response).permit(answers_attributes:[:question_id, :textarea, :text_field, choices_attributes:[:option_id]])
  end
end
{% endhighlight %}

Here the `survey_json` method prepare the JSON which is a collection of questions.
`answer_for` checks if there is an answer for a question. This is for persistance of answers for validation. `error_for` set error attributes only at `#create` action. 

[source]: https://github.com/dileepnandanam/react_rails_survey