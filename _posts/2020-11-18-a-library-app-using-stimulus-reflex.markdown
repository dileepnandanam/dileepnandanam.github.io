---
layout: post
title:  "A library app using Stimulus Reflex"
date:   2020-11-18 17:34:04 +0530
categories: react
---
[source][source]
## prepare the app

Assume we have rails 6 installed.

create a new App with devise and haml installed and configured. I'm using tailwind for styling.

{% highlight shell %}
$ bundle add stimulus_reflex
$ bundle exec rails stimulus_reflex:install
{% endhighlight %}
We need Book model for the library
{% highlight shell %}
rails g model book author:string name:string
{% endhighlight %}
Now let's create a reflex for books
{% highlight shell %}
$ rails g stimulus_reflex Admin::Books
{% endhighlight %}
This will create
{% highlight shell %}
app/reflexes/application_reflex.rb
app/reflexes/admin/books_reflex.rb
{% endhighlight %}
The BookReflex recieve and transmit data through action cable in the form of change logs on view, which will get rendered on Morph DOM and further repainted where we wanted.
So we need to configure Action cable like following.
{% highlight ruby %}
#app/channels/application_cable/connection.rb
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user
​
    def connect
      self.current_user = find_verified_user
    end
​
    protected
​
    def find_verified_user
      if (current_user = env["warden"].user)
        current_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
{% endhighlight %}
Let us create a plyground for reflexes. Make `admin/books` controller with index action and create view files as follows.
{% highlight ruby %}
#app/controllers/admin/books_controller.rb
class Admin::BooksController < ApplicationController
  before_action :check_permission

  def index
    @books = Book.all
  end

  protected

  def check_permission
    unless current_user.try(:admin?)
      render 'layouts/noaccess'
    end
  end
end
{% endhighlight %}
This controller just maintain initial rendering of books collection with view
`#app/views/admin/books/index.haml` and the rest of it will be handled by reflex actions.
Let's dive into the views for create book.
{% highlight haml %}
#app/views/admin/books/index.haml
= link_to 'Add book', '#', data: {reflex: 'click->Admin::BooksReflex#new'}, class: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
.new-book-form-container
.books
  = render partial: 'admin/books/books', locals: {books: @books}
{% endhighlight %}
Here `data: {reflex: 'click->Admin::BooksReflex#new'}` specifies which reflex action should be called on which event. Event is `click` and reflex action is `new` from `Admin::BookReflex`. We have .new-book-form-container which can hold a form. so we can execute 
`morph '.new-book-form-container', render(partial: 'admin/books/new', locals: {book: Book.new})`
Now `.new-book-form-container` will be rendered with `admin/books/new`
{% highlight haml %}
#app.views/admin/books/new
= form_for([:admin, book], data: {reflex: 'submit->Admin::Books#create'}, html: {class: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm mt-4'}) do |f|
  = f.label 'Name of Book', class: 'block text-gray-700 text-l font-bold'
  .text-red-600
    = f.object.errors[:name].first
  .clearfix
  = f.text_field :name, class: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2'
  .clearfix
  = f.label 'Author of Book', class: 'block text-gray-700 text-l font-bold'
  .text-red-600
    = f.object.errors[:author].first
  .clearfix
  = f.text_field :author, class: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2'
  .clearfix
  = f.submit 'Create Book', class: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3'
{% endhighlight %}
As you can see on the top, the form submit is delegated to reflex action create. We have a create action as follows.
{% highlight ruby %}
def create
  @book = Book.create book_params
  if @book.valid?
    morph '.books', render(partial: 'admin/books/books', locals: {books: Book.all})
    morph '.new-book-form-container', ''
  else
    morph '.new-book-form-container', render(partial: 'admin/books/new', locals: {book: @book})    
  end
end
{% endhighlight %}
On successfull creation of book, the `book` element in `index.haml` is rendered with updated list of books.
{% highlight haml %}
#app/views/admin/books/_books.haml
- books.each do |book|
  .book{id: "book-#{book.id}"}
    = render partial: 'admin/books/book', locals: {book: book}

#app/views/admin/books/book.haml
.border.border-grey-900.p-3.mt-3.shadow.rounded-md
  .text-3xl.float-left
    = book.name
  .clearfix
  .text-xl.float-left
    = book.author
  .clearfix
  .text-xl.float-left
    = book.serial_number
  .clearfix
  .mb-2
{% endhighlight %}
And finally Let's make the reflex
{% highlight ruby %}
#app/reflexes/admin/book_reflex.rb
class Admin::BooksReflex < ApplicationReflex
  delegate :current_user, to: :connection
  delegate :render, to: ApplicationController

  before_reflex :check_permission

  def new
    book = Book.new
    morph '.new-book-form-container', render(partial: 'admin/books/new', locals: {book: book})
  end

  def create
    @book = Book.create book_params
    if @book.valid?
      morph '.books', render(partial: 'admin/books/books', locals: {books: Book.all})
      morph '.new-book-form-container', ''
    else
      morph '.new-book-form-container', render(partial: 'admin/books/new', locals: {book: @book})    
    end
  end

  protected
  def book_params
    params.require(:book).permit(:name, :author)
  end

  def check_permission
    unless current_user.admin?
      morph '.page', '<h1>This part is not accessible</h>' and return
    end
  end
end
{% endhighlight %}

[source]: https://github.com/dileepnandanam/hlibrary