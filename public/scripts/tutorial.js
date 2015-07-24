var data = [
  {author: "conan", text: "this is one comment"},
  {author: "annie", text: "this is *another* comment"}
];

// components
var CommentBox = React.createClass({
  render: function() {
    return (
      // JSX
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
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
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="CommentList">
        {commentNodes}
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
  <CommentBox data={data} />,
  document.getElementById("content")
);
