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
        I am a CommentList
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

React.render(
  <CommentBox />,
  document.getElementById("content")
);
