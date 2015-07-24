// components
var CommentBox = React.createClass({
  render: function() {
    return (
      // JSX
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>

      // same as:
      // React.createElement(
      //   "div",
      //   { className: "commentBox" },
      //   "Hello I'm a CommentBox"
      // )
    );
  }
});

// more components
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="CommentList">
        <Comment author="conan">This is one comment</Comment>
        <Comment author="annie">this is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        I am a CommentForm
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

    return (
      <div className="comment">
        <h2 className="commentAuthor">
          { this.props.author }
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
})

React.render(
  <CommentBox />,
  document.getElementById("content")
);
